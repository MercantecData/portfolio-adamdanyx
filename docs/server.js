var http = require("http")
var fs = require("fs")

function unpackCookie(cookie) {
    const regex = /(.*?)=(.*?)(; |$)/gm;
    const str = cookie;
    let m;
    var res = {}

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        res[m[1]] = m[2]
    }

    return res
}

http.createServer((req,res)=> {
    unpackCookie(req.headers.cookie)
    res.setHeader("set-cookie", ["test=one; Max-Age=100","testto=two"])
    fs.readFile("index.html",(err,data)=>{
        res.end(data)
    })
}).listen(8080)