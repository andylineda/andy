var http = require("http");
var fs = require("fs");


http.createServer(function (req, res){ //create Server

    var content ='';  //宣告content為一段資料
    
    fs.readFile("./demo2.html", function (err, file) //讀一個檔案的funtion 並call back
    {
        content += file; //把檔案給content
        setTimeout(function () 
        {
            res.end(content);
        }, 5000);
    
    });

    
    
    //res.end("welcome to my server"); //end Response
}).listen(3000);