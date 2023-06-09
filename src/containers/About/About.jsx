import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './About.scss';

const abouts = [
  { 
    title: 'Desenvolvedor Web', 
    description: 'Eu sou um bom desenvolvedor web', 
    imageUrl: images.about01
  },
  { 
    title: 'Desenvolvedor Web', 
    description: 'Eu sou um bom desenvolvedor web', 
    imageUrl: images.about02
  },
  { 
    title: 'Desenvolvedor Web', 
    description: 'Eu sou um bom desenvolvedor web', 
    imageUrl: images.about03
  },
  { 
    title: 'Desenvolvedor Web', 
    description: 'Eu sou um bom desenvolvedor web', 
    imageUrl: images.about04
  }
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        Eu sei que{' '}
        <span>um bom produto</span>
        <br />
        significa{' '}
        <span>um ótimo negócio</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imageUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'sobre',
  'app__whitebg'
);