import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Store from "./pages/ProductStore";
import Home from "./pages/Home";
import Data from "./pages/Data";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/MyData" element={<Data />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
