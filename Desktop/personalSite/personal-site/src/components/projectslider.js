import React, { useState } from "react";
import './projectslider.css'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import WW3 from '../assets/WW3.png'
import snow from '../assets/snow.jpeg'
import ball from '../assets/ball.png'
import yellowstone from '../assets/yellowstone.jpg'


const Slides = [
    {
        image: WW3,
        source: 'https://github.com/guilhermetco/CS97---WestWoodWalks',

    },
    {
        image: ball,
        source: '',
    }
]
let slides = Slides;


export function Slider() {
    if (!Array.isArray(Slides) || Slides.length <= 0) {
        return null;
    }
    return (
        <div class="tiles">{
            slides.map((project) => {
                return (

                    <a class="tile" >
                        <img src={project.image} />
                        <div class="details">
                            <span class="title">{project.source}</span>
                            <span class="info">{project.source}</span>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

const Pics = [
    {
        image: snow,
        source: 'https://github.com/guilhermetco/CS97---WestWoodWalks',
        text: 'first',

    },
    {
        image: yellowstone,
        source: '',
        text: 'second'
    }
]

const picsNum = Slides.length;

export function PicSlider(props) {
    const [current, setCurrent] = useState(0);
    if (!Array.isArray(Pics) || Pics.length <= 0) {
        return null;
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? picsNum - 1 : current - 1);
    }
    const nextSlide = () => {
        setCurrent(current === picsNum - 1 ? 0 : current + 1);
    }
    const licon = props.theme === "light" ? <BiLeftArrow color='black' /> : < BiLeftArrow color='white' />;
    const ricon = props.theme === "light" ? <BiRightArrow color='black' /> : < BiRightArrow color='white' />;
    const handleClick = (link) => {
        console.log(props.theme);
    }
    return (
        <section className='picslider'>
            < section className="left" onClick={prevSlide}> {licon}</section>
            < section className="right" onClick={nextSlide}> {ricon}</section>
            {
                Pics.map((project, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && <img src={project.image} alt="travel" className="picimage" onClick={handleClick(project.source)} />}
                        </div>
                    )
                })
            }
        </section>
    )
}
