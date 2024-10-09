
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}))

const __dirname = dirname(fileURLToPath(import.meta.url))

app.get("/", (req, res)=> {
    
    // res.sendFile(__dirname + '/index2.html')
    res.render("qq.ejs", { name: 'Pat'})
 
})

app.post('/submit', (req, res)=> {
    
    console.log(req.body)
})

app.post('/post', (req, res)=> {
    res.send('<h1>POst</h1>')
    res.sendStatus(201)
    
})
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT} `)
})


