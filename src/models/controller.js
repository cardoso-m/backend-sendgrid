const generateCode = require('./functions/generateCode')
const sendEmail = require('./functions/sendEmail')
const createUser = require('./functions/createUser')

const sendCode = async (req, res) => {
    let userData = req.body
    //Gerar código
    let code = await generateCode()

    //Enviar código por e-mail
    let emailAsSend = await sendEmail(userData.email, code)

    if (emailAsSend == false) {
        res.status(400).send('Erro ao enviar o código')
    }

    return res.status(202).send({code})
}

const user = async (req, res) => {
    
    let userData = req.body

    let user = await createUser(userData)

    if(user){
        res.status(200).send('Usuário criado com sucesso')
    }else{
        res.status(400).send('Falha ao criar usuário')
    }
}

module.exports = {
    sendCode,
    user
}