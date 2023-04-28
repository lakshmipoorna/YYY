const express= require('express')
const mongoose= require('mongoose')
const rout=require('./routes/userRou')

const app =express();
app.use('/datas',rout)
app.use(express.json())

mongoose.connect('mongodb+srv://poorna:ZdQVo8vOry1igjz1@cluster0.l0aedlp.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('db connected')
})

.then(()=>{
    app.listen(4000)
})


// 4UQvOHJSotTGA0Kj
// ZdQVo8vOry1igjz1