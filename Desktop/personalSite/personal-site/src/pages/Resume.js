import { Component } from 'react';
import Skillscloud from '../components/wordcloud';
import { TagLine, Title } from './Styled';
import {Slider} from '../components/projectslider';
import { BiDownArrow } from 'react-icons/bi';
import './Home.css'

class Resume extends Component {
    render() {
        const scroll = () => {
            document.getElementById("scroller2").scrollTo({ top: 500, behavior: 'smooth' });
        }
        return (
            <div className="pages" id='scroller2'>
                <div className='page'>
                    <Title>Skills</Title>
                    <div className='skillscloud'>
                    <Skillscloud />
                    </div>
                    <div className='bounce' style={{textAlign: 'center', position: 'absolute', top:'90%', width: '100vw'}}>
                        <TagLine style={{fontSize: '2vh'}}>Check out some of my projects</TagLine>
                        <BiDownArrow onClick= {scroll} color={this.props.theme.opposite}/>
                        </div>
                </div>
                <div className='page' style={{ justifyContent: 'center' }}>
                    <Title>Projects</Title>
                    <TagLine>Check Out Some of the Projects I've Worked on!</TagLine>
                    <div style={{padding: '10vh'}} >
                        <Slider theme={this.props.theme}  />
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;