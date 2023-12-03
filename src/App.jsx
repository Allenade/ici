import "./App.css";
import HomePage from "./page/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import War from "./page/War";
import Donate from "./page/Donate";
// import Progress from "./component/progress";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/war" element={<War />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
