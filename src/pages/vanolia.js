import React from 'react'
import Link from 'gatsby-link'

export default () =>
<div>
<section className="hero bg-valonia is-fullheight">
    <div className="hero-head">
        <header className="nav">
            <div className="container is-fluid">
                <div className="navbar-brand">
                    <a className="nav-item" href="/">
                     <h1 className="title is-4">Vanolia</h1>
                    </a>
                    
                    <div className="navbar-burger burger" data-target="navMenubd-example">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navMenubd-example" className="navbar-menu">
                    <div className="navbar-start">
                    <a className="nav-item" href="#">
                        Design
                    </a>
                    <a className="nav-item" href="#">
                        Feature
                    </a>
                    <a className="nav-item" href="#">
                        Editor
                    </a>
                    <a className="nav-item" href="#">
                        Pricing
                    </a>
                    <a className="nav-item" href="#">
                        Blog
                    </a>
                    <a className="nav-item" href="#">
                        Find a wedding
                    </a>
                    <div className="navbar-item">
                        <a className="button is-border-radius is-small" href="#">
                            <span>LOGIN</span>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
    <div className="hero-body">
        <div className="container">
        <h1 className="title is-2 is-spaced">
            Your wedding app
        </h1>
        <h2 className="subtitle is-6">
            We were so excited to share our wedding website<br></br>
            and app to all of our guest. The app made it so easy<br></br>
            to communicate with everyone
        </h2>
        <h2 className="subtitle is-5">
            - Sarah & Ben
        </h2>
        <a className="button is-danger is-large">Sign Up Now</a>
        <p style={{"margin-top":"1em"}}>
        <a href="#"><span className="icon"><i className="fa fa-play-circle-o"></i></span><span> Watch video</span></a>
        </p>
        </div>
    </div>

    <div className="hero-foot">
            <nav className="tabs">
                <div className="container">
                    <ul>
                    <li className="is-active">
                        <a>
                        <span className="icon is-small"><i className="fa fa-twitter"></i></span>
                        </a>
                    </li>
                    <li className="is-active">
                        <a>
                        <span className="icon is-small"><i className="fa fa-instagram"></i></span>
                        </a>
                    </li>
                    <li className="is-active">
                        <a>
                        <span className="icon is-small"><i className="fa fa-facebook"></i></span>
                        </a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
</section>
</div>