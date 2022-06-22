import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className='emptyCart'>
      <img src='https://www.pngmart.com/files/7/Cart-PNG-Transparent-Image.png' alt='' />
      <button onClick={() => history.push('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Закупитись
      </button>
    </div>
  );
};

export default EmptyCart;
