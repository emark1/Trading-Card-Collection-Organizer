const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const models = require('./models')
const jwt = require('jsonwebtoken')

//We need cors so the browser will allow us to interact between sites, otherwise it will flag as a security risk
app.use(cors())
//Body parser to read the body of received json
app.use(bodyParser.json())


//****************ADD CARD TO COLLECTION****************

  app.post('/add-card',(req,res) => {
    // Get the input variables from the results page
    let name = req.body.name
    let cmc = req.body.cmc
    let rarity = req.body.rarity
    let artist = req.body.artist
    let cardid = req.body.id
    let power = req.body.power
    let imageuripng = req.body.image_uris.png
    let price = req.body.prices.usd
    let colors = req.body.colors.toString()
    // let colorindicator = req.body.
    let coloridentity = req.body.color_identity.toString()

    //create variable that holds an object, in format of Card class
    let card = models.Card.build({
        name: name,
        cmc: cmc,
        rarity: rarity,
        artist: artist,
        cardid: cardid,
        power: power,
        imageuripng: imageuripng,
        price: price,
        color: colors,
        coloridentity: coloridentity
      })
    //save the new variable to the Cards table
    card.save().then((savedCard) => {
      console.log(savedCard)
    })
    .then(() => {
      //success message
      console.log("Card saved!")
    }).catch(error => console.log(error))
})

//****************RETRIEVE CARDS FROM DATABASE****************

app.get('/api/cards',(req,res) => {
    models.Card.findAll().then((cards) => res.json(cards))
})

//****************DELETE A CARD FROM DATABASE****************

app.post('/api/cards/delete',(req,res) => {
  let id = req.body.idcard
  console.log(id)
  models.Card.destroy({
    where: {
      id: id
    }
  }).then(() => {
    res.json({success: true, message: "CARD ELIMINATED"})
  })
})

//****************FIND PRICE SUMMARIES****************

app.get('/api/cards/price',(req,res) => {
models.Card.sum('price').then(sum => { 
  console.log(sum)
  res.json(sum)
  })
})


//****************LOGIN & AUTHENTICATION****************
const users = [
    {username: 'test', password: 'test'}
  ]

app.post('/login',(req, res) => {
    let username = req.body.username
    let password = req.body.password
    let user =  users.find((user) => {
        return user.username == username && user.password == password
    })

    if(user) {
        // user exists and have correct password

        jwt.sign({ username: username }, 'pinkflamingo', function(err, token) {
            if(token) {
            res.json({token: token})
            } else {
            res.status(500).json({message: 'Can\t do that token bud'})
            }
        });
    }
})

function authentication(req,res,next) {
    let headers = req.headers["authorization"]
    let token = headers.split(' ')[1]
  
    jwt.verify(token,'pinkflamingo',(err,decoded) => {
      if(decoded) {
        if(decoded) {
        next()
      } else {
        res.status(401).json({messages: 'Bad token bud'})
      }
    } else {
      res.status(401).json({messages: 'Bad token bud'})
    }
    })
  }

app.listen(8080,() => {
console.log('Server sure is humming!')
})