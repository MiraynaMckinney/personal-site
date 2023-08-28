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
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';



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
    async function Scroll(top) {
        await navigate('/');
        document.getElementById("scroller").scrollTo({ top: top, behavior: 'smooth' });
    }
    const icon = props.theme === "light" ? <CgSun size={'3vh'} color='black' className='nav-link' /> : < HiMoon size={'4vh'} color='white' className='nav-link' />;
    return (
        <div style={{ display: 'flex' }}>
            <Typography className='navbar-container'>
                <div style={{ display: 'flex' }} >
                    <div onClick={() => Scroll(0)} className='nav-link'> &lt;Mirayna /&gt; </div>
                    <div onClick={() => Scroll(500)} className='nav-link' >
                        About
                    </div>
                    <div onClick={() => Scroll(1000)} className='nav-link'>
                        Skills
                    </div>
                    <div onClick={() => Scroll(1500)} className='nav-link' >
                        Contact
                    </div>
                </div>
            </Typography>
            <div style={{}}>
                <div onClick={changeTheme} style={{ position: 'sticky' }}>
                    {icon}
                </div>
            </div>
        </div>

    )
}

