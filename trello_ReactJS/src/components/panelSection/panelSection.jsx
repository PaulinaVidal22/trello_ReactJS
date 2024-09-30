import React from "react";

export function PanelSection () {
    return (
        <article className="panel is-link is-fixed-top">
            <div className={classes['panel-heading']}/>
                <p>Marketing</p>
                <div id="panelMenu" className="navbar-menu">
                  <div className="navbar-start">
                    <a className={classes['navbar-item']}>
                      Workspace visible
                    </a>
              
                    <div className={`${classes['navbar-item']} has-dropdown is-hoverable`}>
                      <a className={classes['navbar-link']}>Board</a>
              
                    <div className="navbar-dropdown" id = "dropdown-menu" role = "menu">
                        <a className={classes['navbar-item']}>Board 1</a>
                        <hr className="navbar-divider"/>
                        <a className={classes['navbar-item']}>Board 2</a>
                    </div>
                  </div>


                </div>
            </div>
        </article>
    );
}