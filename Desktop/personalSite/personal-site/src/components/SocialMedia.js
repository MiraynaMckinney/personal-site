
import { BsLinkedin } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs';
import './components.css'
import { ExternalLink } from 'react-external-link';

import styled from 'styled-components';



const Extlink = styled(ExternalLink)`
color: ${props => props.theme === "light" ? "#dfdfdf" : "#2b2b2b"};
text-align: center;
justify-content: center;
align-items: center;
justify-items: center;
text-decoration: none;
`

export function SocialMedia(props){

    return(
        <div className='socialMedia'>
            <Extlink href='https://www.linkedin.com/in/mirayna-mckinney-905026213'> <BsLinkedin size='20px' className='contactLink' /> </Extlink>
            <Extlink> <HiMail size='20px' className='contactLink' /> </Extlink>
            <Extlink href='https://github.com/MiraynaMckinney'> <BsGithub size='20px' className='contactLink'/> </Extlink>
        </div>
    )
}