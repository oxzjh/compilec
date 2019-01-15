'use strict';

const fs = require('fs');
const compiler = require(`./bin/${process.versions.modules}/compiler_${process.platform}`);

require('module')._extensions['.jsc'] = (m, f) => {
	compiler.compile(fs.readFileSync(f), 'compile', f, m._compile.bind(m));
};

module.exports = compiler;