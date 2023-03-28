
import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";


function App() {
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState();
  const fetchQuestions = async(category="",difficulty="")=>{
    const {data} =await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );
      setQuestions(data.results);
  }
  // console.log(questions)
  return (
    // <Route path="/" element={<SignIn />} />
    // <Route path="/signup" element={<SignUp />}/>
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(./ques1.png)"}}>
    <Header />
    <Routes>
      <Route path="/" exact element={<Home  name={name}
        setName={setName}
        fetchQuestions={fetchQuestions}/>} />
        
        <Route path="/quiz" element={<Quiz questions={questions} setScore={setScore} score={score} name={name} setQuestions={setQuestions}/>} />
        <Route path="/result" element={<Result score={score} name={name} />} />

        
        </Routes>
    <Footer />
    </div>
   
    </BrowserRouter>
  );
}

export default App;



