const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());
app.listen(5500, () => {
    console.log('Server Works !!! At port 4000');
});
app.get('/download', (req,res) => {
var URL = req.query.URL;
res.header('Content-Disposition', 'attachment; filename="music.mp3"');
ytdl(URL, {
    format: 'mp3',
    filter: 'audioonly'
    }).pipe(res);
});