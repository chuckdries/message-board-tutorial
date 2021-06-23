import express from 'express'
import exphbs from 'express-handlebars'

import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const dbPromise = open({
  filename: 'data.db',
  driver: sqlite3.Database
})

const app = express()

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded())

app.get('/', async (req, res) => {
  const db = await dbPromise;
  const messages = await db.all('SELECT * FROM Message;')
  res.render('home', { messages })
})

app.post('/message', async (req, res) => {
  const db = await dbPromise
  const messageText = req.body.messageText
  await db.run('INSERT INTO Message (text) VALUES (?);', messageText)
  res.redirect('/')
})

app.get('/time', (req, res) => {
  res.send('the current time is ' + (new Date()).toLocaleTimeString())
})

const setup = async () => {
  const db = await dbPromise
  await db.migrate()
  app.listen(8000, () => {
    console.log('listening on localhost:8000')
  })
}
setup()
