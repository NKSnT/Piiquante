const http = require('http')//on import le  package https natif de node
const app = require('./app')
/*
To create an HTTPS server, you need two things: an SSL certificate, and built-in https Node.js module.
https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/
*/ 

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app); //fonction "app" executé a chaque appel sur le server
/*gère les erreure.
server.on('error', errorHandler);
server.on('listening', () => {
     const adress = server.adress();
     const bind = typeof adress === 'string' ? 'pipe' + adress :'port' + port
     console.log("listening on" + bind);
});
*/
server.listen(process.env.PORT || 3000);