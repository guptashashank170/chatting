import { Box, styled } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
const Component=styled(Box)`
background:#fff;
height:45px;
border-bottom:1px solid #F2F2F2;
margin-right:25px;
margin-top:10px;
`;
const Wrapper=styled(Box)`
background:#f0f2f5;
position:relative;
margin:0 13px;
width:100%;
border-radius:10px;
`;
const Icon=styled(Box)`
position:absolute;
height:100%;
padding:6px 8px;
color:#919191;
`;
const InputField=styled(InputBase)`
width:100%;
padding:16px;
padding-left:65px;
height:15px;
font-size:14px;
`;
const Search=()=>{
    return(
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon 
                    fontSize="small"/>
                </Icon>
                <InputField
                placeholder="Search or Start a new chat" />
            </Wrapper>
        </Component>
    )
}
export default Search;