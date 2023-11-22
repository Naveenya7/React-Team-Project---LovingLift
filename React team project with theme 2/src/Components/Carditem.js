// CardItem.js

import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  const getLabelColor = () => {
    return props.theme === 'dark' ? '#fff' : '#252e48';
  };

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img className='cards__item__img' alt='Travel' src={props.src} />
          </figure>
          <div className='cards__item__info'>
            <h4 className='cards__item__title'>{props.title}</h4>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
