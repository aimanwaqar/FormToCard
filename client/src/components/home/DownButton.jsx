import { Box, Button, styled } from "@mui/material";
import { createCard } from "../../services/api";
import html2canvas from 'html2canvas';

const StyledButton = styled(Button)`
    padding: 10px 20px;
          
`
const DownButton = ({ user }) => {

    const saveCard = async () => {
        let res = await createCard(user);
        console.log(res);
        const canvas = await html2canvas(document.getElementById("card"));
        canvas.style.display = "none";
        document.body.appendChild(canvas);
        const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        const a = document.createElement("a");
        a.setAttribute("download", `IdCard.png`);
        a.setAttribute("href", image);
        a.click();
    }

    return (
        <>
            <Box style={{ marginTop: '100px', marginLeft: '300px' }}>
                <StyledButton variant="contained" onClick={() => saveCard()} >Download</StyledButton>
            </Box>
        </>
    )
}

export default DownButton;