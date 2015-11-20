var http = require("http");
var fs = require("fs");


http.createServer(function (req, res){ //create Server

    var content ='';  //宣告content為一段資料
    fs.readFile("./demo.html", function (err, file) //讀一個檔案的funtion 並call back
    {
        content += file; //把檔案給content
        res.end(content); //把content輸出
    });

    //res.end("welcome to my server"); //end Response
}).listen(3000);