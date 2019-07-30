var express = require ('express');
var cookieParser=require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/',function (req,res) {
    console.log('cookies:',req.cookies);
    res.cookie('name','angry moji').send('cookie set');
});
app.listen(3001);