import React from "react";
import { useNavigate } from "react-router-dom";
function VerifyOtp(props){
    let navigate=useNavigate();
    return (
       <div className="totalPage">
        <div className="leftPage">

        </div>
        <div className="rightPage">
            <div class="otppage">
            <h1 style={{textAlign:"center"}}>ENTER OTP</h1>
                <p>OTP has been sent your phone number</p>
                <div class="userInput">
                    <input type="text" id='ist' maxlength="1" onkeyup="clickEvent(this,'sec')"/>
                    <input type="text" id="sec" maxlength="1" onkeyup="clickEvent(this,'third')"/>
                    <input type="text" id="third" maxlength="1" onkeyup="clickEvent(this,'fourth')"/>
                    <input type="text" id="fourth" maxlength="1" onkeyup="clickEvent(this,'fifth')"/>
                </div>
                <button onClick={()=>navigate('/home')}>Signup</button>
            </div>  
        </div>
       </div>
    )
};
export default VerifyOtp;