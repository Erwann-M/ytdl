var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');
var NAMEinput = document.querySelector('.music_name');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value, NAMEinput.value);
});
function sendURL(URL, NAME) {
    window.location.href = `https://ytdl.erwann-martin.fr/download?URL=${URL}&NAME=${NAME}`;
}