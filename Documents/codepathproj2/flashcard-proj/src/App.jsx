import React, { useState } from "react";
import "./App.css";

const flashcards = [
  { question: "What is the capital of El Salvador?", answer: "San Salvador" },
  { question: "What is the capital of Honduras?", answer: "Tegucigalpa" },
  { question: "What is the capital of Spain?", answer: "Madrid" },
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is the capital of Italy?", answer: "Rome" },
  { question: "What is the capital of Germany?", answer: "Berlin" },
  { question: "What is the capital of Japan?", answer: "Tokyo" },
  { question: "What is the capital of Canada?", answer: "Ottawa" },
  { question: "What is the capital of Australia?", answer: "Canberra" },
  { question: "What is the capital of Brazil?", answer: "Brasília" },
];

export default function FlashcardApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(0);


  const nextCard = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const prevCard = () => { 
    setCurrentIndex(currentIndex - 1);
  }


  return (
    <div className="app-container">
      <h1 className="title">Flashcard App</h1>
      <p className="card-count">Total Cards: {flashcards.length}</p>
      <div className="flashcard" onClick={() => setShowAnswer(!showAnswer)}>
        <p className="card-text">
          {showAnswer ? flashcards[currentIndex].answer : flashcards[currentIndex].question}
        </p>
      </div>
      <button className="next-button" onClick={prevCard}>Previous Card</button>
      <button className="next-button" onClick={nextCard}>Next Card</button>
    </div>
  );
}
