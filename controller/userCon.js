const user =require('../model/user')

const getData= async(req,res)=>{
 let getc;
try{
     getc= await user.find();
}
catch(err){
    console.log(err)
}

if(!getc){
    return res.status(404).json({message:'data is found'})
}

return res.status(200).json({getc})
}
const postData= async(req,res)=>{
    const{name}=req.body;
    let getc;
   try{
        getc= new user({
            name,
        })
        await getc.save();
   }
   catch(err){
       console.log(err)
   }
   
   if(!getc){
       return res.status(500).json({message:'data is found'})
   }
   
   return res.status(201).json({getc})
   }

exports.getData=getData;
exports.postData=postData;