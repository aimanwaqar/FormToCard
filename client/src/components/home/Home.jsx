import { Box, Typography, styled } from "@mui/material"
import Form from "./Form";
import Card from "./Card";

const Container = styled(Box)`
    width: 100%;
    height: calc(100vh-40px);
    display: flex;
    padding: 70px 100px;
`;

const Heading = styled(Typography)`
   font-size: 30px;
   font-family: inherit;
   font-weight: 700;
   text-Align: center;
   margin-top: 40px;
`;



const Home = () => {
    return (
        <>
            <Heading variant="h1">FORM TO ID CARD GENERATOR</Heading>
            <Container>
                <Form />
                <Card />
            </Container>
        </>
    )
}

export default Home;