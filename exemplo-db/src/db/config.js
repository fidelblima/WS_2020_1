const mongoose = require('mongoose');

const URI_DB = process.env.MONGODB_URI || 'mongodb://localhost/agenda';
mongoose
.connect(URI_DB, {useNewUrlParser: true})  
.then(() => console.log('mongoose conectado'))
.catch(erro => console.log(erro));


