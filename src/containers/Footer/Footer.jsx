import { useState } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper'; 
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    setIsFormSubmitted(true);
  };

  return (
    <>
      <h2 className="head-text">Pegue um café & converse comigo</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />

          <a href="mailto:guilherhenri12@gmail.com" className='p-text'>
            guilherhenri12@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />

          <a href="tel: +55 (35) 98825-8566" className='p-text'>
            +55 (35) 98825-8566
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input 
              className='p-text' 
              type="text" 
              name='name' 
              placeholder='Seu nome' 
              value={name}
              onChange={handleChangeInput}
            />
          </div>

          <div className="app__flex">
            <input 
              className='p-text' 
              type="email" 
              name='email' 
              placeholder='Seu e-mail' 
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea 
              className='p-text'
              placeholder='Sua mensagem'
              name='message'
              value={message}
              onChange={handleChangeInput}
            />
          </div>

          <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? 'Enviando' : 'Enviar Mensagem'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Obrigado por entrar em contato!</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contato',
  'app__whitebg'
);