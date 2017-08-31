import React from 'react'
import Link from 'gatsby-link'

export default () =>
<div>
<section className="hero bg-knowhat is-dark is-fullheight">
    <div className="hero-head">
        <header className="nav">
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-burger burger" data-target="navMenubd-example">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navMenubd-example" className="navbar-menu">
                    <div className="navbar-start">
                    <a className="nav-item" href="/">
                        Home
                    </a>
                    <p className="nav-item" href="#">
                        <span className="icon is-small"><i className="fa fa-circle-o"></i></span>
                    </p>
                    <a className="nav-item" href="#">
                        Feature
                    </a>
                    <p className="nav-item" href="#">
                        <span className="icon is-small"><i className="fa fa-circle-o"></i></span>
                    </p>
                    <a className="nav-item" href="#">
                        Pricing
                    </a>
                    <p className="nav-item" href="#">
                        <span className="icon is-small"><i className="fa fa-circle-o"></i></span>
                    </p>
                    <a className="nav-item" href="#">
                        About
                    </a>
                    </div>
                </div>
            </div>
        </header>
    </div>
    <div className="hero-body">
        <div className="container">
        <h1 className="subtitle is-2">
            Know what you<br></br>
            want to listen to?
        </h1>
        <h1 className="title is-2 is-spaced">
            Just search and hit play.
        </h1>
        <h2 className="subtitle is-6">
            Play your favorites, discover new tracks and build<br></br>
            the perfect collection.
        </h2>
        <a className="button is-danger is-border-radius">FREE TRIAL</a>
        </div>
    </div>

</section>
</div>