import React from 'react'
import Link from 'gatsby-link'

export default () =>
<div>
<section className="hero bg-education is-fullheight">
    <div className="hero-head">
        <header className="nav">
            <div className="container is-fluid">
                <div className="navbar-brand">
                    <a className="nav-item" href="/">
                     <h1 className="title is-4">Education</h1>
                    </a>
                    
                    <div className="navbar-burger burger" data-target="navMenubd-example">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navMenubd-example" className="navbar-menu">
                    <div className="navbar-end">
                    <a className="nav-item" href="#">
                        Contact us
                    </a>
                    <a className="nav-item" href="#">
                        Log in
                    </a>
                    <div className="navbar-item">
                        <a className="button is-info is-border-radius" href="#">
                            <span>Sign up</span>
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
            Tech Better, Learn Better
        </h1>
        <h2 className="subtitle is-6">
            We were so excited to share our wedding website<br></br>
            and app to all of our guest. The app made it so easy<br></br>
            to communicate with everyone
        </h2>
        <a className="button is-danger is-large is-border-radius">Request Demo</a>
        </div>
    </div>

    <div className="hero-foot">
        <div className="container">
        <nav className="level">
            <div className="level-item has-text-centered">
            <div>
                <p className="heading">Tweets</p>
                <p className="title">3,456</p>
            </div>
            </div>
            <div className="level-item has-text-centered">
            <div>
                <p className="heading">Following</p>
                <p className="title">123</p>
            </div>
            </div>
            <div className="level-item has-text-centered">
            <div>
                <p className="heading">Followers</p>
                <p className="title">456K</p>
            </div>
            </div>
            <div className="level-item has-text-centered">
            <div>
                <p className="heading">Likes</p>
                <p className="title">789</p>
            </div>
            </div>
        </nav>
        </div>
    </div>
</section>
</div>