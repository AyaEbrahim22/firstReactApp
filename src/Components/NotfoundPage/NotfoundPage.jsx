import React from 'react'
import style from './NotfoundPage.module.css'

export default function NotfoundPage() {
    return <>
        <section className={`${style.sectionNotfoundPage}`}>

            <div className='container h-100'>
                <div className={`${style.NotfoundPagecontent}`}>
                    <div className='text-center'>
                    <h1 className='pt-5'>Page Not Found</h1>
                    <p>We couldn't find what you are looking for</p>
                    </div>
                </div>
            </div>

        </section>

    </>
}
