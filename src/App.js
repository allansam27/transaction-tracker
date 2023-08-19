import './index.css';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import VerifyOtp from './components/login/verifyOtp';
import Home from './components/home/Home';
import Loan from './components/loan/Loan';
import Loanrequest from './components/loan/loanrequest/Loanrequest';
import Otp from './components/Otp';
import Form1 from './components/loan/loanrequest/loanform/Form1';
import Form2 from './components/loan/loanrequest/loanform/Form2';
import Form3 from './components/loan/loanrequest/loanform/Form3';

import { Route,Routes } from 'react-router-dom';
import Lendform1 from './components/loan/Lendloan/Lendform1';
import List from './components/loan/Loanlisting/List';
function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/verifyotp' element={<VerifyOtp/>}/>
      <Route path='/otp' element={<Otp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/loan' element={<Loan/>}/>
      <Route path='/Loanrequest' element={<Loanrequest/>}/>
      <Route path='/form1' element={<Form1/>}/>
      <Route path='/form2' element={<Form2/>}/>
      <Route path='/form3' element={<Form3/>}/>
      <Route path="/lendform1" element={<Lendform1/>}/>
      <Route path="/List" element={<List/>}/>
    </Routes>
  );
}

export default App;
