import { ExternalLink } from 'react-external-link';
import { Container, TagLine, Title, A1 } from "./Styled"
import styled from 'styled-components';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
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
        </Container>
    )
}
export default Contact;