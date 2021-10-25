const sendMail = require("./src/sendEmail")

const str = `
<% items.forEach(item => { %> 
    <h1> <%=item.name%> </h1>
    <p> <%=item.message%> </p>
<% }) %>
`

const data = {
    items:[
        {
            name:"Rogério",
            message:"Olá estou testando a mensagem"
        }
    ],
    
}


sendMail(str, data).send('wx2sistemasteste', 'jefer210784@gmail.com', 'Teste')
