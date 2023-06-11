import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
            <footer className='bg-dark text-white py-2 text-center fixed-bottom'>
                    <div className="row ">
                        <div className="right col-md-4">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive Clark,<br/>MO 65243</p>
                        </div>
                        <div className="med col-md-4">
                            <h3>AROUND THE WEB</h3>
                            <div className="social d-flex justify-content-center">
                                <div className=' text-white icon border rounded-circle mx-1 d-flex justify-content-center align-items-center'>
                                    <Link className='text-white'><i class="fab fa-facebook-f"></i></Link>
                                </div>
                                <div className=' text-white icon border rounded-circle mx-1 d-flex justify-content-center align-items-center'>
                                    <Link className='text-white'><i class="fab fa-twitter"></i></Link>
                                </div>
                                <div className=' text-white icon border rounded-circle mx-1 d-flex justify-content-center align-items-center'>
                                    <Link className='text-white'><i class="fab fa-linkedin-in"></i></Link>
                                </div>
                                <div className=' text-white icon border rounded-circle mx-1 d-flex justify-content-center align-items-center'>
                                    <Link className='text-white'><i class="fas fa-globe"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="left col-md-4">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, MIT licensed Bootstrap<br/>theme created by Route</p>
                        </div>
                    </div>
                </footer>
                
    )
}