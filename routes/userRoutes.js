const express=require('express')
const router=express.Router()


const {fileUpload,fileValidation}=require('../middleware/middleware.js') // changes here

const {extractData,audioTest}=require('../controllers/userControllers.js')// changes here 



// home routes
router.get('/',(req, res)=>{
    res.render('index.ejs')
})

// translate routes
router.post('/translate',fileUpload,fileValidation,(req, res)=>{
    extractData(req, res)

})

router.get("/test", (req, res)=>{
    res.render("test.ejs")
})

router.post("/check",(req, res)=>{
    console.log(req.body)    
})


 module.exports=router;
