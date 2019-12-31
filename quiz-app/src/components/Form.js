import React, { useState } from 'react'
import { QuizData } from '../components/QuizData'
import Animate from 'animate.css-react'

const Form = () => {

    const [answer, setAnswer] = useState('')

    const selectAnswer = e => {
        setAnswer(e.target.value)
    }

    const [animation, setAnimation] = useState('')
    const [flip, setFlip] = useState('')

    const [answerValid, setAnswerValid] = useState()

    const [visibility, setVisibility] = useState('none')

    const [showQuiz, setShowQuiz] = useState(true)

   function addIndex (){
        if (index === 3){
            setShowQuiz(false)
            setVisibility('none')
        }else{
            setIndex(index + 1)
        }
    }

    const onSubmit = e => {
        if (index <= 3) {
            e.preventDefault()
            setAnswer(e.target.value)
            setVisibility('block')
            
            console.log(answer, correctAnswer, index)
            if (answer === correctAnswer) {
                setAnswerValid(true);
                addIndex()
                setAnimation('')
                setFlip("animated flipInY")

            }
            else {
                setAnswerValid(false)
                setAnimation('animated shake')


            }
        
        }else{
            setVisibility('hidden')
        }
        
    }


    const [index, setIndex] = useState(0)

    const correctAnswer = QuizData[`${index}`].answer





    return (
        <div className="container">

            <div className={animation} onAnimationEnd={() => setAnimation('')}>
                <div style={{ display: `${visibility}` }} className="message">{answerValid ? (
                    <h1 className='correct'>CORRECT! <br />
                        NEXT QUESTION IS...</h1>
                ) :
                    (
                        <h1 className='incorrect'>INCORRECT ANSWER... TRY AGAIN</h1>
                    )}
                </div>
                <div className={flip} onAnimationEnd={() => setFlip('')}> {showQuiz ? (
                    <form onSubmit={onSubmit}>
                        <h1>{QuizData[`${index}`].question}</h1>
                        <input type="radio" onClick={selectAnswer} name="answer" value={QuizData[`${index}`].options[0]} />{QuizData[`${index}`].options[0]}<br />
                        <input type="radio" onClick={selectAnswer} name="answer" value={QuizData[`${index}`].options[1]} />{QuizData[`${index}`].options[1]}<br />
                        <input type="radio" onClick={selectAnswer} name="answer" value={QuizData[`${index}`].options[2]} />{QuizData[`${index}`].options[2]}<br />
                        <br />
                        <button className="button" type="submit">Submit Answer</button>
                    </form>
                ) : (
                        <h1 className="done">CONGRATULATIONS YOU HAVE COMPLETED THE QUIZ!!!</h1>
                    )}


                </div>

            </div>

        </div>
    )
}

export default Form
