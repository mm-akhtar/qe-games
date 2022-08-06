import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'
function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Akhtar Games</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/home' className={classes.active}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/game' className={classes.active}>
                            Start The Game
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation