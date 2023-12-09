import mongoose from "mongoose";


const userCard = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    rollNo: {
        type: String,
        required: true,
        
    },
    batch: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    department :{
        type: String,
        required: true,  
    },
    photo:{
        type: String,
        required: true,  
    },
    createdDate:{
        type: Date,
        
    }

});

const card = mongoose.model('card', userCard);

export default card;