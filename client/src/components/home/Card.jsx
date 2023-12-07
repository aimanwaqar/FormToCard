import { Box, Typography, dividerClasses, styled } from "@mui/material"
import DownButton from "./DownButton";
import { useContext } from "react";
import {UserProvider} from "../../context/ContextApi"

const CardContainer = styled(Box)`
   width: 35%;
   height: calc(100vh- 40px);
  
`;

const CardBox = styled(Box)`
  width: 100%;
  height: 300px;
  border: 2px solid black;
  margin: 50px 0 0 100px;
  border-radius: 10%;
  overflow: hidden;
`

const Top = styled(Box)`
   display: flex;
   padding: 10px;
   width: 100%;
   background-color: grey;
   height: 115px;

`;

const Bottom = styled(Box)`
   display: flex;
   width: 100%;
   height: 185px;
`;

const TextContainer = styled(Box)`
  width: 60%;
  padding: 10px;
`;


const Card = () => {

  const {show,user} = useContext(UserProvider);
  const nedUrl = "https://www.result.pk/_images/articles/images/2021-10/19399_1_89023.png"
  return (
    <>

      <CardContainer>
        <CardBox id="card">
          <Top>
            <img src={nedUrl} alt="nedLogo" width="100px" height="100px" />
            <Box style={{ marginTop: 15, padding: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '80%' }}>
              <Typography variant="h3" style={{ color: 'brown', fontSize: 24, fontWeight: 600 }}>NED UNIVERSITY</Typography>
              <Typography style={{ color: 'brown' }}>Of</Typography>
              <Typography style={{ color: 'brown', fontWeight: 550 }}>ENGG. & TECH, KARACHI EAST </Typography>
              <Box style={{ color: 'white', backgroundColor: 'brown', width: '100%', textAlign: 'center', fontWeight: 550, fontSize: 18 }}>STUDENT IDENTITY CARD</Box>
            </Box>
            <img src={show? user.image : nedUrl} alt="" width="100px" height="100px" />
          </Top>
          <Bottom>
            <Box width="20%" height="100%" style={{ backgroundColor: "brown", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h4" style={{ writingMode: 'vertical-lr', textOrientation: 'upright', color: '#FFF' }}>{show ? user.batch : ""}</Typography>
            </Box>
            <TextContainer>
              <Typography variant="h4" fontSize="22px" fontWeight="600" style={{ marginBottom: '15px' }}>{show ? user.name : ""}</Typography>
              <Typography>Batch : {show ? user.batch : ""}</Typography>
              <Typography>Department : {show ? user.dept : ""}</Typography>
              <Typography>Rollno. : {show ? user.rollno : ""}</Typography>
              <Typography>Year : {show ? user.year : ""}</Typography>
              <Typography style={{ marginTop: 15 }}>Expired On : {show ? user.name : ""}</Typography>
            </TextContainer>
          </Bottom>
        </CardBox>
        <DownButton user={user}/>
      </CardContainer >
    </>
  )
}

export default Card;
