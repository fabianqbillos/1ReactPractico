import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video.png';
import userIcon from '../assets/static/user.svg';

const Header = () => (
  <header className='header headerindex'>
    <a href='/index.html'>
      <img
        className='header-img'
        src={logo}
        alt='Logo Platzi Video'
      />
    </a>
    <div className='header-menu'>
      <div className='header-menu-profile'>
        <img
          className='menu-profile-img'
          src={userIcon}
          alt='user'
        />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href='/iniciar-sesión.html'>Cuenta</a>
        </li>
        <li>
          <a href='/404.html'>Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
