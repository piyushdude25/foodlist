import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
import { Route, Routes } from "react-router-dom";
import Page2 from './components/Page2';

function App() {
  return (
    <div className="App">
   
    <Routes>
        <Route path="/" element={ <Page1/>} />
        <Route path="/product/:code" element={<Page2/>} />
        
      </Routes>
    </div>
  );
}

export default App;
