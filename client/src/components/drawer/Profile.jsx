import{Box,styled, Typography} from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
const MainWrapper=styled(Box)`
background:#e3e3e3;
height:100%;
`
const ImageContainer=styled(Box)`
display:flex;
justify-content:center;
`;
const Image=styled('img')({
    width:200,
    height:200,
    borderRadius:'50%',
    padding:'25px 0px'
})
const BoxWrapper=styled(Box)`
background:#fcfefe;
padding:12px 30px 2px;
height:75px;
box-shadow:0px 1px 3px rgba(0,0,0,0.08)
& : first-chile{
    font-size:13px;
    color:#009688;
    font-weight:200;
}
& : last-child{
    margin:14px 0;
    color:#4A4A4A;
}
`;
const DescriptionContainer=styled(Box)`
padding:15px 20px 28px 30px;
& > p{
    font-size:13px;
    color:#869680;
}
`
const Profile=()=>{
    const {account}= useContext (AccountContext);
    return(
        <MainWrapper>

        <ImageContainer>
            <Image src={account.picture} alt='dp' />
        </ImageContainer>

        <BoxWrapper>
            <Typography>Your Name</Typography>
            <Typography>{account.name}</Typography>
        </BoxWrapper>

        <DescriptionContainer>
            <Typography>This is not username or pin this name will displayed on Smartchat account !</Typography>
        </DescriptionContainer>

        <BoxWrapper>
        <Typography> About </Typography>
        <Typography> Somethime it is good to be alone !</Typography>
        </BoxWrapper>

        </MainWrapper>
    )
}
export default Profile;