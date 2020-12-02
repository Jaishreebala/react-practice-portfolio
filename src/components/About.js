import React from 'react';
import home1 from '../images/home1.png';

import { AboutStyle, Description, Hide, Image } from '../Styles'
function About() {
    return (
        <AboutStyle>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We Work To Make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>True.</h2>
                    </Hide>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, architecto consequuntur. Obcaecati accusamus at hic sunt. Inventore illo ipsum earum.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="Home" />
            </Image>
        </AboutStyle>
    )
}

export default About
