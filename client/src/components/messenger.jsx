
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import LoginDialogue from "./account/LoginDialogue";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import ChatDialog from "./chat/ChatDialog";

const LoginHeader = styled(AppBar)`
height:220px;
background-color:#f70776;
box-shadow:none;
`
const Header = styled(AppBar)`
height:125px;
background-color:#c3195d;
box-shadow:none;
`
const Component = styled(Box)`
height:100vh;
backgroud-color:#00bfa5;
`
const Messenger = () => {
    const { account } = useContext(AccountContext);
    return (
        <Component>
            {
                account ?

                    <>
                        <Header>
                            <Toolbar>

                            </Toolbar>
                        </Header>
                        <ChatDialog />
                    </>
                    :
                    <>
                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                        </LoginHeader>
                        <LoginDialogue />
                    </>
            }
        </Component>
    )
}
export default Messenger;