const sendMail = require("./src/sendEmail")

const str = `
    <h1> <%=name%> </h1>
    <p> <%=message%> </p>
    <% lista.forEach(field=> {%>
        <%= field %>
    <%}) %>

`

const data = {
    cid:"",
    name:"Rogério",
    message:"Olá estou testando a mensagem",
    lista:['Lista 1','Lista 2']
}


sendMail(str, data).send('wx2sistemasteste@gmail.com', 'jefer210784@gmail.com', 'Teste')
