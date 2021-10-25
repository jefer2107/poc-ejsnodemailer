const nodemailer = require('nodemailer')


const mailService = ({body,from,to,subject})=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: false,
        auth: {
            user: to,
            pass: 'm3t@lp0p0'
        }
    });
    
    
    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        // attachments: [{
        //     filename: 'html5.png',
        //     path: 'pocsendmail/images/html5.png',
        //     cid: 'htmlteste'
        // }],

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











