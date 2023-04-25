import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper'; 
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
            <div className="app__flex" style={{ backgroundColor: '#edf2f8'}}>
              <img src={images.react} alt="img" />
            </div>

            <p className="p-text">React</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item app__flex'
          >
            <div className="app__flex" style={{ backgroundColor: '#edf2f8'}}>
              <img src={images.node} alt="img" />
            </div>

            <p className="p-text">Node</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item app__flex'
          >
            <div className="app__flex" style={{ backgroundColor: '#edf2f8'}}>
              <img src={images.typescript} alt="img" />
            </div>

            <p className="p-text">Typescript</p>
          </motion.div>
        </motion.div>

        <motion.div className='app__skills-exp'>
          <motion.div className='app__skills-exp-item'>
            <div className="app__skills-exp-year">
              <p className="bold-text">2019</p>
            </div>

            <motion.div className='app__skills-exp-works'>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-exp-work'
                data-tooltip-id="my-tooltip" 
                data-tooltip-content="descricao"
              >
                <h4 className='bold-text'>Desenvolvedor</h4>
                <p className='p-text'>empresa</p>
              </motion.div>

              <Tooltip
                id="my-tooltip"
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'habilidades',
  'app__whitebg'
);