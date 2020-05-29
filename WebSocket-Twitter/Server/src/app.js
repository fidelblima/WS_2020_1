const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server);

io.on('connection', socket => {
    
    var Twitter = require('node-tweet-stream')
        socket = new Twitter({
      consumer_key: 'XbeCmJBWgJvnGRazIH2mwLMdD', //Dados do seu Twitter Developer
      consumer_secret: 'gwxhnl1aSFGfERaKr57El2Fz9sUsFD42c5E835Peg390fs64U9', //Dados do seu Twitter Developer
      token: '155238701-MwmcRKNlHNEUEBRzU8SwucMlKc1sWKZgJjpyvXqP', //Dados do seu Twitter Developer
      token_secret: 'LnQ3UL2AuZZq0sUTWhCHkesfUYBv09Mdi1TZs2N1thlkF' //Dados do seu Twitter Developer
    })

    socket.track('playstation 5'); //Palavra chave para fazer a busca 

    socket.on('tweet', function (tweet) { 
        io.emit('tweet', tweet);
      
      })
       
      socket.on('error', function (err) {
        
      })
});

module.exports = server;

