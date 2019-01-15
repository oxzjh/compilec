# Running ".jsc"

## Usage:
```
require('compilerc');
```

## Compile ".js" to ".jsc":
```
const fs = require('fs');
const compiler = require('compiler');

function encrypt(buf) {
    return Buffer.from(compiler.encrypt(buf, 'compile'));
};

fs.writeFileSync('somefile.jsc', encrypt(fs.readFileSync('somefile.js')));
```