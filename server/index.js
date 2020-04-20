require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
    port = SERVER_PORT,
    app = express();

const authCtrl = require('./authController.js')
const postCtrl = require('./postController.js')

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60}
}))

app.put('/api/login', authCtrl.userLogin)
app.post('/api/registration', authCtrl.userRegistration)
app.post('/api/addpost', postCtrl.addNewPost)
app.get('/api/logout', authCtrl.logout)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db=>{
    app.set('db', db);
    console.log('DB CONNECTED')
})
    
app.listen(port, () => console.log(`SERVER IS RUNNING ON ${port}`));