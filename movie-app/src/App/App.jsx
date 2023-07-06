import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import SignedOutHome from "../SignedOutHome/SignedOutHome"
import ForgotPassword from '../SignIn/ForgotPassword';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignedOutHome />} />
        <Route path="/SignIn" element={<SignIn />}/>
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
