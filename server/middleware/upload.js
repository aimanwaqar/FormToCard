import {GridFsStorage} from 'multer-gridfs-storage';
import multer from 'multer';

const storage = new GridFsStorage({
    url : "mongodb://aimanwaqar:aimanwaqar686@ac-cnscgip-shard-00-00.vdbqisp.mongodb.net:27017,ac-cnscgip-shard-00-01.vdbqisp.mongodb.net:27017,ac-cnscgip-shard-00-02.vdbqisp.mongodb.net:27017/?ssl=true&replicaSet=atlas-t0z2gs-shard-0&authSource=admin&retryWrites=true&w=majority",
    options : {useNewUrlParser: true,},
    file: (request, file) =>{
        const match = ["image/png", "image/jpeg", "image/jpg"];
        if(match.indexOf(file.memeType) === -1){
            return `${Date.now()}-blog-$${file.originalname}`
        }
        return{
            bucketName: "photos",
            filename: `${Date.now()}-blog-$${file.originalname}`


        }
    }

})

export default multer ({storage});