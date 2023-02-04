import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Questions from "./Routes/Questions";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
