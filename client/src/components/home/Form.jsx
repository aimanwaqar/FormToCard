import { useState, useContext, useEffect } from "react";
import { Box, styled, FormControl, InputLabel, Input, FormHelperText, Button, FormGroup } from "@mui/material"
import { sendData } from "../../services/api";
import { UserProvider } from "../../context/ContextApi";
import { uploadFile } from "../../services/api";


const FormContainer = styled(FormGroup)`
    width: 50%; 
    display: flex;
    flex-direction: column;
    height: 80%;

    padding: 50px;
    align-items: center;
    justify-content: center;
    & > div{
        margin-top: 20px;
    }
    border-radius: 5px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)
`;

const InputField = styled(Input)`
   width: 500px;  
`;

const Image = styled('label')({
    border: '1px solid black',
    padding: '6px',
    fontSize: '18px',
    borderRadius: '3px',
    backgroundColor: 'blue',
});

const defaultUser = {
    name: '',
    rollno: '',
    batch: '',
    year: '',
    dept: '',
    image: '',
}

const Form = () => {
     
    
    const { user, setUser, setShow, file, setFile } = useContext(UserProvider);
    const [userDetails,setUserDetails] = useState(defaultUser);

    useEffect(()=>{
           const getImage = async() =>{
            if(file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                //api call
                const response = await uploadFile(data);
                setUserDetails({...userDetails, image: response.data});//Todo
                console.log(userDetails.image);
            }
           }
           getImage();
    },[file]);
    
    const OnChanegValues = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value ? e.target.value : " "});
        console.log(userDetails);
        setShow(false);

}

setUser(userDetails);


    const SendData = () => {
         setUser(userDetails);
        console.log("successful");
        setShow(true);
    }



    return (
        <>
            <FormContainer>
                <FormControl>
                    <InputLabel htmlFor="name">Full Name</InputLabel>
                    <InputField id="name" onChange={(e) => OnChanegValues(e)} name="name" />
                    <FormHelperText style={{ display: 'none' }}>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="roll-no">Roll No.</InputLabel>
                    <InputField id="roll-no" onChange={(e) => OnChanegValues(e)} name="rollno" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="batch">Batch</InputLabel>
                    <InputField id="batch" onChange={(e) => OnChanegValues(e)} name="batch" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="year">Year</InputLabel>
                    <InputField id="year" onChange={(e) => OnChanegValues(e)} name="year" />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="dept">Department</InputLabel>
                    <InputField id="dept" onChange={(e) => OnChanegValues(e)} name="dept" />
                </FormControl>
                <FormControl>
                    <Image htmlFor="image">Uplaod Image</Image>
                    <input type="file" id="image" style={{ display: 'none' }} name="image" onChange={(e) => { setFile(e.target.files[0]) }} />

                </FormControl >
                <FormControl>
                    <Button variant="contained" onClick={() => SendData()}>Preview</Button>
                </FormControl>
            </FormContainer>
        </>
    )
}

export default Form;