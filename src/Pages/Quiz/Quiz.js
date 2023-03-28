
import React from 'react'
import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";
function Quiz({name, questions, setScore, score,setQuestions}) {
const [currQues, setCurrQues] = useState(0);
const [options, setOptions] = useState();

useEffect(() => {
    setOptions(
        questions && handleShuffle([questions[currQues]?.correct_answer, ...questions[currQues]?.incorrect_answers])
    );
}, [questions,currQues]);
// console.log(questions)
const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
};

  return (
    <div className="quiz">
      <span className = "subtitle">Welcome, {name}</span>

        {questions ? (
            <>
            <div className="quiz__info">
                <span>{questions[0].category}</span>    


      <span>Score: {score}</span>
      </div>
      <Question 
      currQues={currQues}
      setCurrQues={setCurrQues}
      questions={questions}
      options={options}
      correct={questions[currQues]?.correct_answer}
      score={score}
      setScore={setScore}
      setQuestions={setQuestions}

      />
      </>) :(
            <CircularProgress style={{margin:100}} color="inherit" size={150} thickness={1} />
      )}
    </div>
  );
};

export default Quiz
