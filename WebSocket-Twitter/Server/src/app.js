const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server);

io.on('connection', socket => {
    
    var Twitter = require('node-tweet-stream')
        socket = new Twitter({
      consumer_key: '', //Dados do seu Twitter Developer
      consumer_secret: '', //Dados do seu Twitter Developer
      token: '', //Dados do seu Twitter Developer
      token_secret: '' //Dados do seu Twitter Developer
    })

    socket.track('playstation 5'); //Palavra chave para fazer a busca 

    socket.on('tweet', function (tweet) { 
        io.emit('tweet', tweet);
      
      })
       
      socket.on('error', function (err) {
        
      })
});

module.exports = server;

