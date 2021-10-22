const ejs = require('ejs')
const fs = require('fs')

ejs.renderFile('./template.ejs',{
    items: ['Lista1','Lista2']
},(err,html)=>{
    fs.writeFile('template.html',html,(err)=>{
        console.log('Ok')
    })
})