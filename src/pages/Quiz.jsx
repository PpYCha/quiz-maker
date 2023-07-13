import React, { useRef, useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import { QuizData } from "../utils/QuizData";
import DialogComponent from "../components/DialogComponent";
import useTraineeStore from "../context/traineeStore";

const Quiz = () => {
  const {name , category} = useTraineeStore((state) => state.trainee)

  const [open, setOpen] = useState(false);
  const [score, setScore] = useState(0);

  const cancelButtonRef = useRef(null);

  const [formData, setFormData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = [];

    QuizData.forEach((item, index) => {
      const selectedOption = document.querySelector(
        `input[name=category-${index}]:checked`
      );
      const optionValue = selectedOption ? selectedOption.value : null;

      formValues.push({ question: item.question, answer: optionValue });
    });

    setFormData(formValues);
    console.log(formValues);
    // Compare answers
    const correctAnswers = formValues.filter(
      (formValue) =>
        QuizData.find((item) => item.question === formValue.question).answer ===
        formValue.answer
    );

    console.log("Correct answers:", correctAnswers.length);
    setScore(correctAnswers.length);
    setOpen(true);
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-around">
          <h1 className="text-2xl">Pre-Test</h1>
          <h2>{name}</h2>
          <h2>{category}</h2>
        </div>
        <div className="flex flex-col bg-slate-400 justify-center items-center">
          <div className=" bg-slate-50 rounded-lg text-2xl  m-2">
            <div className="bg-gray-700 text-center p-2">
              <h4 className="mr-2 ">Ms Excel assessment</h4>
            </div>
            {QuizData.map((item, index) => (
              <div key={item.id}>
                <div className="px-2 py-3 bg-slate-50 border-b border-slate-400">
                  <p className="text-lg text-black">
                    {index + 1}. {item.question}
                  </p>
                </div>
                <div className="text-xl bg-slate text-black">
                  {item.options.map((option, optionIndex) => (
                    <div
                      key={option}
                      className="p-2 bg-gray-100 border-b border-slate-400"
                    >
                      <input
                        id={`option-${index}-${optionIndex}`}
                        type="radio"
                        name={`category-${index}`}
                        value={option}
                        className="mr-2"
                      />
                      <label htmlFor={`option-${index}-${optionIndex}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <button type="submit" className="bg-sky-500 rounded-lg py-1 px-2">
              Submit
            </button>
          </div>
        </div>
      </form>

      <DialogComponent open={open} setOpen={setOpen} score={score} />
    </div>
  );
};

export default Quiz;
