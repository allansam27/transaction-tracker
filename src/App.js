import './index.css';
import Login from './components/Login';
import Signup from './components/Signup';
import VerifyOtp from './components/verifyOtp';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/verifyotp' element={<VerifyOtp/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  );
}

export default App;
