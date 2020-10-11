import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <main className='main'>
    <h2 className='main-title'>¿Que quieres ver hoy?</h2>
    <input className='main-input' type='text' placeholder='Buscar...' />
  </main>
);

export default Search;
