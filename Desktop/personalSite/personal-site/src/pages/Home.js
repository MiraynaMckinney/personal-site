import { BiDownArrow } from 'react-icons/bi';
import React from 'react';
import '../components/components.css';
import { TagLine, Title } from "./Styled";
import About from './About';
import './Home.css';
import profile from '../assets/profile.png'


export function Home(props) {

    const scroll = () => {
        document.getElementById("scroller").scrollTo({ top: 500, behavior: 'smooth' });
    }
    return (
        <div className="pages" id='scroller'>
            <div className='page'>

                <div style={{ display: 'flex', height: '100vh' }}>
                    <div className='leftmain'>
                        <div className='profileContainer' > <img src={profile} style={{ height: '70vh', padding: '10vw', float: 'right', paddingBottom: 100 }} /> </div>
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


export function HomeMobile(props) {

    const scroll = () => {
        document.getElementById("scroller").scrollTo({ top: 500, behavior: 'smooth' });
    }
    return (
        <div className="pages" id='scroller'>
            <div className='page'>

                <div style={{ height: '100vh' }}>
                    <div >
                        <Title >Mirayna Mckinney</Title>
                        <TagLine style={{ fontSize: '2vh', color: 'rgb(96, 178, 226)' }}>UCLA Linguistics and Computer Science</TagLine>
                    </div>
                    <div>
                        <div className='profileContainer' style ={{ width: '80vw', height: '80vw', margin: '5vh'}}> <img src={profile} style={{ height: '70vh', marginTop: '-5vh', marginLeft: '-15vw'}} /> </div>
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