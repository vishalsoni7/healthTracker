const initialState = {
  exercises: [],
  foods: [],
  goals: [],
  error: null,
  loading: false,
  bg: false,
};

export const trackerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TOGGLE_BG_MODE":
      return {
        ...state,
        bg: !state.bg,
      };

    case "FETCH_EXERCISES_DATA":
      return {
        ...state,
        exercises: payload,
        loading: false,
        error: null,
      };

    case "FETCH_FOODS_DATA":
      return {
        ...state,
        foods: payload,
        loading: false,
        error: null,
      };

    case "FETCH_GOALS_DATA":
      return {
        ...state,
        goals: payload,
        loading: false,
        error: null,
      };

    case "FETCH_EXERCISES_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error while fetching exercises!",
      };

    case "FETCH_FOODS_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error while fetching foods!",
      };

    case "FETCH_GOALS_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error while fetching goals!",
      };

    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, payload],
      };

    case "ADD_FOOD":
      return {
        ...state,
        foods: [...state.foods, payload],
      };

    case "ADD_GOAL":
      return {
        ...state,
        goals: [...state.goals, payload],
      };

    case "FAILED_TO_ADD_EXERCISE":
      return {
        ...state,
        loading: false,
        error: "Error while adding new exercise!",
      };

    case "FAILED_TO_ADD_FOOD":
      return {
        ...state,
        loading: false,
        error: "Error while adding new food!",
      };

    case "FAILED_TO_ADD_GOAL":
      return {
        ...state,
        loading: false,
        error: "Error while adding new goal!",
      };

    case "DELETE_EXERCISE":
      const updatedExercises = state.exercises.filter(
        (exercise) => exercise._id !== payload._id
      );

      return {
        ...state,
        exercises: updatedExercises,
      };

    case "DELETE_FOOD":
      const updatedFoods = state.foods.filter(
        (food) => food._id !== payload._id
      );

      return {
        ...state,
        foods: updatedFoods,
      };

    case "DELETE_GOAL":
      const updatedGoals = state.goals.filter(
        (goal) => goal._id !== payload._id
      );

      return {
        ...state,
        goals: updatedGoals,
      };

    case "FAILED_TO_DELETE_EXERCISE":
      return {
        ...state,
        loading: false,
        error: "Error while deleting exercise!",
      };

    case "FAILED_TO_DELETE_FOOD":
      return {
        ...state,
        loading: false,
        error: "Error while deleting food!",
      };

    case "FAILED_TO_DELETE_GOAL":
      return {
        ...state,
        loading: false,
        error: "Error while deleting goal!",
      };

    default:
      return state;
  }
};
