const Bweet = require('../model/Bweet')

module.exports = {
    async store(req, res) {
        const bweet = await Bweet.findById(req.params.id)
        
        bweet.set({ likes: bweet.likes + 1 })

        await bweet.save()

        // Enviar informações do like criado a todos usuarios
        req.io.emit('like', bweet)

        return res.json(bweet)
    },
}