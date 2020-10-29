# node-base-practice

# I/O
异步非阻塞I/O 响水壶的例子 阻塞非阻塞说明的是老王的状态，同步非同步说明的是水壶调用的姿势。异步一般配合非阻塞才能发挥其作用。

同步调用 fs.readFileSync('./conf.js')  代码会阻塞在这里

异步调用 fa.readFile('./conf.js', (err, data) => {})

promisify


# Buffer缓冲区
读取数据类型为Buffer，Buffer用于在TCP流、文件系统操作、以及其它上下文与八位字节流进行交互。八位字节组成的数组，可以有效的在JS中存储二进制数据。

Buffer.alloc(10) Buffer.from('a') Buffer.concat([buf1, buf2])

# http服务

http.createServer((request, response) => { response.end('hello') })

Accept代表发送端(客户端)希望接收的数据类型 Accept: text/xml; 代表客户端希望接收的数据类型是xml类型

Content-Type 代表发送端(客户端|服务器) 发送的实体数据的数据类型 Content-Type: text/html; 代表发送端发送的数据格式是html

# Stream 流
stream是用于与node中流数据交互的接口 fs.createReadStream('./01.jpg') fs.createWriteStream('./02.jpg')

