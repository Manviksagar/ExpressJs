

const express = require("Express")
const app = express()


app.get(("/"), (req, res)=>{

    res.send("Sagar working fine from Express")

});

app.get(("/hello"), async(req, res) =>{

    res.send("Rest call")

});

const sagrouter = require("./routes/sapapi")

app.use("/sag", sagrouter)



app.listen(9000, ()=>{

console.log("Server started")

});