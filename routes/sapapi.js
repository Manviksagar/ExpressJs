

const express = require('Express')
const router = express.Router()


router.get(("/"), async(req, res)=>{

    res.send("Sagar router module is working fine")
})

router.get(("/hello"), async(req, res)=>{

    res.send("Sagar router module is working fine")
})


module.exports=router