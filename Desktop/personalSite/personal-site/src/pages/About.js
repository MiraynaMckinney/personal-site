import React from 'react';
import './style.css'
import {Title, TagLine2} from "./Styled"



function About(props) {
    return (
        <div>
            <div style={{ height: 100 }}>
                <Title>About Me</Title>
            </div>
            <div style={{display:'flex', justifyContent: 'center'}}>
                
                <span style={{fontSize:'2vh'}}>
                        <TagLine2 className ='about' style={{ justifyContent: 'center', padding:'3vh', whiteSpace: 'pre-line', width:'55vw' }}>
                            Hello! My name is Mirayna Mckinney. I am a graduating 3rd year Bachelor's in Linguistics and Computer Science major from UCLA.
                            {"\n"}{"\n"}
                            I've always loved language, the behind-the-sceens of computers and programs, and the combination of the two.
                            {"\n"}{"\n"}
                            In Computer Science, I am most interested in
                            web and app development and NLPs, but I am open to trying my hand in all fields.
                            {"\n"}{"\n"}
                            I am experienced with Node.js, React.js, Flutter, Git, C++, Python,
                            Java and more.
                            {"\n"}{"\n"}
                            I spend my free time working on applications I've had ideas for or other projects. Outside the world of computers, I love piloting, surfing, playing soccer and playing guitar.
                        </TagLine2>
                </span>
            </div>
        </div>
    )
}

export default About