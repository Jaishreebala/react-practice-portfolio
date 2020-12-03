import React from 'react'
import About from '../components/About';
import Services from '../components/Services';
import Faq from '../components/Faq';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
function AboutUs() {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
            <About />
            <Services />
            <Faq />
        </motion.div>
    )
}

export default AboutUs
