const express = require ("express")

const app = express()

const PORT = 5000

const cards = [ 
    {
        id:"1",
        cardNumber:"1115646645"
    }, 

    {
        id:"2",
        cardNumber:2215646645
    }, 

    {
        id:"3",
        cardNumber:3315646645
    }, 

    {
        id:"4",
        cardNumber:4445646645
    }, 

    {
        id:"5",
        cardNumber:555646645
    }, 
]

app.get('/cards/:id', function (req, res) {
    const carddd = cards.find((card) => card.id == req.params.id);
    if (carddd){
        return res.status(200).json(carddd)
    }
    res.status(400).send("Yalnış əməliyyat")
  });

app.listen(PORT, (err)=>{
    if(!err){
        console.log("Server is not working")
    }
})
    