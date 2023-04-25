import { useState } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap } from '../../wrapper'; 
import { images } from '../../constants';
import './Skills.scss';

const Skills = () => {
  return (
    <>
      <h2 className='head-text'>Habilidades & Experiência</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item app__flex'
          >
            <div className="app__flex">
              <img src={images.react} alt="img" />
            </div>

            <p className="p-text">React</p>

          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item app__flex'
          >
            <div className="app__flex">
              <img src={images.node} alt="img" />
            </div>

            <p className="p-text">Node</p>

          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item app__flex'
          >
            <div className="app__flex">
              <img src={images.typescript} alt="img" />
            </div>

            <p className="p-text">Typescript</p>

          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Skills;