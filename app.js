const express = require('express');
const methodOverride = require('method-override');
const app = express();
const homeRouter = require('./routes/home');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use('/',homeRouter);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}...`);
});