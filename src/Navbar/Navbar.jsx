import React from 'react'
import {Link }  from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
    <div>
        <nav class="navbar navbar-expand-lg ">
            <div class="container">
                <Link class="navbar-brand text-white" to="/">REACT</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to='home'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='portfolio'>Portfolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='about'>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    )
}
