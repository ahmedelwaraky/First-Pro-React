import React from 'react'
import './Home.css'
import x from '../assats/Image/avataaars.svg'
export default function Home() {
    return (
    <section className='one d-flex align-items-center'>
        <div className="container text-center ">
            <div className="caption">
                <img className='photo-one' src={x} alt=""/>
                <h1 className='header'>START REACT</h1>
            </div>
            <div className="div pt-2 d-flex justify-content-center">
                <span className='space rounded-1'></span>
                <i class="star fas fa-star fa-2x text-white"></i>
                <span className='space rounded-1'></span>
            </div>
            <div>
                <p className='info'>Graphic Artist - Web Designer - Illustrator</p>
            </div>

            
        </div>
    </section>
    )
}
