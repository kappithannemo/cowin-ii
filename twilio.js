const http = require("http");
const twilio = require('twilio');
const config = require('./config');

const host = 'localhost';
const port = 8000;

const send = (msg) => {
    const accountSid = config.twilio.accountSid;
    const authToken = config.twilio.authToken; 
    const client = twilio(accountSid, authToken); 
     
    client.messages 
          .create({ 
             body: msg,
             from: 'whatsapp:+14155238886',       
             to: `whatsapp:${config.whatsapp}`, 
           })
          .then(message => console.log(`message sent ${message.sid}`))
          .done();
};

const requestListener = function (req, res) {
    res.writeHead(200);
    if(!isNaN(Number(req.url.split('/')[1])))
        send(req.url.split('/')[1]);
    res.end("Done");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Twilio Server is running on http://${host}:${port}`);
});