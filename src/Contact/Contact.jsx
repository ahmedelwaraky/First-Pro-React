import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <section className='four d-flex align-items-center '>
            <div className="container">
                <div className="main-header-four text-center">
                    <h2>CONTACT ME</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <span className='space rounded-1'></span>
                    <i class="star fas fa-star fa-2x text-white"></i>
                    <span className='space rounded-1'></span>
                </div>
                <div className="form w-75 m-auto ">
                    <div >
                        <input type="text" class="form-control first my-4" id="exampleFormControlInput1" placeholder="Your Name"/>
                        <input type="email" class="form-control first my-4" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        <input type="text" class="form-control first my-4" id="exampleFormControlInput1" placeholder="+201012345678"/>
                    </div>
                    <div >
                        <textarea  class="form-control my-4  second " id="exampleFormControlTextarea1" rows="8" placeholder='Message'></textarea>
                    </div>
                    <div className=''><button type="button" class="button btn btn-success">Success</button></div>
                </div>
            </div>
        </section>
    )
}
