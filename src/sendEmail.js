const ejsCompiler = require('./ejsCompiler')
const mailService = require('./mailService')

const sendMail = (ejsTemplate, data, files = []) => {
    let body = null

    try {
        body = ejsCompiler(ejsTemplate, data)
    }catch(e) {
        throw Error(`Error happens when trying compiler EJS: ${e.message}`)
    }

    const send = (from, to, subject,files) => {
        const smtpData = {
            body,
            from,
            to,
            subject,
            files,
        }

        mailService(smtpData)
        
    }

    return {
        send
    }
}

module.exports = sendMail