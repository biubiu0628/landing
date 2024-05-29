import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trang1 from "./components/Trang1";
import Trang2 from "./components/Trang2";
import Trang3 from "./components/Trang3";
import Trang4 from "./components/Trang4";
import Thanks from "./components/Thanks";

function App() {
  return (
    <div className="bg-[#EEF5FF] h-screen flex justify-center items-center font-Ubuntu-regular">
      <div className="bg-white flex p-4 rounded-xl w-[1000px]">
        <Router>
          <Routes>
            <Route path="/" element={<Trang1 />} />
            <Route path="/2" element={<Trang2 />} />
            <Route path="/3" element={<Trang3 />} />
            <Route path="/4" element={<Trang4 />} />
            <Route path="/thank" element={<Thanks />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
