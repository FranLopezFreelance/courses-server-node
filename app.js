var express = require('express');
var mongoose = require('mongoose');
var app = express();
mongoose.connection.openUri('mongodb://localhost:27017/courses', (err, res)=>{
    if(err) throw err;
    console.log("\x1b[32m%s\x1b[0m", "MongoDB is runing in port 27017");
});
app.listen(3000, () => {
    console.info("\x1b[32m%s\x1b[0m", "Express Server is runing in port 3000");
})

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        message: 'ok!'
    })
});