const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());
app.listen(200, () => {
    console.log('Server Works !!! At port 5500');
});
app.get('/download', (req,res) => {
var URL = req.query.URL;
var NAME = req.query.NAME;
var fileName = `${NAME}.mp3`;
res.header('Content-Disposition', `attachment; filename=`+fileName);
ytdl(URL, {
    format: 'mp3',
    filter: 'audioonly'
    }).pipe(res);
});