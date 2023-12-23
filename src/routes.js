import { useNavigate } from "react-router-dom";
import { toggleBgMode } from "./actions";

import { useDispatch, useSelector } from "react-redux";

export const Routers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bg = useSelector((state) => state.bg);

  const handleRoute = (e) => {
    if (e.target.textContent === "Home") {
      navigate("/");
    } else {
      navigate(e.target.textContent.toLowerCase());
    }
  };

  return (
    <div className={`nav-bar ${bg ? "nav-dark" : "nav-light"}`}>
      <h3> neog health </h3>

      <div className="navigation">
        <p className="nav-link" onClick={handleRoute}>
          Home
        </p>
        <p className="nav-link" onClick={handleRoute}>
          Exercises
        </p>

        <p className="nav-link" onClick={handleRoute}>
          Foods
        </p>

        <p className="nav-link " onClick={handleRoute}>
          Goals
        </p>

        <span onClick={() => dispatch(toggleBgMode())} className="p-margin">
          {" "}
          {bg ? "🌝" : "🌚"}
        </span>
      </div>
    </div>
  );
};
