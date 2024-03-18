import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  
  function getStyling(e){
  
  let links = document.querySelectorAll('ul a')
    
    for(let i = 0; i < links.length; i++){

     if( document.getElementById('pageTitle').innerText == 'Home'){
      links[i].classList.remove(style.linkactive)
     }

      if(links[i] == e.target){
        e.target.classList.add(style.linkactive)
      }else{
        links[i].classList.remove(style.linkactive)
      }
      
    }
      
  }

  window.addEventListener('scroll', function(){
    // console.log( window.scrollY )
       if( window.scrollY > 50){
        document.querySelector('nav').style.height = '70px'
       }else{
        document.querySelector('nav').style.height = '106px'
       }
  })

  return <>
  
  <nav className={`${style.navcss} navbar navbar-expand-lg fixed-top`}>
  <div className="container">
    <Link onClick={(e) => (document.getElementById('pageTitle').innerText = 'Home') + (getStyling(e)) } className={`${style.navbarlogo} navbar-brand`} to={''}>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item pe-3">
          <Link onClick={(e) =>getStyling(e) + (document.getElementById('pageTitle').innerText = 'About') } className={`${style.navlink} nav-link text-uppercase`} to={'about'}>About</Link>
        </li>
        <li className="nav-item pe-3">
          <Link onClick={(e) =>getStyling(e) + (document.getElementById('pageTitle').innerText = 'Portfolio') } className={`${style.navlink} nav-link text-uppercase`}  to={'portfolio'}>Portfolio</Link>
        </li>
        <li className="nav-item pe-3">
          <Link onClick={(e) =>getStyling(e) + (document.getElementById('pageTitle').innerText = 'contact') } className={`${style.navlink} nav-link text-uppercase`}  to={'contact'}>contact</Link>
        </li>

      </ul>

    </div>
  </div>
</nav>
  
  </>
}