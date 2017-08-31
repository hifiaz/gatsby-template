import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () =>
  <div>
    <nav className="navbar">
      <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
        </a>

        <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
          <span className="icon" style={{"color": "#333"}}>
            <i className="fa fa-github"></i>
          </span>
        </a>

        <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
          <span className="icon" style={{"color": "#55acee"}}>
            <i className="fa fa-twitter"></i>
          </span>
        </a>

        <div className="navbar-burger burger" data-target="navMenubd-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenubd-example" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link  is-active" href="/documentation/overview/start/">
              Docs
            </a>
            <div className="navbar-dropdown ">
              <a className="navbar-item " href="/documentation/overview/start/">
                Overview
              </a>
              <a className="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                Modifiers
              </a>
              <a className="navbar-item " href="http://bulma.io/documentation/columns/basics/">
                Columns
              </a>
              <a className="navbar-item " href="http://bulma.io/documentation/layout/container/">
                Layout
              </a>
              <a className="navbar-item " href="http://bulma.io/documentation/form/general/">
                Form
              </a>
              <a className="navbar-item " href="http://bulma.io/documentation/elements/box/">
                Elements
              </a>
              <a className="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
                Components
              </a>
              
              <hr className="navbar-divider"></hr>
              <div className="navbar-item">
                <div>
                  <p className="is-size-6-desktop">
                    <strong className="has-text-info">0.5.1</strong>
                  </p>
                  
                    <small>
                      <a className="bd-view-all-versions" href="/versions">View all versions</a>
                    </small>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link " href="http://bulma.io/blog/">
              Blog
            </a>
            <div id="blogDropdown" className="navbar-dropdown " data-style="width: 18rem;">
              
                <a className="navbar-item" href="/2017/08/03/list-of-tags/">
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">03 Aug 2017</small>
                    </p>
                    <p>New feature: list of tags</p>
                  </div>
                </a>
              
                <a className="navbar-item" href="/2017/08/01/bulma-bootstrap-comparison/">
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">01 Aug 2017</small>
                    </p>
                    <p>Bulma / Bootstrap comparison</p>
                  </div>
                </a>
              
                <a className="navbar-item" href="/2017/07/24/access-previous-bulma-versions/">
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">24 Jul 2017</small>
                    </p>
                    <p>Access previous Bulma versions</p>
                  </div>
                </a>
              
              <a className="navbar-item" href="http://bulma.io/blog/">
                More posts
              </a>
              <hr className="navbar-divider"></hr>
              <div className="navbar-item">
                <div className="navbar-content">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <strong>Stay up to date!</strong>
                      </div>
                    </div>
                    <div className="level-right">
                      <div className="level-item">
                        <a className="button bd-is-rss is-small" href="http://bulma.io/atom.xml">
                          <span className="icon is-small">
                            <i className="fa fa-rss"></i>
                          </span>
                          <span>Subscribe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link">
              More
            </div>
            <div id="moreDropdown" className="navbar-dropdown ">
              <a className="navbar-item " href="http://bulma.io/extensions/">
                <div className="level is-mobile">
                  <div className="level-left">
                    <div className="level-item">
                      <p>
                        <strong>Extensions</strong>
                        <br></br>
                        <small>Side projects to enhance Bulma</small>
                      </p>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <span className="icon has-text-info">
                        <i className="fa fa-plug"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <a className="navbar-item " href="http://bulma.io/expo/">
            <span className="bd-emoji">🎨</span>
            Expo
          </a>
          <a className="navbar-item " href="http://bulma.io/love/">
            <span className="bd-emoji">❤️</span>
            Love
          </a>
        </div>

        <div className="navbar-end">
          <a className="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
            <span className="icon" style={{"color": "#333"}}>
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a className="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
            <span className="icon" style={{"color": "#55acee"}}>
              <i className="fa fa-twitter"></i>
            </span>
          </a>
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
                  <span className="icon">
                    <i className="fa fa-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
                  <span className="icon">
                    <i className="fa fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  <div className="container" style={{"margin-top":"1em"}}>
    <div className="columns">
      <div className="column is-one-third">
        <aside className="menu">
          <p className="menu-label">
            General
          </p>
          <ul className="menu-list">
            <li><a href="/vanolia">Vanolia</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/knowhat">Know what</a></li>
          </ul>
          <p className="menu-label">
            Administration
          </p>
          <ul className="menu-list">
            <li><a>Team Settings</a></li>
            <li>
              <a className="is-active">Manage Your Team</a>
              <ul>
                <li><a>Members</a></li>
                <li><a>Plugins</a></li>
                <li><a>Add a member</a></li>
              </ul>
            </li>
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
          </ul>
          <p className="menu-label">
            Transactions
          </p>
          <ul className="menu-list">
            <li><a>Payments</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
          </ul>
        </aside>
      </div>
      <div className="column">
        <section className="hero is-warning is-fullheight">
          <div className="hero-body">
              <h1 className="title">
                This is repo for static front page
              </h1>
          </div>
        </section>
      </div>
    </div>
  </div>
  </div>

export default IndexPage
