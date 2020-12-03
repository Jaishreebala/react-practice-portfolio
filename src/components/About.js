import React from 'react';
import home1 from '../images/home1.png';
import Wave from './Wave';

import { AboutStyle, Description, Hide, Image } from '../Styles'
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
function About() {
    return (
        <AboutStyle>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We Work To Make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>True.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, architecto consequuntur. Obcaecati accusamus at hic sunt. Inventore illo ipsum earum.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="Home" />
            </Image>
            <Wave />
        </AboutStyle>
    )
}
// const Hide = styled.div`
//     overflow: hidden;
// `
export default About
