import { Dialog, Box, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
const dialogstyle = {
    height: '96%',
    marginTop: '23%',
    width: '70%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'none',
}
const Component = styled(Box)`
display:flex;
`;
const Container = styled(Box)`
padding: 56px 0 56px 56px;
display:flex;
flex-direction:column;
flex:'60';
`;
const Title = styled('p')({
    fontSize: 28,
    color: '#525252',
    fontFamily: "inherit",
    marginBottom: 50
});
const Ol = styled('li')({
    fontSize: 20,
    padding: 0,
    marginTop: 15,
    color: '#4a4a4a'
})
const LoginDialogue = (res) => {
    const { setAccount } = useContext(AccountContext)
    const onLoginSuccess = (res) => {
    const decoded = jwt_decode(res.credential);
    setAccount(decoded);
    }
    const onLoginError = (res) => {
        console.log("Login Failed", res);
    }
    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogstyle }}
            hideBackdrop={true}>
            <Component>
                <Container>
                    <Title>To use SmartChat on your computer</Title>
                    <ol>
                        <Ol>Open SmartChat on your phone</Ol>
                        <Ol>Tap Menu or setting and select Linked Devices</Ol>
                        <Ol>Login to use the SmartChat on you device</Ol>
                    </ol>
                </Container>
                <Box style={{ position: 'absolute', top: '20%', right: '15%' }}>
                    <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                    />
                </Box>
            </Component>
        </Dialog>
    )
}
export default LoginDialogue;