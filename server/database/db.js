import mongoose from 'mongoose';

const Connection = async() =>{
    const URL = "mongodb://aimanwaqar:aimanwaqar686@ac-cnscgip-shard-00-00.vdbqisp.mongodb.net:27017,ac-cnscgip-shard-00-01.vdbqisp.mongodb.net:27017,ac-cnscgip-shard-00-02.vdbqisp.mongodb.net:27017/?ssl=true&replicaSet=atlas-t0z2gs-shard-0&authSource=admin&retryWrites=true&w=majority"
    try{
        await mongoose.connect(URL,{
            useUnifiedTopology: true,
            useNewUrlParser : true,
        });
        console.log("Successfully connected with database");
    }catch(error){
        console.log("error while connecting database cloud",error.message);
    }
}

export default Connection;