import { useState } from 'react';
import { motion } from 'framer-motion';


import { AppWrap } from '../../wrapper'; 
import { images } from '../../constants';
import './Skills.scss';

const Skills = () => {
  return (
    <>
      <h2 className='head-text'>Habilidades & Experiência</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          
        </motion.div>
      </div>
    </>
  )
}

export default Skills;