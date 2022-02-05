import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import './Message.css'


const SubmitButton = styled.input`
    background-color: ${props => props.theme.opposite};
    color: ${props => props.theme.backgroundColor};
    border-radius: 20%;
    justify-content: center;
    width: 15vh;
    height: 5vh;
`;

const SubmitForm = styled.div`
    padding: 30px;
    background-color: ${props => props.theme.themeColor};
    border-radius: 10%;
    width: 50vw;
    height: 50vh;
    
`;

export default function Message(props) {
    const [values, setValues] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_b6yfiqn', 'template_rcd5zcr', values, 'user_U8UyGjenE5skumFu6jb0C')
            .then(response => {
                console.log('SUCCESS!', response);
                setValues({
                    from_name: '',
                    from_email: '',
                    message: ''
                });
                setStatus('SUCCESS!')
            }, (error) => {
                console.log('ERROR', error);
            });

    };

    useEffect(() => {
        if (status === 'SUCCESS!') {
            setTimeout(() => {
                setStatus('');
            }, 3000);
        }
    }, [status]);

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <SubmitForm >
            <form onSubmit={sendEmail} style={{alignItems:'center'}}>
                <div style={{justifyContent:'center', paddingTop:'2vh', display:'flex'}}>
                <input value={values.from_name} type="text" name="from_name" onChange={handleChange} placeholder='Name' style={{width:'65vh', height: '2vh'}}/>
                </div>
                <div style={{justifyContent:'center', padding:'2vh', display:'flex' }}>
                <input value={values.from_email} type="email" name="from_email" onChange={handleChange} placeholder='Email' style={{width:'65vh', height: '2vh'}}/>
                </div>

                <div style={{ justifyContent:'center', display:'flex'}}>
                    <textarea value={values.message} onChange={handleChange} name="message" rows='5' placeholder='Message' style={{width:'65vh', height:'30vh', justifyContent:'center'}}/>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignContent:'center', padding:15}}>
                        <SubmitButton type="submit" value="Send" style={{fontSize: '2vh'}} />
                    </div>
            </form>
        </SubmitForm >
    );
};