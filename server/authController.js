const bcrypt = require('bcryptjs');

module.exports = { 
    
    userRegistration: async (req, res) => {
        console.log(req.body)
        const {username, password} = req.body
        const db = req.app.get('db')

        let foundUser = await db.check_user(username);
        if(foundUser[0]){
            return res.status(400).send('Email is already in use')
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.user_registration(username, hash);

        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    },

    userLogin: async (req, res) => {
        console.log(req.body)
        const {username, password} = req.body
        const db = req.app.get('db')

        let foundUser = await db.check_user(username);
        if(!foundUser[0]){
            return res.status(400).send('Username not found')
        }

        let authorized = bcrypt.compareSync(password, foundUser[0].password);
        if(!authorized){
            return res.status(401).send('Incorrect password')
        }

        delete foundUser[0].password;
        req.session.user = foundUser[0];
        res.status(202).send(req.session.user);

    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}