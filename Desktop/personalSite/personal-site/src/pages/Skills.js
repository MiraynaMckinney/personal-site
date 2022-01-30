import React from 'react';
import '../components/components.css'
import {Title, TagLine2} from "./Styled"
import { PicSlider } from '../components/projectslider';



function Skills(props) {
    const textcolor = props.theme === "light" ? 'black': 'white';
    return (
        <div>
            <div style={{ height: 100 }}>
                <Title>About Me</Title>
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
                
                <span>
                        <TagLine2 style={{ justifyContent: 'center', padding:'3vh', whiteSpace: 'pre-line', width:'45vw', fontSize:'2.5vh' }}>
                            Hello! My name is Mirayna Mckinney. I am in my 3rd and final year in my pursuit of a Bachelor's in Linguistics and Computer Science Major from UCLA.
                            I have always been fascinated with communication, the behind-the-sceens of computers and programs, and the combination of the two.
                            {"\n"}{"\n"}
                            When it comes to Computer Science, I am most interested in
                            web and app development and NLPs, but I am open to trying my hand in all fields.
                            {"\n"}{"\n"}
                            I am experienced with Node.js, React.js, Flutter, Git, C++, Python,
                            Java and more (check out my Skills page).
                            {"\n"}{"\n"}
                            I spend my free time working on applications I've had ideas for or other projects. Outside the world of computers, I love running, snowboarding, playing soccer and playing guitar.
                        </TagLine2>
                </span>
                <span style={{padding: '1vh'}}><PicSlider /></span>
            </div>
        </div>
    )
}

export default Skills