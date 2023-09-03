import { BiDownArrow } from 'react-icons/bi';
import React from 'react';
import '../components/components.css';
import { TagLine, Title } from "./Styled";
import { SocialMedia } from '../components/SocialMedia';
import About from './About';
import './Home.css';
import Skills from './Skills';
import Contact from './Contact';



export function Home(props) {

    var scroll = (top) => {
        document.getElementById("scroller").scrollTo({ top: top, behavior: 'smooth' });

    }
    return (
        <div className="pages" id='scroller'>
            <div className='page'>
                <Title style={{ marginTop: '30vh' }}>Mirayna Mckinney</Title>
                <TagLine style={{ fontSize: '2vh', color: 'rgb(96, 178, 226)' }}>Software Engineer</TagLine>
                <SocialMedia/>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='downarrow' onClick={() => scroll(500)}>
                        <TagLine style={{ fontSize: '2vh' }}>Learn More About Me</TagLine>
                        <BiDownArrow color={props.theme.opposite} />
                    </div>
                </div>
            </div>
            <div className='page'>
                <About />
            </div>
            <div className='page'>
                <Skills />
            </div>
            <div className='page'>
                <Contact />
            </div>
        </div>
    )
}