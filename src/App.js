import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Page1 } from "./Components/Page1";
import { Page2 } from "./Components/Page2";

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Page1/>} />
        <Route path="/:id" element={<Page2/>} />
      </Routes>
    </div>
  );
}

export default App;
