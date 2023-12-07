import axios from 'axios';

const URL = "http://localhost:8000";

export const uploadFile = async(data) =>{
   try{
      const req = await axios.post(`${URL}/file/upload`, data);
      return req;
   }catch(error){
      console.log("Image is not uploaded");
   }
}

export const createCard = async(data) =>{
   try{
      const req = await axios.post(`${URL}/send/data`, data);
      console.log(req);
      return req;
   }catch(error){
      console.log("Data is not sent");
   }   

}