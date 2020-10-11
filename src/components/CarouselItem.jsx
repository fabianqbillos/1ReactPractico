import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import itemimg from '../assets/static/item1.jpg';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item-img' src={itemimg} alt='' />
    <div className='carousel-item-details'>
      <div>
        <img src={playIcon} alt='Play icon' />
        <img src={plusIcon} alt='Plus icon' />
      </div>
      <p className='carousel-item-details-tittle'>Título descriptivo</p>
      <p className='carousel-item-details-subtittle'>2019 16+ 114 minutos</p>
    </div>
  </div>

);

export default CarouselItem;
