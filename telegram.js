const http = require("http");
const config = require('./config');
const TelegramBot = require('node-telegram-bot-api');

const tbot = new TelegramBot(config.telegram.token, {polling: true});

const host = 'localhost';
const port = 8000;

const send = (msg) => {
    tbot.sendMessage(config.telegram.channelId, decodeURI(msg));
};

const requestListener = function (req, res) {
    res.writeHead(200);
    const msg = req.url.split('/')[1];
    if(msg.length > 1 && msg !== 'favicon.ico')
        tbot.sendMessage(config.telegram.channelId, "Slots available at following centers:" + decodeURI(msg));
    res.end("Done");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Twilio Server is running on http://${host}:${port}`);
});