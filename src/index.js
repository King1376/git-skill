const commonjsName = require('./commonjs')
commonjsName.name = '我想改名！！'
console.log(commonjsName, 'name');
const rename = require('./commonjs')
console.log(rename, 'rename');