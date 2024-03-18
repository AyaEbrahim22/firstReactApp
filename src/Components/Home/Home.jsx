import React from 'react'
import style from './Home.module.css'
import logo from '../../Assets/images/logo.svg'
export default function Home() {
  return <>
    <header className={`${style.header}`}>
      <div className="col-md-4 text-center mt-5">
      <div className='contanier'>
      <img src={logo} className={`${style.homeimg}`} alt='LogoImg'></img>
      <h1>START FRAMEWORK</h1>
      <div className={`${style.afterIcon}`}>
      <i className="fa-solid fa-star"></i>
      </div>
      <p className='mt-3'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      </div>
    </header>
  </>
}
