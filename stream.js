// 流
const fs = require('fs');
const rs = fs.createReadStream('./img.png');
const ws = fs.createWriteStream('./2.png');
// 导管 rs导入到ws
rs.pipe(ws);