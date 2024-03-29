import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExerciseData, fetchFoodData, fetchGoalData } from "../actions";
import { DNA } from "react-loader-spinner";

export const DashBoard = () => {
  const dispatch = useDispatch();
  const bg = useSelector((state) => state.bg);
  const exercises = useSelector((state) => state.exercises);
  const foods = useSelector((state) => state.foods);
  const goals = useSelector((state) => state.goals);

  const totalBurnedCalories = exercises?.reduce(
    (acc, curr) => curr.caloriesBurned + acc,
    0
  );

  const totalCaloriesConsumed = foods?.reduce(
    (acc, curr) => curr.calories + acc,
    0
  );

  const totalCaloriesGoal = goals?.reduce(
    (acc, curr) => curr.calories + acc,
    0
  );

  useEffect(() => {
    dispatch(fetchExerciseData());
    dispatch(fetchFoodData());
    dispatch(fetchGoalData());
  }, [dispatch]);

  const isData =
    !totalBurnedCalories && !totalCaloriesConsumed && !totalCaloriesGoal;

  if (isData) {
    return (
      <div className="spinner-div">
        <DNA
          visible={true}
          height="80"
          width="80"
          wrapperStyle={{}}
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  return (
    <>
      <div className={`dashboard ${bg ? "dark-mode" : "light-mode"}`}>
        <h2 className="landing-heading">
          See more of <br />
          yourself in Health.
        </h2>
        <div className="card">
          <div className="dashboard-child">
            <div className="dashboard-child-div">
              <h4>Total Calories Burned</h4>
              <span>
                <b>{totalBurnedCalories}</b>
              </span>
            </div>
            <div className="dashboard-child-div">
              <h4>Total Calories Consumed</h4>
              <span>
                <b>{totalCaloriesConsumed}</b>
              </span>
            </div>
          </div>
          <div className="dashboard-child">
            <div className="dashboard-child-div">
              <h4>Total Calories Goal</h4>
              <span>
                <b>{totalCaloriesGoal}</b>
              </span>
            </div>
            <div className="dashboard-child-div">
              <h4>Remaining Calories to Goal</h4>
              <span>
                <b>{totalCaloriesGoal - totalCaloriesConsumed}</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
