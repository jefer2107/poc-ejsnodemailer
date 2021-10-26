const nodemailer = require('nodemailer')


const mailService = ({body,from,to,subject,files})=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: false,
        auth: {
            user: 'wx2sistemasteste@gmail.com',
            pass: 'm3t@lp0p0'
        }
    });
    
    
    const mailOptions = {
        from,
        to,
        subject,
        attachments: files,
        html: body
    };
    
    transporter.sendMail(mailOptions,(error)=>{
    
        if(error)
        {
            console.log(error)
        }
        else
        {
            console.log(`Email enviado com sucesso!`)
        }
    
    })
}

module.exports = mailService











