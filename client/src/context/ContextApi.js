import {createContext, useState} from "react";

export const UserProvider = createContext(null);

const UserAccount = ({children})=>{
    const [user,setUser] = useState();
    const [show,setShow] = useState(false);
    const [file,setFile] = useState('');
    

    return(
        <UserProvider.Provider value={{
            user,
            setUser,
            show,
            setShow,
            file,
            setFile

        }}        
        >
            {children}

        </UserProvider.Provider>
    );
}

export default UserAccount;