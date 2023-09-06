const express = require("express");

const app = express();

app.get('/server', (req,res) => {
    // 允許跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send('HELLO AJAX');
});

// JSON響應
app.get('/json-server', (req,res) => {
    // 允許跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    // 響應一個json
    const data = {
        name: "dennis"
    }
    // 對數據做轉換
    let str = JSON.stringify(data);
    res.send(str);
});

app.post('/server', (req,res) => {
    // 允許跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send('HELLO AJAX POST');
});

// 針對IE緩存
app.get('/ie', (req,res) => {
    // 允許跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send('HELLO IE');
});

// 延時響應
app.get('/delay', (req,res) => {
    // 允許跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    // 設定3秒後回傳數據
    setTimeout(()=>{
        res.send('延時響應');
    },3000);
});

// jQuery 服務
app.all('/jQuery-server', (req,res) => {
    // 允許跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    
    // 響應一個json
    const data = {
        name: "dennis_GET"
    }
    // 對數據做轉換
    let str = JSON.stringify(data);
    res.send(str);
});

// jQuery 服務
app.post('/jQuery-server', (req,res) => {
    // 允許跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    // 響應一個json
    const data = {
        name: "dennis_POST"
    }
    let str = JSON.stringify(data);
    res.send(str);
});

// Axios 服務
app.all('/axios-server', (req,res) => {
    // 允許跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    // 響應一個json
    const data = {
        name: "HELLO AXIOS"
    }
    let str = JSON.stringify(data);
    res.send(str);
});

// fetch 服務
app.all('/fetch-server', (req,res) => {
    // 允許跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    // 響應一個json
    const data = {
        name: "HELLO AXIOS"
    }
    let str = JSON.stringify(data);
    res.send(str);
});


app.listen('9000',() => {
    console.log("服務已經啟動,9000監聽中.....");
});