import { Link } from "react-router-dom";

export const Routers = () => {
  return (
    <div className="nav">
      <h3> neog health </h3>

      <div className="navigation">
        <p>
          <Link className="nav-link" to="/">
            Home
          </Link>{" "}
        </p>
        <p>
          <Link className="nav-link" to="/exercises">
            Exercises
          </Link>{" "}
        </p>

        <p>
          {" "}
          <Link className="nav-link" to="/foods">
            Foods
          </Link>{" "}
        </p>

        <p>
          {" "}
          <Link className="nav-link p-margin" to="/goals">
            Goals
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
