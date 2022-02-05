import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import styled from "styled-components"
import { Typography} from '@material-ui/core';
import Logo from './logo';
import { useNavigate } from 'react-router';


const Linkcont = styled(Link)`
    background-color: transparent ;
    text-align: center;
    padding: 50 px;
    background-image: '';
    color: ${props => props.theme.tagLineColor};
    font-size: '6vh';
`
const About = styled.div`
    color: ${props => props.theme.tagLineColor};
    font-size: '6vh';
`
function Navbar(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };
    let navigate = useNavigate();
    async function AboutMe () {
        await navigate('/');
        document.getElementById("scroller").scrollTo({ top: 500, behavior: 'smooth' });
    }
    async function Home () {
        await navigate('/');
        document.getElementById("scroller").scrollTo({ top: 0, behavior: 'smooth' });
    }
    const icon = props.theme === "light" ? <CgSun size={'4vh'} color='black' className='nav-link'/> : < HiMoon size={'4vh'} color='white' className='nav-link'/>;
    return (
        <Typography className='navbar-container'>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} >
            <div onClick={Home} className='nav-link' ><Logo theme={props.theme}/></div>
            <Linkcont to='/skills' className='nav-link'>
                Skills
            </Linkcont>
            <Linkcont to='/contact' className='nav-link' >
                Contact Me
            </Linkcont>
            <About onClick={AboutMe} className='nav-link' >
                About Me
            </About>
            </div>
            <div>
            <div onClick={changeTheme} style={{ position: 'sticky' }}>
                {icon}
            </div>
            </div>
            
        </Typography>

    )
}

export default Navbar;