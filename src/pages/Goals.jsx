import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoalData, addGoalData, deleteGoalData } from "../actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Goals = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    description: "",
    createdAt: "",
    calories: "",
    status: "",
  });

  const goals = useSelector((state) => state.goals);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleAddGoal = () => {
    dispatch(addGoalData(input));
    setInput({
      name: "",
      description: "",
      createdAt: "",
      calories: "",
      status: "",
    });
  };

  const deletedItem = (id) => {
    dispatch(deleteGoalData(id));
  };

  useEffect(() => {
    dispatch(fetchGoalData());
  }, [dispatch]);

  return (
    <div className="parent-div">
      <h1> Goals </h1>{" "}
      <div className="food-input-div">
        <div>
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="Enter Name"
            onChange={handleInput}
          />
        </div>

        <div>
          <input
            type="text"
            name="description"
            value={input.description}
            placeholder="Enter Description"
            onChange={handleInput}
          />
        </div>

        <div>
          <input
            type="date"
            name="createdAt"
            value={input.createdAt}
            placeholder="Enter Date"
            onChange={handleInput}
          />
        </div>

        <div>
          <input
            type="number"
            name="calories"
            value={input.calories}
            placeholder="Enter Calories"
            onChange={handleInput}
          />
        </div>

        <div>
          <select name="status" onChange={handleInput}>
            <option value=""> Status </option>
            <option value="In Progress"> In Progress </option>
            <option value="Achieved"> Achieved </option>
            <option value="Abandoned"> Abandoned </option>
          </select>
        </div>

        <button onClick={handleAddGoal}> Add Food </button>
      </div>
      {goals?.length > 0 ? (
        <div className="global-div">
          {goals?.map((goal) => (
            <div className="goal-div" key={goal?._id}>
              <div className="delete-div">
                {" "}
                <p>Name: {goal?.name} </p>
                <FontAwesomeIcon
                  onClick={() => deletedItem(goal?._id)}
                  className="deleted-icon"
                  icon={faTrash}
                />
              </div>
              <span>Description: {goal?.description}</span>
              <span>
                Target Date: {new Date(goal?.createdAt).toLocaleString()}
              </span>

              <span>Calories: {goal?.calories}</span>

              <span>Status: {goal?.status}</span>
            </div>
          ))}{" "}
        </div>
      ) : (
        <h3 className="nothing"> No Goal Added </h3>
      )}
    </div>
  );
};
