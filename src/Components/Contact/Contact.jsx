import React from 'react'
import style from './Contact.module.css'

export default function Contact() {

  function displayLabel(e){
    let targetInput = e.target.getAttribute('id');
    let targetLabel = document.querySelector("label[for='" + targetInput + "']");

   if(e.target.value === ''){
    targetLabel.style.bottom = '-30px';
   }else{
    targetLabel.style.bottom = 0
   }
    
  }


  return <>
    <section className={`${style.contactSection}`}>
      <div>
        <h2 className={`${style.porth2} text-center`}>CONTACT SECTION</h2>
        <div className={`${style.afterIcon} text-center`}>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>

    <div className='container d-flex justify-content-center align-items-center'>
      
    <form>
        <div className="mb-5 mt-4">
       <div className='position-relative'><label htmlFor="userName" className={`${style.formLabel} form-label`}>User Name :</label></div>
          <input onInput={(e) => displayLabel(e)} type="text" className={`${style.form} form-control border-top-0 border-end-0 border-start-0`} id="userName" placeholder='User Name'/>
            
        </div>

        <div className="mb-5">
         <div className='position-relative'><label htmlFor="userAge" className={`${style.formLabel} form-label`}>User Age :</label></div>
          <input onInput={displayLabel} type="number" className={`${style.form} form-control border-top-0 border-end-0 border-start-0`} id="userAge" placeholder='User Age'/>
        </div>

        <div className="mb-5">
         <div className='position-relative'> <label htmlFor="userEmail" className={`${style.formLabel} form-label`}>User Email :</label></div>
          <input onInput={displayLabel} type="email" className={`${style.form} form-control border-top-0 border-end-0 border-start-0`} id="userEmail" placeholder='User Email'/>
        </div>
         
        <div className="mb-4">
           <div className='position-relative'><label htmlFor="userPassword" className={`${style.formLabel} form-label`}>User Password :</label></div>
          <input onInput={displayLabel} type="password" className={`${style.form} form-control border-top-0 border-end-0 border-start-0`} id="userPassword" placeholder='User Password'/>
        </div>

        <button type="submit" className="btn">Send Message</button>

      </form>

    </div>

    </section>

  </>
}
