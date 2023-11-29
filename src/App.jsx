import "./App.css";
import HomePage from "./component/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import War from "./component/War";
import Donate from "./component/Donate";
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
