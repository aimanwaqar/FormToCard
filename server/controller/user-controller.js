import Card from '../model/Userdata.js'


export const sendData = async(req,res)=>{
    try{ 
          const card = await new Card(req.body);
          card.save();
          return res.status(200).json('Card is saved');
    }catch(error){
        return res.status(500).json('Card is not saved', error)
    }
}