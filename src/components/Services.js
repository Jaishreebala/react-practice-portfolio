import React from 'react'
import Clock from '../images/clock.svg';
import diaphragm from '../images/diaphragm.svg';
import money from '../images/money.svg';
import teamwork from '../images/teamwork.svg';
import home2 from '../images/home2.png';
import { AboutStyle, Description, Hide, Image } from '../Styles'
import styled from 'styled-components';
import { useScroll } from './useScroll';
import { fade } from '../animation';
import { motion } from 'framer-motion';

function Services() {
    const [element, control] = useScroll();
    return (
        <ServicesStyle>
            <Description>
                <h2>
                    High <span>quality</span> services.
                </h2>
                <Cards variants={fade} ref={element} animate={control} initial="hidden">
                    <Card>
                        <div className="icon">
                            <img src={Clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Diapgragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="home img" />
            </Image>
        </ServicesStyle>
    )
}
const ServicesStyle = styled(AboutStyle)`
    h2{
        padding-bottom:5rem; 
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1210px)  {
        justify-content: center;
    }
`;
const Card = styled.div`
    flex-basis: 15rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
           margin-left: 1rem;
           background:#fff ;
           color: black;
           padding: 1rem;
        }
    }
`
export default Services
