import { Component } from 'react';
import Skillscloud from '../components/wordcloud';
import { TagLine, Title, TagLine2 } from './Styled';
import {Slider} from '../components/projectslider';
import { BiDownArrow } from 'react-icons/bi';
import './Home.css'

class Skills extends Component {
    render() {
        const scroll = () => {
            document.getElementById("scroller2").scrollTo({ top: 500, behavior: 'smooth' });
        }
        return (
            <div className="pages" id='scroller2'>
                <div className='page'>
                    <Title>Skills</Title>
                    <div style={{display: 'flex', textAlign: 'center'}}>
                    <div style={{ justifyContent: 'center', padding:'3vh', whiteSpace: 'pre-line', width:'45vw'}}>
                        <TagLine style={{fontSize:'2.5vh', paddingTop: '25vh'}}>
                            I've developed this array of skills as I've worked on different projects over the years.
                            {"\n"}{"\n"}
                        </TagLine>
                    </div>
                    <div className='skillscloud'>
                    <Skillscloud />
                    </div>
                    </div>
                    <div className='bounce' style={{textAlign: 'center', position: 'absolute', top:'90%', width: '100vw'}}>
                        <TagLine style={{fontSize: '2vh'}}>Check out some of my projects</TagLine>
                        <BiDownArrow onClick= {scroll} color={this.props.theme.opposite}/>
                    </div>
                </div>
                <div className='page' style={{ justifyContent: 'center' }}>
                    <Title>Projects</Title>
                    <TagLine>Check Out Some of the Projects I've Worked on!</TagLine>
                    <div style={{height:'100vh', width:'100vw'}} >
                        <Slider />
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;