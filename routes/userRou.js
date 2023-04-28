const express= require('express')
const routes= express.Router();
const Con= require('../controller/userCon')

routes.get('/',Con.getData)
routes.post('/',Con.postData)

module.exports=routes