import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Assets/Styles/App.css";
import Home from "./Assets/Pages/Home";
import About from "./Assets/Pages/About";
import Error404 from "./Assets/Pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
