import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;


export const TagLine2 = styled.h1`
    color: ${props => props.theme.tagLineColor};
    background-color: transparent;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TagLine = styled.h1`
    color: ${props => props.theme.tagLineColor};
    background-color: transparent;
    font-size: 3vh;
    text-align: center;
    font-weight: normal;
    margin: 0;
`;
export const Title = styled.h1`
    color: ${props => props.theme.titleColor};
    background-color: transparent;
    text-align: center;
    border-radius: '15px';
    position: 'relative';
    font-size: 6vh;
    margin: 0;
`;
export const A1 = styled.a`
    color: ${props => props.theme.titleColor};
    text-align: center;
    padding: 10px;
`;

export const Links = styled(Link)`
color: ${props => props.theme.titleColor};
background-color: transparent;
text-align: center;
justify-content: center;
align-items: center;
justify-items: center;
text-decoration: none;
`;
