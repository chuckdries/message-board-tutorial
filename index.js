const express = require('express')
var exphbs  = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded())

const messages = [
  'hello world',
  'is anybody out there',
  'who\'s there?'
]

app.get('/', (req, res) => {
  res.render('home', { messages })
})

app.post('/message', (req, res) => {
  const messageText = req.body.messageText
  messages.push(messageText)
  res.redirect('/')
})

app.get('/time', (req, res) => {
  res.send('the current time is ' + (new Date()).toLocaleTimeString())
})

app.listen(8000, () => {
  console.log('listening on localhost:8000')
})
