import { Link } from 'react-router-dom';

import faceBook from '../../../icons/footer/Icon_faceBool.svg';
import inIcon from '../../../icons/footer/Icon_in.svg';
import instagram from '../../../icons/footer/Icon_intstagram.svg';
import vk from '../../../icons/footer/Icon_vk.svg';

import './footer.scss';

export const Footer = ({ closeBurger, toggleUserProfileWindowClose }) => (
  <footer className='footer-page' onClick={(closeBurger, toggleUserProfileWindowClose)} role='presentation'>
    <div className='footer-container'>
      <div className='secure'>© 2020-2023 Cleverland. Все права защищены.</div>
      <div className='icon-social'>
        <Link to='#'>
          <img src={faceBook} alt='faceBook_icon' className='icon-item' />
        </Link>
        <Link to='#'>
          <img src={instagram} alt='instagran_icon' className='icon-item' />
        </Link>
        <Link to='#'>
          <img src={vk} alt='vk_icon' className='icon-item' />
        </Link>
        <Link to='#'>
          <img src={inIcon} alt='linlIdn_icon' className='icon-item' />
        </Link>
      </div>
    </div>
  </footer>
);
