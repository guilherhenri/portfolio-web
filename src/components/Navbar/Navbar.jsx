import { images } from '../../constants/index';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="" />
      </div>

      <ul className='app__navbar-links'>
        {['home', 'sobre', 'trabalho', 'habilidades', 'contato'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;