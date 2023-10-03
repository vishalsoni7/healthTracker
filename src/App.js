import { DashBoard } from "./pages/DashBoard";
import { Exercises } from "./pages/Exercises";
import { Foods } from "./pages/Foods";
import { Goals } from "./pages/Goals";
import { Routers } from "./routes";
import "./styles.css";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routers />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </div>
  );
}
