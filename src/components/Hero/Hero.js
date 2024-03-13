import React from 'react'
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import Header from '../Header/Header';
import {motion} from 'framer-motion';
const Hero = () => {
    const transition = {type:'spring',duration: 3}
  return (
    <div className='hero'>
        <div className='blur hero-blur'></div>
        <div className='left-h'>
            <Header/>
            {/* the best ad  */}
            <div className='the-best-ad'>
                <motion.div
                    initial={{ left:'238px' }}
                    whileInView={{ left:'8px' }}
                    transition={{...transition, type: 'tween'}}
                >

                </motion.div>
                <span>the best fitness club in the town</span>
            </div>
            {/* hero heading */}
            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>in here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>  
            </div>
            {/* figures */}
            <div className='figures'>
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitness programs</span>
                </div>
            </div>
            {/* hero buttons */}
            <div className='hero-buttons'>
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn more</button>
            </div>
        </div>
        <div className='right-h'>
            <button className='btn'>Join Now</button>
            <motion.div
                initial={{ right:'-1rem' }}
                whileInView={{ right:'4rem' }}
                transition={transition}
                className='heart-rate'>
                <img src={Heart} alt='heart'/>
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>
            {/* hero images */}
            <img src={hero_image} alt='hero' className='hero-image'/>
            <motion.img 
            initial={{ right:'11rem' }}
            whileInView={{ right:'20rem' }}
            transition={transition}
            src={hero_image_back} alt='hero' className='hero-image_back'/>
            {/* calories */}
            <motion.div 
                initial={{ right:'37rem' }}
                whileInView={{ right:'28rem' }}
                transition={transition}
                className='calories'>
                <img src={Calories} alt=''/>
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
