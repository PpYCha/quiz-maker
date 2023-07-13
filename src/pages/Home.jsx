import React, { useState } from "react";
import { Logos } from "../utils/QuizData";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(Logos[0].title);
  const [name, setName] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name:", name);
    console.log("category:", selectedCategory);
  };

  return (
    <div className="flex flex-wrap justify-center items-center flex-col">
      <div className="bg-gray-700 rounded-lg p-3 m-3">
        <form onSubmit={handleSubmit}>
          <div className="bg-gray-500 p-2 m-2 rounded-lg  ">
            <legend className="text-2xl">Select Category</legend>
            <div className="flex p-2  m-2  mb-4 border-b border-gray-200">
              {Logos.map((item, index) => (
                <div
                  key={item.id}
                  className={`${
                    selectedCategory === item.title ? "bg-gray-700" : null
                  } p-2 hover:scale-110  rounded-lg flex`}
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

            <div className="flex p-2 m-2 ">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2  pr-3 shadow-sm focus:outline-none  sm:text-sm text-black"
                placeholder="Name"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-sky-500 hover:bg-sky-700 py-1 px-3  m-2 text-slate-100 hover:scale-110 transition ease-in-out delay-150"
            >
              Start Test
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
