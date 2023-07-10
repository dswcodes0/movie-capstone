import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import SignedOutHome from "../SignedOutHome/SignedOutHome"
import ForgotPassword from '../SignIn/ForgotPassword';
import SignedInHome from "../SignedInHome/SignedInHome";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignedOutHome />} />
        <Route path="/SignIn" element={<SignIn />}/>
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignedInHome" element={<SignedInHome />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
