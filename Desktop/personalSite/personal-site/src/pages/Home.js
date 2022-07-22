import { BiDownArrow } from 'react-icons/bi';
import React from 'react';
import '../components/components.css';
import { TagLine, Title } from "./Styled";
import About from './About';
import './Home.css';



export function Home(props) {

    var scroll = () => {
        document.getElementById("scroller").scrollTo({ top: 500, behavior: 'smooth' });

    }
    return (
        <div className="pages" id='scroller'>
            <div className='page'>

                <div style={{ display: 'flex', height: '100vh' }}>
                    <div className='leftmain'>
                        <div className='profileContainer' > </div>
                    </div>
                    <div className='rightmain'>
                        <Title style={{ marginTop: '30vh' }}>Mirayna Mckinney</Title>
                        <TagLine style={{ fontSize: '2vh', color: 'rgb(96, 178, 226)' }}>UCLA Linguistics and Computer Science</TagLine>
                    </div>
                </div>

                <div className='bounce' style={{ textAlign: 'center', position: 'absolute', top: '90%', width: '100vw' }}>
                    <TagLine style={{ fontSize: '2vh' }}>Learn More About Me</TagLine>
                    <BiDownArrow onClick={scroll} color={props.theme.opposite} />
                </div>
            </div>
            <div className='page'>
                <About />
            </div>
        </div>
    )
}