

const express = require("Express")
const app = express()
const mysql = require("mysql");




//mqsql check
const mysqll = mysql.createConnection({
    user:"sag",
    password:"",
    host:"localhost",
    database:"test",

});

app.get("/insert",(req, res)=>{

    mysqll.query(
        'INSERT INTO ncr (name,city) VALUES ("allu","delhi")',(err,result)=>
        {
            if(err){
                console.log("Error came");
            }
            res.send(result);
        }
       
    )
}
)


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