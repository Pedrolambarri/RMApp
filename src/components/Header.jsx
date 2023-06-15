import React from 'react'
import ImgHeader from '../assets/rm.png'
import './Header.css'
import MortiAstro from '../assets/mortyAstro.webp'
import RickGif from '../assets/rickgif.webp'


export default function Header() {
  return (
    <div className='header' >
      <img className='rickgif' src={RickGif} />
      <img className='headerImage' src={ImgHeader} alt="imagen" />
      <img className='mortyAstro' src={MortiAstro}/>
    </div>
  )
}