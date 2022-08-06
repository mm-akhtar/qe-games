import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../Home.module.css'

const Home = () => {
    return (
        <li className={classes.item}>
            <figure>
                <blockquote>
                    <p>WELCOME !!</p>
                </blockquote>
                <figcaption>A trivia game or competition is one where the competitors are asked questions about interesting but facts in many subjects</figcaption>
                <figcaption>If You are interested Please click the below button to start the game.Yay!!</figcaption>
            </figure>
            <Link to={`/game`} className='btn'>
                Start The Game
            </Link>
        </li>
    )
}

export default Home