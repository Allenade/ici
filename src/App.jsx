import "./App.css";
import HomePage from "./page/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import War from "./page/War";
import Donate from "./page/Donate";
// import Where from "./page/Where";
// import What from "./page/What";
// import Support from "./page/Support";
// import Progress from "./component/progress";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/war" element={<War />} /> */}
        <Route path="/Donate" element={<Donate />} />
        {/* <Route path="/Where" element={<Where />} />
        <Route path="/What" element={<What />} />
        <Route path="/Support" element={<Support />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
