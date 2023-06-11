import React from 'react'
import './Portfolio.css'
import a from '../assats/Image/1.png'
import b from '../assats/Image/2.png'
import c from '../assats/Image/3.png'
import d from '../assats/Image/4.png'
import e from '../assats/Image/5.png'
import f from '../assats/Image/6.png'

export default function Portfolio() {
    return (
        <section className='two '>
            <div className="container">
                <div className="main-header text-center">
                    <h2 className='text-white'>PORTFOLIO</h2>
                </div>
                <div className="  d-flex justify-content-center pb-4">
                    <span className='space rounded-1'></span>
                    <i class="fas fa-star fa-2x text-white"></i>
                    <span className='space rounded-1'></span>
                </div>
                <div className="row g-3 pb-5">
                    <div className="col-md-4">
                        <img src={a} alt="" className='w-100 rounded-4'/>
                    </div>
                    <div className="col-md-4">
                        <img src={b} alt="" className='w-100 rounded-4'/>
                    </div>
                    <div className="col-md-4">
                        <img src={c} alt=""className='w-100 rounded-4'/>
                    </div>
                    <div className="col-md-4">
                        <img src={d} alt=""className='w-100 rounded-4'/>
                    </div>
                    <div className="col-md-4">
                        <img src={e} alt=""className='w-100 rounded-4'/>
                    </div>
                    <div className="col-md-4">
                        <img src={f} alt=""className='w-100 rounded-4'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
