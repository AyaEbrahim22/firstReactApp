import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return <>

    <footer className={`${style.topfooter}`}>
      <div className='container'>
      <div className='row gy-5'>
        <div className='col-md-4'>
          <div className='text-center'>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </div>

        <div className='col-md-4'>
         <div className='text-center'>
         <h3>AROUND THE WEB</h3>
          <div>
          <i className={`${style.sociallink} fa-brands fa-facebook`}></i>
          <i className={`${style.sociallink} fa-brands fa-twitter`}></i>
          <i className={`${style.sociallink} fa-brands fa-linkedin-in`}></i>
          <i className={`${style.sociallink} fa-solid fa-globe`}></i>
          </div>
         </div>
        </div>

        <div className='col-md-4'>
          <div className='text-center'>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>        
        </div>

      </div>
      </div>
      </footer>
     
     <footer>
     <div>
        <p className={`${style.bottomfooter} text-center w-100 p-4 m-0`}>Copyright © Your Website 2021</p>
      </div>
     </footer>
     

 



  </>

}
