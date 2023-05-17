const express = require('express')
const app = express()
app.set('views','./views')
app.set('view engine', 'pug')
app.use('/pictures', express.static(process.cwd() + '/pictures'));


app.get('/about', (req, res) => {
    res.render('index', 
    { title: 'About', 
    message: 'Hello there!',
  

 })
  })

app.listen(3000)

