const http = require('http');
const fs = require('fs');

// 定义server
const server = http.createServer((request, response) => {
    // 收到浏览器请求触发
    console.log('request');
    console.log('原型链：', getPrototypeChain(response));
    // 结构出url method
    const { url, method, headers } = request;
    if (url === "/" && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            // 异常返回
            if (err) {
                // 返回中文 指定context-type类型为普通文本对象 字符编码为utf-8
                response.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                response.end('500 服务器异常！')
                return
            }
            // 正常返回 html页面
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.end(data);
        })
    } else if (url === '/users' && method === 'GET') {
        // 返回json
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        response.end(JSON.stringify([{name: 'tom'}]))
    } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1){
        // 请求图片
        fs.createReadStream('.' + url).pipe(response);
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        response.end('404 页面没找到！')
    }
    // end 流
    // response.end('hello http!');
})
// 启动server 回调函数
server.listen(3000, () => {
    console.log('Server is started!')
    
})

// 打印原型链
function getPrototypeChain(obj) {
    const protoChain = [];
    while(obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj);
    }
    return protoChain;
}