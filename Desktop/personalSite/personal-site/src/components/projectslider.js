import React, {useState} from "react";
import './projectslider.css'
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi'
import WW3 from '../assets/WW3.png'
import snow from '../assets/snow.jpeg'
import ball from '../assets/ball.png'


const Slides = [
    {
        image: WW3,
        source:'https://github.com/guilhermetco/CS97---WestWoodWalks',

    },
    {
        image:ball,
        source:'',
    }
]
const slidesNum = Slides.length;
let slides = Slides;


export function Slider(props){
    const [current, setCurrent] = useState(0);
    if(!Array.isArray(Slides) || Slides.length <= 0){
        return null;
    }
    const prevSlide = () => {
        setCurrent(current === 0? slidesNum-1: current-1);
    }
    const nextSlide = () => {
        setCurrent(current === slidesNum - 1 ? 0: current+1 );
    }
    const licon = props.theme === "light" ? <BiLeftArrow color='black' /> : < BiLeftArrow  color='white' />;
    const ricon = props.theme === "light" ? <BiRightArrow  color='black' /> : < BiRightArrow  color='white' />;
    const handleClick = (link) => {
    }
    return(
        <section className='slider'>
            < section className="left" onClick={prevSlide}> {licon}</section>
            < section className="right" onClick={nextSlide}> {ricon}</section>
            {
                slides.map((project,index)=>{
                    return(
                        <div className={index===current? 'slide active' : 'slide'} key={index}>
                            {index=== current && <img src={project.image} alt= "travel" className="image" onClick={handleClick(project.source)}/>}
                            <h6 style={{padding:'5vh', textAlign:'center'}}> {project.text}</h6>
                        </div>
                    )
                })
            }
        </section>
    )
}

const Pics = [
    {
        image: snow,
        source:'https://github.com/guilhermetco/CS97---WestWoodWalks',
        text:'first',

    },
    {
        image:'https://ychef.files.bbci.co.uk/976x549/p09g169z.jpg',
        source:'',
        text:'second'
    }
]

const picsNum = Slides.length;

export function PicSlider(props){
    const [current, setCurrent] = useState(0);
    if(!Array.isArray(Pics) || Pics.length <= 0){
        return null;
    }
    const prevSlide = () => {
        setCurrent(current === 0? picsNum-1: current-1);
    }
    const nextSlide = () => {
        setCurrent(current === picsNum - 1 ? 0: current+1 );
    }
    const licon = props.theme === "light" ? <BiLeftArrow color='black' /> : < BiLeftArrow  color='white' />;
    const ricon = props.theme === "light" ? <BiRightArrow  color='black' /> : < BiRightArrow  color='white' />;
    const handleClick = (link) => {
        console.log(props.theme);
    }
    return(
        <section className='picslider'>
            < section className="left" onClick={prevSlide}> {licon}</section>
            < section className="right" onClick={nextSlide}> {ricon}</section>
            {
                Pics.map((project,index)=>{
                    return(
                        <div className={index===current? 'slide active' : 'slide'} key={index}>
                            {index=== current && <img src={project.image} alt= "travel" className="picimage" onClick={handleClick(project.source)}/>}
                        </div>
                    )
                })
            }
        </section>
    )
}
