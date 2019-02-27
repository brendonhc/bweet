const Bweet = require('../model/Bweet')

module.exports = {
    // Retornar os Bweets
    async index(req, res) {
        // Retorna os Bweets (objeto do mongoose) 
        // ordenados por data de criação com os mais novos em cima (-) 
        const bweets = await Bweet.find({}).sort('-createdAt')
        
        // Para retornar para o frontend em JSON
        return res.json(bweets)
    },

    // Criar novos Bweets a partir da requisição http (client-side)
    async store(req, res) {
        const bweet = await Bweet.create(req.body)

        // Enviando a mensagem do bweet criado para todos os usuarios
        req.io.emit('bweet', bweet)

        return res.json(bweet)
    }
}