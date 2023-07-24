import React from "react";
import { useNavigate } from "react-router-dom";

function Signup(props){
    let navigate=useNavigate();
    return (
        <div className="totalPage">
            <div className="leftPage">
                <img src="loginpagegif.gif"></img>
            </div>
            <div className="rightPage">
                <div className="signupPage">
                    <div style={{height:"10%"}}>
                        <h1>Signup</h1>
                    </div>
                    <form  method="post">
                        <div className="containerSignup">
                            <label for="name" style={{marginLeft:"10px",fontSize:"120%"}}><b>Name</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required/>

                            <label for="dob" style={{marginLeft:"10px",fontSize:"120%"}}><b>DOB</b></label>
                            <input type="date" placeholder="Enter DOB" name="dob" required/>

                            <label for="number" style={{marginLeft:"10px",fontSize:"120%"}}><b>Phone</b></label>
                            <input type="number" placeholder="Enter Phone Number " name="number" required/>

                            <label for="city" style={{marginLeft:"10px",fontSize:"120%"}}><b>City</b></label>
                            <input type="text" placeholder="Enter City" name="city" required/>

                            <label for="psw" style={{marginLeft:"10px",fontSize:"120%"}}><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required/>
                            <div style={{display:"flex",justifyContent:"center"}}>
                                <button onClick={()=>navigate('/verifyotp')} type="submit">Verify OTP</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
        </div>
    )
};
export default Signup;