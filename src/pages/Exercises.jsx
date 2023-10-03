import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExerciseData,
  addExerciseData,
  deleteExerciseData
} from "../actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Exercises = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    duration: ""
  });

  const exercises = useSelector((state) => state.exercises);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleAddExercise = () => {
    dispatch(addExerciseData(input));
    setInput({
      name: "",
      duration: ""
    });
  };

  const deletedItem = (id) => {
    dispatch(deleteExerciseData(id));
  };

  useEffect(() => {
    dispatch(fetchExerciseData());
  }, [dispatch]);

  return (
    <div className="parent-div">
      <h1> Exercises </h1>

      <div className="exercise-input-div">
        <input
          name="name"
          onChange={handleInput}
          value={input.name}
          type="text"
          placeholder="Name"
        />

        <input
          name="duration"
          onChange={handleInput}
          value={input.duration}
          type="number"
          placeholder="Duration"
        />

        <button onClick={handleAddExercise}> Add Exercise </button>
      </div>

      {exercises?.length > 0 ? (
        <div className="global-div">
          {exercises?.map((exercise) => (
            <div className="exercise-div" key={exercise._id}>
              <div className="delete-div">
                {" "}
                <p>Name: {exercise?.name} </p>{" "}
                <FontAwesomeIcon
                  onClick={() => deletedItem(exercise?._id)}
                  className="deleted-icon"
                  icon={faTrash}
                />
              </div>
              <span> Duration: {exercise.duration} Minutes </span>
              <span> Burned Calories: {exercise.caloriesBurned}</span>
            </div>
          ))}{" "}
        </div>
      ) : (
        <h3 className="nothing"> No Exercises Added </h3>
      )}
    </div>
  );
};
