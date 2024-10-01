import React from "react"


export function Navbar () {
    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a 
          className='navbar-item'
          //className={classes['navbar-item']} 
          href="https://trello.com/es"> 
            <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <image href="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1200px-Trello_logo.svg.png" x="0" y="0" height="160" width="640"/>
            </svg>
          </a>
      
          <a 
            role="button" 
            className="navbar-burger" 
            aria-label="menu" 
            aria-expanded="false" 
            data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a 
              className='navbar-item'
              //className={classes['navbar-item']}
            >
              Workspaces
            </a>
      
            <a 
              className='navbar-item'
              //className={classes['navbar-item']}
            >
              Recent
            </a>

            <a 
              className='navbar-item'
              //className={classes['navbar-item']}
            >
                Starred
            </a>

            <a 
              className='navbar-item'
              //className={classes['navbar-item']} 
              href="https://trello.com/templates"
              >
                Templates
            </a>
      
            <div 
              className='navbar-item has-dropdown is-hoverable'
              //className={`${classes['navbar-item']} has-dropdown is-hoverable`} 
              >
              <a 
                className='navbar-link'
                //className={classes['navbar-link']}
                >
                More
              </a>
      
              <div className="navbar-dropdown">
                <a 
                  className='navbar-item'
                  //className={classes['navbar-item']} 
                  href="https://trello.com/tour">
                  About
                </a>
                <hr className="navbar-divider"/>
                <a 
                  className='navbar-item'
                  //className={classes['navbar-item']} 
                  href="https://support.atlassian.com/trello/"
                  >
                  Report an issue
                </a>
              </div>
            </div>

            <a 
              className='navbar-item is-active'
              //className={`${classes['navbar-item']} is-active`} 
            >
              Create
            </a>

          </div>
      
          <div className="navbar-end">
            <div 
              className='navbar-item'
              //className={classes['navbar-item']}
              >
              <div className="buttons">
                <a 
                className='button is-primary'
                //className={`${classes.button} ${classes['is-primary']}`} 
                href="https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D">
                  <strong>Sign up</strong>
                </a>
                <a 
                className='button is-light'
                //className={`${classes.button} is-light`} 
                href="https://id.atlassian.com/signup?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}