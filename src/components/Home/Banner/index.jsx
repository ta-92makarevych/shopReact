import React from 'react';
import './styles.css';
import Logo from '../../common/Logo';

const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
        <h1>Футуристична їжа для кожного</h1>
        <p>Забаганки клієнта на першому місці</p>
        <p></p>
        <button onClick={handleScrollMenu}>
          Показати Меню <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
  </header>
);

export default Banner;
