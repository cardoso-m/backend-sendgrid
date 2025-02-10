require('dotenv').config() // Carrega variáveis do arquivo .env
const sgMail = require('@sendgrid/mail')

// Defina a chave da API do SendGrid usando variável de ambiente
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = (email, code) => {

  const mailOptions = {
    to: email,
    from: process.env.EMAIL,  // O e-mail registrado no SendGrid
    subject: 'Código de Verificação',
    html: `
      <html>
        <head>
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              font-family: Arial, sans-serif;
            }
            .content {
              text-align: center;
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 10px;
              background-color: #f9f9f9;
            }
            h2 {
              color: #333;
            }
            p {
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="content">
            <h2>Olá, </h2>
            <p>Seu código de verificação é:</p>
            <h2>${code}</h2>
          </div>
        </body>
      </html>
    `
  }

  sgMail
    .send(mailOptions)
    .then(() => {
      console.log('E-mail enviado com sucesso!')
      return true
    })
    .catch((erro) => {
      console.error('Erro ao enviar o e-mail:', erro)
      return false
    })
}

module.exports = sendEmail