import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SignedOutHome from "../SignedOutHome/SignedOutHome"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SignedOutHome />
      </BrowserRouter>
      
    </div>
  );
}
export default App;