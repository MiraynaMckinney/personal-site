import React from 'react'
import './logo.css'
import whitelogo from '../assets/whitelogo.png'
import blacklogo from '../assets/blacklogo.png'

export default function Logo(props) {
    const bwlogo = props.theme === 'light' ? blacklogo: whitelogo ;
    return (
            <img src={bwlogo} className='logoimg' alt="couldn't load image"/>
    )
}
