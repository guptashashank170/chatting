import { Drawer ,Typography,Box, styled} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";
const Header=styled(Box)`
background:#008069;
height:107px;
color:#FFFFFF;
display:flex;
& >svg , &> p{
    margin-top:auto;
    padding:16px;
    font-weight:600;
}
`;
const Component=styled(Box)`
bacground:#eaf6f6;
height:85%;
`
const InfoDrawer = ({ open, setOpen}) => {
    const handleClose = () => {
        setOpen(false);
    }
    const drawerStyle = {
        left: 20,
        top: 17,
        height: '95%',
        width: '30%',
        boxShadow: 'none'
    }
    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBack onClick={()=>setOpen(false)}/>
                <Typography>Profile</Typography>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    )
}
export default InfoDrawer;