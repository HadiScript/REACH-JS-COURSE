import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/screens/AboutUs";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        {/* <Home /> */}
        {/* <AboutUs /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
