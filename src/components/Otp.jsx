import React from "react";
import { useNavigate } from "react-router-dom";
function Otp(){
    let navigate=useNavigate();
    return (
        <>
        <div class="otppage">
            <h1 style={{textAlign:"center",fontSize:"30px"}}>ENTER OTP</h1>
            <ppx>OTP has been sent your phone number</ppx>
            <div class="userInput">
                <input type="text" id='ist' maxlength="1" onkeyup="clickEvent(this,'sec')"/>
                <input type="text" id="sec" maxlength="1" onkeyup="clickEvent(this,'third')"/>
                <input type="text" id="third" maxlength="1" onkeyup="clickEvent(this,'fourth')"/>
                <input type="text" id="fourth" maxlength="1" onkeyup="clickEvent(this,'fifth')"/>
                
            </div>
            {/* <button onClick={()=>navigate('/home')}>Signup</button> */}
                <div style={{margin:"0px"}}>
                    <button style={{ fontSize: "100%",marginLeft: "0px", height: "40px",width: "130px"}} type="submit" onClick={()=>navigate('/home')}>Signup</button>
                </div>   
        </div>  
        </>
    )
};
export default Otp;