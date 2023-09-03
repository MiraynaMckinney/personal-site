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
                        </TagLine2>
                </span>
            </div>
        </div>
    )
}

export default About