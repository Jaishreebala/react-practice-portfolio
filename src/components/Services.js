import React from 'react'
import Clock from '../images/clock.svg';
import diaphragm from '../images/diaphragm.svg';
import money from '../images/money.svg';
import teamwork from '../images/teamwork.svg';
import home2 from '../images/home2.png';
import { AboutStyle, Description, Hide, Image } from '../Styles'
import styled from 'styled-components';

function Services() {
    return (
        <ServicesStyle>
            <Description>
                <h2>
                    High <span>quality</span> services.
                </h2>
                <Cards>
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

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
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
