import React from 'react'
import style from './About.module.css'


export default function About() {
  return <>
      <section className={`${style.aboutsection}`}>
       <div className={`${style.container} container`}>
       <div className='row gy-4'>
          <div className='col-md-12 text-center mt-5'>
          <h2 className={`${style.abouth2}`}>ABOUT COMPONENT</h2>
        <div className={`${style.afterIcon}`}>
         <i className="fa-solid fa-star"></i>
          </div>
          </div>
          <div className='row gy-4 m-0'>
            
          <div className='col-md-6'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>

          <div className='col-md-6'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>

          </div>
        </div>
       </div>
      </section>
  </>
}
