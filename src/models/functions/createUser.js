const db = require('../../config/database/config')
const bcrypt = require('bcrypt')

const createUser = async (userData) => {
    try {
        let { name, email, password } = userData

        // Verificar se todos os campos foram fornecidos
        if (!name || !email || !password) {
            throw new Error('Todos os campos são obrigatórios')
        }

        // Validar o formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            throw new Error('E-mail inválido')
        }

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10)

        // Inserir no banco de dados
        await db('user').insert({
            name,
            email,
            password: hashedPassword
        })
        
        console.log('Usuário inserido com sucesso')
        return true
    } catch (error) {
        console.error('Erro ao inserir usuário:', error.message)
        return false
    }
}

module.exports = createUser