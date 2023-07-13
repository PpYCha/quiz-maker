import React from "react";
import { Logos } from "../utils/QuizData";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import useTraineeStore from "../context/traineeStore";
import DialogComponent from "../components/DialogComponent";

const Home = () => {
  const selectedCategory = useTraineeStore((state) => state.trainee.category);
  const name = useTraineeStore((state) => state.trainee.name);
  const updateTraineeData = useTraineeStore((state) => state.updateTraineeData);

  const handleCategoryChange = (event) => {
    updateTraineeData({ category: event.target.value });
  };

  const handleNameChange = (event) => {
    updateTraineeData({ name: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission if needed
 
  };

  return (
    <div className="flex flex-wrap justify-center items-center flex-col">
      <div className="bg-gray-700 rounded-lg p-3 m-3">
        <form onSubmit={handleSubmit}>
          <div className="bg-gray-500 p-2 m-2 rounded-lg">
            <legend className="text-2xl">Select Category</legend>
            <div className="flex p-2 m-2 mb-4 border-b border-gray-200">
              {Logos.map((item, index) => (
                <div
                  key={item.id}
                  className={`${
                    selectedCategory === item.title ? "bg-gray-700" : null
                  } p-2 hover:scale-110 rounded-lg flex`}
                >
                  <input
                    id={item.title}
                    type="radio"
                    name="category"
                    value={item.title}
                    checked={selectedCategory === item.title}
                    onChange={handleCategoryChange}
                  />
                  <label htmlFor={item.title}>{item.title}</label>
                </div>
              ))}
            </div>

            <div className="flex p-2 m-2">
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none sm:text-sm text-black"
                placeholder="Name"
              />
            </div>
            <Link to="/quiz">
              <Button text="Start Test" />
            </Link>
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default Home;
