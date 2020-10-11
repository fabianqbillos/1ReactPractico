import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
// import itemimg from '../assets/static/item1.jpg';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item-img' src={cover} alt='' />
    <div className='carousel-item-details'>
      <div>
        <img src={playIcon} alt='Play icon' />
        <img src={plusIcon} alt='Plus icon' />
      </div>
      <p className='carousel-item-details-tittle'>{title}</p>
      <p className='carousel-item-details-subtittle'>{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>

);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
