const express = require('express')
const router = require('./application')
const bodyParser = require('body-parser')
const env = require('dotenv')
const session = require('express-session')
const superRouter = require('./application/pages-routes')
const db = require('./db')
const cors = require('cors')



env.config()
const app = express()
const PORT = process.env.PORT || 3015

db.bootstrap();
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

 app.use('/', router)
 app.use('/super', superRouter)

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})