import { toggleBgMode } from "./actions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const Routers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bgState = useSelector((state) => state.bg);

  const handleRoute = (e) => {
    if (e.target.textContent === "Home") {
      navigate("/");
    } else {
      navigate(e.target.textContent.toLowerCase());
    }
  };

  return (
    <div className={`nav-bar ${bgState ? "nav-dark" : "nav-light"}`}>
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

        <span className="p-margin">
          <DarkModeSwitch
            checked={bgState}
            onChange={() => dispatch(toggleBgMode())}
            size={20}
          />
        </span>
      </div>
    </div>
  );
};
