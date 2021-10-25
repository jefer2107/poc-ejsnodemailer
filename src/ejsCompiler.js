const ejs = require('ejs')

const ejsCompiler = (ejsTemplate, data) => {
    let template = ejs.compile(ejsTemplate);
    const gty = template(data) 
    return gty
}

module.exports = ejsCompiler

