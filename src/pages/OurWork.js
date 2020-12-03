import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import athlete from '../images/athlete-small.png';
import theracer from '../images/theracer-small.png';
import goodtimes from '../images/goodtimes-small.png';
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider } from '../animation';
import { useScroll } from '../components/useScroll'
function OurWork() {

    const [element, control] = useScroll();
    const [element1, control1] = useScroll();

    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ background: "#fff" }}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="Athlete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie variants={fade} ref={element} animate={control} initial="hidden">
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="the racer" />
                </Link>
            </Movie>
            <Movie variants={fade} ref={element1} animate={control1} initial="hidden">
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="good times" />
                </Link>
            </Movie>
        </Work>
    )
}


const Work = styled(motion.div)`
    min-height:100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`
const Movie = styled(motion.div)`
    padding-bottom:10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem
    }
    img{
        width:100%;
        height: 70vh;
        object-fit: cover;
    }
`

const Hide = styled.div`
    overflow:hidden;
`

const Frame1 = styled(motion.div)`
    top: 10%;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`

const Frame2 = styled(Frame1)`
    background: #ff8ebf;
`

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
    background: #8effa0;
`
export default OurWork
