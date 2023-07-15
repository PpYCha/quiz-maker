import React, { useState } from "react";
import { QuizData } from "../utils/QuizData";
import Button from "../components/Button";
import useTraineeStore from "../context/traineeStore";

const Quiz = () => {
  const { category } = useTraineeStore((state) => state.trainee);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    console.log("next");
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleAnswerSelect = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const getQuestionByCategory = () => {
    return QuizData.filter((question) => question.category === category);
  };

  const currentQuestion = getQuestionByCategory()[currentQuestionIndex];
  const totalQuestions = getQuestionByCategory().length;

  const handleFinish = (e) => {
    e.preventDefault();

    const categoryData = QuizData.filter((item) => item.category === category);

    const result = categoryData.map((item) => {
      const userAnswer = userAnswers[item.id];
      const isCorrect = userAnswer === item.answer;
      return { ...item, userAnswer, isCorrect };
    });

    console.log(result);

    const correctCount = result.reduce(
      (count, item) => (item.isCorrect ? count + 1 : count),
      0
    );

    console.log("Correct Count:", correctCount);
  };

  return (
    <div className="flex flex-col">
      {currentQuestion && (
        <>
          <div className="flex items-center justify-around">
            <h1 className="text-2xl">{category}</h1>
            <h2>Question {currentQuestionIndex + 1}</h2>
          </div>
          <div className="flex flex-col bg-slate-400 justify-center items-center">
            <div className="bg-slate-50 rounded-lg text-2xl m-2">
              <div className="bg-gray-700 text-center p-2">
                <h4 className="mr-2">Ms {category} assessment</h4>
              </div>
              <div className="px-2 py-3 bg-slate-50 border-b border-slate-400">
                <p className="text-lg text-black">{currentQuestion.question}</p>
              </div>
              <div className="text-xl bg-slate text-black">
                {currentQuestion.options.map((option, optionIndex) => (
                  <div
                    key={option}
                    className="p-2 bg-gray-100 border-b border-slate-400"
                  >
                    <input
                      id={`option-${currentQuestion.id}-${optionIndex}`}
                      type="radio"
                      name={`category-${currentQuestion.id}`}
                      value={option}
                      className="mr-2"
                      checked={
                        userAnswers[currentQuestion.id] === option
                          ? true
                          : false
                      }
                      onChange={() =>
                        handleAnswerSelect(currentQuestion.id, option)
                      }
                    />
                    <label
                      htmlFor={`option-${currentQuestion.id}-${optionIndex}`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              <div className="flex justify-between p-2 m-2">
                {currentQuestionIndex > 0 && (
                  <button type="button" onClick={handlePreviousQuestion}>
                    Back
                  </button>
                )}
                {currentQuestionIndex < totalQuestions - 1 && (
                  <button type="button" onClick={handleNextQuestion}>
                    Next
                  </button>
                )}
                {currentQuestionIndex == totalQuestions - 1 && (
                  <button type="submit" onClick={handleFinish}>
                    Finish
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
