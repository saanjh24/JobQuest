import mongoose from "mongoose";


export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
       dbName:"MERN_STACK_JobQuest"

    }).then(() =>{
        console.log('connected to database fuck !!!')
    }).catch((err)=>{
        console.log('error occur:  ${err}');
    });

};