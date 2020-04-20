module.exports = {
    addNewPost: async (req, res) => {
        const {title, image, content} = req.body
        const db = req.app.get('db')
        await db.add_post([1, title, image, content])
        return res.sendStatus(200)
    }
}