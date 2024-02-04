import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodData, addFoodData, deleteFoodData } from "../../src/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Foods = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    calories: "",
    protein: "",
    carbohydrates: "",
    fat: "",
  });

  const foods = useSelector((state) => state.foods);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleAddFood = () => {
    dispatch(addFoodData(input));
    setInput({
      name: "",
      calories: "",
      protein: "",
      carbohydrates: "",
      fat: "",
    });
  };

  const deletedItem = (id) => {
    dispatch(deleteFoodData(id));
  };

  useEffect(() => {
    dispatch(fetchFoodData());
  }, [dispatch]);

  return (
    <div className="parent-div">
      <h1> Foods </h1>

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
            type="number"
            name="calories"
            value={input.calories}
            placeholder="Enter Calories"
            onChange={handleInput}
          />
        </div>

        <div>
          <input
            type="number"
            name="protein"
            value={input.protein}
            placeholder="Enter Protein"
            onChange={handleInput}
          />
        </div>

        <div>
          <input
            type="number"
            name="carbohydrates"
            value={input.carbohydrates}
            placeholder="Enter Carbohydrates"
            onChange={handleInput}
          />
        </div>

        <div>
          <input
            type="number"
            name="fat"
            value={input.fat}
            placeholder="Enter Fat"
            onChange={handleInput}
          />
        </div>

        <button onClick={handleAddFood}> Add Food </button>
      </div>

      {foods?.length > 0 ? (
        <div className="global-div">
          {foods?.map((food) => (
            <div className="exercise-div" key={food?._id}>
              <div className="delete-div">
                {" "}
                <p>Name: {food?.name} </p>{" "}
                <FontAwesomeIcon
                  onClick={() => deletedItem(food?._id)}
                  className="deleted-icon"
                  icon={faTrash}
                />
              </div>

              <span>Calories: {food?.calories} </span>

              <span>Protein: {food?.protein}</span>

              <span>Carbohydrates: {food?.carbohydrates}</span>

              <span>Fat: {food?.fat}</span>
            </div>
          ))}{" "}
        </div>
      ) : (
        <h3 className="nothing"> No food added </h3>
      )}
    </div>
  );
};
