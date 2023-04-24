import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Work.scss';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);
  };
 
  return (
    <>
      <h2 className='head-text'> Meu <span>portfólio</span> criativo</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item && 'item-active'}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        <div className='app__work-item app__flex'>
          <div className='app__work-img app__flex'>
            <img src={images.about01} alt="work" />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
              className='app__work-hover app__flex'
            > 
              <a href="#a" target='__blank' rel='noreferrer'>
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className='app__flex'
                >
                  <AiFillEye />
                </motion.div>
              </a>

              <a href="#a" target='__blank' rel='noreferrer'>
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className='app__flex'
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>titulo</h4>
            <p className='p-text' style={{ marginTop: 10 }}>descricao</p>

            <div className='app__work-tag app__flex'>
              <p className='p-text'>tags</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default AppWrap(Work, 'trabalho');