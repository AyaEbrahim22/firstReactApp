import React from 'react'
import style from './Portfolio.module.css'
import img1 from '../../Assets/images/port1.png'
import img2 from '../../Assets/images/port2.png'
import img3 from '../../Assets/images/port3.png'


export default function Portfolio() {
  
  function displayImg(e){

    document.getElementById('appearImg').classList.remove('d-none')
    document.getElementById('toggleImg').setAttribute('src', e.target.getAttribute('src'))
    document.getElementById('appearImg').addEventListener('click', function(){
    document.getElementById('appearImg').classList.add('d-none')
    })

  }
  
  return <>

<div id='appearImg' className={`${style.bglayer} d-none`}>
  <img id='toggleImg' src={`${img1}`} alt='img' width={600} className='mb-5'></img>
</div>
    <section className={`${style.portsection}`}>

     <div className='container'>
     <div>
      <h1 className={`${style.porth2} text-center`}>PORTFOLIO COMPONENT</h1>
      <div className={`${style.afterIcon} text-center`}>
        <i className="fa-solid fa-star"></i>
      </div>
      </div>

      <div className='row gy-5 gx-5 pt-4 pb-4'>
        <div className='col-md-4'>
          <div className='position-relative'>
           <img src={`${img1}`} className='w-100 rounded' alt='img1'></img>
            <div onClick={(e) => displayImg(e)} src={`${img1}`} className={`d-flex justify-content-center align-items-center ${style.pluslayer}`} role='button'>
              <i className={`fa-solid fa-plus`} src={`${img1}`}></i>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='position-relative'>
           <img src={`${img2}`} className='w-100 rounded' alt='img1'></img>
            <div onClick={(e) => displayImg(e)} src={`${img2}`} className={`d-flex justify-content-center align-items-center ${style.pluslayer}`} role='button'>
              <i className={`fa-solid fa-plus`} src={`${img2}`}></i>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='position-relative'>
           <img src={`${img3}`} className='w-100 rounded' alt='img1'></img>
            <div onClick={(e) => displayImg(e)} src={`${img3}`} className={`d-flex justify-content-center align-items-center ${style.pluslayer}`} role='button'>
              <i className={`fa-solid fa-plus`} src={`${img3}`}></i>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='position-relative'>
           <img src={`${img1}`} className='w-100 rounded' alt='img1'></img>
            <div onClick={(e) => displayImg(e)} src={`${img1}`} className={`d-flex justify-content-center align-items-center ${style.pluslayer}`} role='button'>
              <i className={`fa-solid fa-plus`} src={`${img1}`}></i>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='position-relative'>
           <img src={`${img2}`} className='w-100 rounded' alt='img1'></img>
            <div onClick={(e) => displayImg(e)} src={`${img2}`} className={`d-flex justify-content-center align-items-center ${style.pluslayer}`} role='button'>
              <i className={`fa-solid fa-plus`} src={`${img2}`}></i>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='position-relative'>
           <img  src={`${img3}`} className='w-100 rounded' alt='img1'></img>
            <div onClick={(e) => displayImg(e)} src={`${img3}`} className={`d-flex justify-content-center align-items-center ${style.pluslayer}`} role='button'>
              <i className={`fa-solid fa-plus`} src={`${img3}`} ></i>
            </div>
          </div>
        </div>

      </div>
     </div>
    </section>
  
  </>
}

