import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import avatar from '../../../icons/avatar.png';

import { ProfileLogout } from './profile-logout/profile-logout';

import './header.scss';

export const Header = ({
  closeBurger,
  openUserProfileWindow,
  toggleUserProfileWindow,
  toggleUserProfileWindowClose,
}) => {
  const dispatch = useDispatch();
  const burger = useSelector((state) => state.burger.isBurger);
  const userName = useSelector((state) => state.auth.userData);

  const toggleBurger = (e) => {
    e.stopPropagation();
    if (burger) {
      dispatch({ type: 'ClOSE_BURGER' });
    } else {
      dispatch({ type: 'OPEN_BURGER' });
    }
  };

  return (
    <header onClick={(closeBurger, toggleUserProfileWindowClose)} role='presentation'>
      <div className='header-container'>
        <div className='logo header-item'>
          <div
            onClick={toggleBurger}
            role='presentation'
            className={burger ? 'disabled burger' : 'disabled'}
            data-test-id='button-burger'
          />
          <Link to='/books/all' className='menu'>
            <div className='menu item' />
          </Link>
        </div>
        <h3 className='library header-item'>Библиотека</h3>
        <div className='user header-item'>
          <div className='header-item-text-img' role='presentation' onClick={toggleUserProfileWindow}>
            <div className='user-name'>Привет, {userName?.data?.user?.firstName}</div>
            <div className='img-user-container'>
              <img className='img-user' src={avatar} alt={avatar} />
            </div>
          </div>

          <ProfileLogout openUserProfileWindow={openUserProfileWindow} />
        </div>
      </div>
    </header>
  );
};
