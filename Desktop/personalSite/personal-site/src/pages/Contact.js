import { ExternalLink } from 'react-external-link';
import { Container, TagLine, Title, A1 } from "./Styled"
import styled from 'styled-components';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Message from '../components/Message';
import '../components/Navbar.css'

const Extlink = styled(ExternalLink)`
color: ${props => props.theme === "light" ? "#dfdfdf" : "#2b2b2b"};
text-align: center;
justify-content: center;
align-items: center;
justify-items: center;
text-decoration: none;
`

const NContents = styled.nav`
    font-size: 5vh;
    padding: 0 90px;
    display: flex;
    align-items: center;
    align:center;
    justify-content: space-between;
    
`;

function Contact(props) {
    return (
        <Container>
            <Title style={{ marginBottom: '2vh' }}>Contact Me</Title>
            <TagLine style={{ marginBottom: '2vh', fontSize: '2vh' }}>Send Me An Email At miraynamckinney77@gmail.com</TagLine>
            <TagLine style={{ marginBottom: '2vh', fontSize: '2vh' }}>Or Leave A Message Here!</TagLine>
            <Message theme={props.theme} />
            <NContents>
                <A1>
                    <Extlink href="https://www.linkedin.com/in/mirayna-mckinney-905026213" style={{ textDecoration: 'none' }}>
                        <BsLinkedin className='nav-link' style={{ padding: '0vh' }} size={'5vh'} color={props.theme.opposite} />
                    </Extlink>
                </A1>
                <A1>
                    <Extlink href="https://github.com/MiraynaMckinney" style={{ textDecoration: 'none' }}>
                        <BsGithub className='nav-link' style={{ padding: '0vh' }} size={'5vh'} color={props.theme.opposite} />
                    </Extlink>
                </A1>
            </NContents>
        </Container>
    )
}
export default Contact;