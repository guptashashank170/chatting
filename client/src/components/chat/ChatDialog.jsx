import { Dialog,Box,styled } from "@mui/material";
import Menu from "./Menu/menu"
import EmptyChat from "./Chat/EmptyChat";
const dialogstyle = {
    height: '95%',
    margin:'20px',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'none',
}
const Component=styled(Box)`
display:flex;
`;
const LeftComponent=styled(Box)`
min-width:450px;
max-width:510px;
`;
const RightComponent=styled(Box)`
min-width:300px;
height:100%;
width:73%;
border-left:1px solid rbga(0, 0, 0, 0.14);

`;
const ChatDialog=()=>{
    return (
       <Dialog
       open={true}
       PaperProps={{ sx: dialogstyle }}
        hideBackdrop={true}>
            <Component>
        <LeftComponent>
            <Menu />
        </LeftComponent>
        <RightComponent>
            <EmptyChat />
        </RightComponent>
       </Component>
       </Dialog>
    )
}
export default ChatDialog;