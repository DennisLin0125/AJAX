const express = require("express");

const app = express();

app.get('/server', (req,res) => {
    // 允許跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send('HELLO AJAX');
});

app.listen('9000',() => {
    console.log("服務已經啟動,9000監聽中.....");
});