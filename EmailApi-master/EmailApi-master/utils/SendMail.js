const nodemailer = require('nodemailer')

const mailer = (email) => {

    // The output message to be shown
    const output = `
    <p>Congrats! successfully Verify</p>
    <h3>Password Verification</h3>
    <ul>  
    <li>Email: ${email}</li>
    </ul>
`;

    var transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user: "starizontech3@gmail.com", // Sender's email address
            pass: "bhaskar123@" // password
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    let mailOptions = {
        from: "Facebook", // sender address
        to: email, // list of receivers
        subject: 'Please verify your password of Facebook', // Subject line
        text: 'your veirfication is complete', // plain text body
        html: output // html body
    };

    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });  
    } catch (error) {
       return 'Cannot send email' 
    }

}

module.exports = { mailer }