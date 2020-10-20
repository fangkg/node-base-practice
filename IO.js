// 异步io
const fs = require('fs');
// promisify 把方法修饰成promise方法
const { promisify } = require('util');
const readFilePromise = promisify(fs.readFile);

// 同步读取
const data = fs.readFileSync('./config.js')
console.log('data:', data)
// Buffer对象
// 转成toString
console.log('data:', data.toString())

// 异步io效率高 性能提升明显
// 读取结果放在回调函数中 错误优先
const asyncData = fs.readFile('./async-config.js', (err, data) => {
    if (err) throw err;
    console.log('asyncData:', data)
});
