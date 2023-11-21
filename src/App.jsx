import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  const questions= [
    {
      questionText:"what is the capital of england",
      answersOptions:[
      {answerText:"Bradford", isCorrect: false},
      {answerText:"Wales", isCorrect:false},
      {answerText:"London", isCorrect:true},
      {answerText:"Birmingham", isCorrect:false}]
    },
    {
      questionText:"what is the capital of france", 
      answersOptions:[
      {answerText:"Marseille ", isCorrect:false},
      {answerText:"Paris ", isCorrect:true},
      {answerText:"Toulouse", isCorrect:false},
      {answerText:"Lyon", isCorrect:false}]
    },
    {
      questionText:"what is the capital of italy",
      answersOptions:[
      {answerText:"Rome", isCorrect:true},
      {answerText:"Milan", isCorrect:false},
      {answerText:"Naples", isCorrect:false},
      {answerText:"Palermo", isCorrect:false}]
    },
  ]




  const [currentQuestion, setCurrentQuestion]=useState(0)

  const [showScore, setShowScore]= useState(false)

  const [score,setScore]= useState(0)

  const restart= ()=>{

      setCurrentQuestion(0)
      setShowScore(false)
      setScore(0)
  }


  const handleClickEvent=(isCorrect)=>{
    if(isCorrect === true){
      setScore(score+1)
    }

    const nextQuestion= currentQuestion+1
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    } else{
      setShowScore(true)
    }
    
  }





  
  return (
    <div className='quiz'>
      
      {showScore ? (
          <div className='showscore'>
          <h1>You scored {score} out of {questions.length}!!</h1>
          <button onClick={restart} className='return-home'>restart</button>
          </div>
      ) : (
      
        <>
        <div className="question-section">
          <h1 className='title'>Question  </h1> 
          <p>{currentQuestion + 1} / {questions.length}</p>

          <div className="question">
           {questions[currentQuestion].questionText}
          </div>
      </div>


      <div className="answers-section">
          {questions[currentQuestion].answersOptions.map((answer)=>
          <button className='choice' onClick={()=>handleClickEvent(answer.isCorrect)}>
            {answer.answerText}
          </button>)}
          </div>

        </>
      )}

    </div>
  )}

export default App
