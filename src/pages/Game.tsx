import { Fragment, useState, useEffect, FormEvent } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../components/UI/Card';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import classes from './Game.module.css';
const Game = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [userAnswer, setUserAnswer] = useState('')
    const [question, setQuestion] = useState<{ question: string, correct_answer: string }>()
    const [message, setMessage] = useState('')

    function submitFormHandler(event: FormEvent) {
        event.preventDefault();
        if (userAnswer) {
            if (userAnswer.toLocaleLowerCase().trim() === question?.correct_answer.toLocaleLowerCase()) {
                setMessage('Congrats Answer is Correct.')
                setQuestion({ question: '', correct_answer: '' })
                setUserAnswer('')
                fetchData()
                setMessage('')
            } else {
                setMessage('Oops Not Correct Answer')
            }
        }
    }

    const formFocusHandler = () => {
        setMessage('')
    }
    const fetchData = async () => {
        setIsLoading(true)
        setQuestion({ question: '', correct_answer: '' })
        setUserAnswer('')
        setMessage('')
        const response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple')
        const result = await response.json()
        setQuestion(result.results[0])
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Fragment>
            <Card>
                <div className={classes.control}>
                    {!isLoading ? <h3><strong>Q.</strong> <span dangerouslySetInnerHTML={{ __html: question!.question }}></span></h3> : <LoadingSpinner />}
                </div>
                <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
                    <div className={classes.control}>
                        <label htmlFor='text'>Answer</label>
                        <textarea id='text' rows={5} value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
                    </div>
                    <div className={classes.actions}>
                        <button className='btn'>Submit The Answer</button>
                    </div>
                </form>
            </Card>
            <div className={classes.actions}>
                <button onClick={() => fetchData()} className='btn'>Next</button>
                <NavLink to='/home' className={classes.active}>
                    <button className='btn red'>End Game</button>
                </NavLink>
            </div>
            {!!message && <h6 className={classes.message}>{message}</h6>}
        </Fragment>
    )
}

export default Game