import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import styled from "styled-components"
import { Typography } from '@material-ui/core';
import Logo from './logo';
import { useNavigate } from 'react-router';
import { BiMenu } from "react-icons/bi";



const Linkcont = styled(Link)`
    background-color: transparent ;
    text-align: center;
    background-image: '';
    color: ${props => props.theme.tagLineColor};
    font-size: '3vh';
`
const About = styled.div`
    color: ${props => props.theme.tagLineColor};
    font-size: '6vh';
`
export function Navbar(props) {
    const onClick = () => {
        document.querySelectorAll('.menu').classList.toggle('hidden');
    };
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };
    let navigate = useNavigate();
    async function AboutMe() {
        await navigate('/');
        document.getElementById("scroller").scrollTo({ top: 500, behavior: 'smooth' });
    }
    async function Home() {
        await navigate('/');
        document.getElementById("scroller").scrollTo({ top: 0, behavior: 'smooth' });
    }
    const icon = props.theme === "light" ? <CgSun size={'4vh'} color='black' className='nav-link' /> : < HiMoon size={'4vh'} color='white' className='nav-link' />;
    return (
        <Typography className='navbar-container'>
            <div style={{ display: 'flex', alignItems: 'center' }} >
            <div onClick={Home} className='nav-link' ><Logo theme={props.theme} /></div>
                {/* <BiMenu size={'4vh'} style={{padding: '3vh' }} onClick={onClick} className='menudrop nav-link' color={props.theme === "light" ? 'black' : 'white'} /> */}
                <About onClick={AboutMe} className='nav-link menu' >
                    About Me
                </About>
                 <Linkcont to='/skills' className='nav-link menu'>
                    Skills
                </Linkcont>
                <Linkcont to='/contact' className='nav-link menu' >
                    Contact Me
                </Linkcont>
                

                
            </div>
            <div style={{}}>
                <div onClick={changeTheme} style={{ position: 'sticky' }}>
                    {icon}
                </div>
            </div>

        </Typography>

    )
}

