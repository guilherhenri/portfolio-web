import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Testimonial.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className='app__testimonial-item app__flex'>
        <img src={images.avatar} alt="amazon" />

        <div className='app__testimonial-content'>
          <p className='p-text'>Guilherme é um ótimo desenvolvedor</p>

          <div>
            <h4 className='bold-text'>Davi</h4>
            <h5 className='bold-text'>Sr. Banco</h5>
          </div>
        </div>
      </div>

      <div className='app__testimonial-btns app__flex'>
        <div 
          className="app__flex" 
          onClick={() => handleClick(currentIndex === 0 ? 0 : currentIndex - 1)}
        >
          <HiChevronLeft />
        </div>

        <div 
          className="app__flex" 
          onClick={() => handleClick(currentIndex === 0 ? 0 : currentIndex + 1)}
        >
          <HiChevronRight />
        </div>
      </div>

      <div className='app__testimonial-brands app__flex'>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: 'tween' }}
        >
          <img src={images.amazon} alt="amazon" />
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: 'tween' }}
        >
          <img src={images.adidas} alt="amazon" />
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testemunhos',
  'app_primarybg'
);