import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col bg-white">
      <Navbar />
      <div className="text-center p-4 mt-12 mb-6">
        <h1 className="text-2xl font-bold mb-4 ">Welcome to Science Quiz</h1>
        <p className="text-xl mt-6 leading-10">
          Take our quick quiz, to help you grade <br></br> your knowledge about
          general science.<br></br>Our quiz comprises of various questions
          <br/> from Easy, Medium, Hard. You get instant corrections.
          <br/> These Sets of questions would help build your understanding.
          <br/>
          You can begin the quiz.
        </p>
      </div>
      <div
        className=" mx-auto 
      transition duration-150 delay-100 ease-in-out hover:scale-110 hover:text-black-800 text-center w-24 h-8 rounded-lg shadow-lg mb-0 font-bold bg-gradient-to-r from-green-200 via-green-400 to-green-500  cursor-pointer text-white">
        <Link to="/quiz" >Start quiz</Link>
      </div>
      <div className="bg-purple-700 mb-4 mt-32 w-full text-center text-white font-bold ">
        Copyright © Created by Remzeey and Pearl
      </div>
    </div>
  );
};

export default App;
