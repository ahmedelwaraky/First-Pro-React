import React from 'react'
import './About.css'

export default function About() {
    return (    
        <section className='three d-flex '>
            <div className="container">
                <div className="main-header-three text-center">
                    <h2>ABOUT</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <span className='space rounded-1'></span>
                    <i class="fas fa-star fa-2x text-white"></i>
                    <span className='space rounded-1'></span>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p className='cap-three'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">
                        <p className='cap-three'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
