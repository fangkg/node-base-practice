(async () => {
    const fs = require('fs');
    const { promisify } = require('util');
    const readFile = promisify(fs.readFile);
    const data = await readFile('./config.js');
    console.log('立即执行函数:', data)
})()

// async await 高级属性 try catch
