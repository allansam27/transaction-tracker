import React from "react";
import Otp from "../Otp";
import { useNavigate } from "react-router-dom";
function VerifyOtp(props){
    let navigate=useNavigate();
    return (
       <div className="totalPage">
        <div className="leftPage">
            <img src="loginpagegif.gif"></img>
        </div>
        <div className="rightPage">
            <div className="verOtpCont" >
                <Otp/>
                <div>
                <button type="submit" onClick={()=>navigate('/home')}>Signup</button>
                </div>
            </div>
        </div>
       </div>
    )
};
export default VerifyOtp;