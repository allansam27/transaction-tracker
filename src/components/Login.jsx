import React from "react";
import { useNavigate } from "react-router-dom";
function Login(props){
    let navigate = useNavigate();
    return(
        <div className="totalPage">
        <div className="leftPage">
            <img src="loginpagegif.gif"></img>
        </div>
        <div className="rightPage">
            <div className="loginPage">
                <h1 style={{textAlign:"center"}}>Login</h1>
                <form  method="post">
                    <div className="container">
                        <label for="uname" style={{marginLeft:"10px",fontSize:"120%"}}><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>
                        <label for="psw" style={{marginLeft:"10px",fontSize:"120%"}}><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                    </div>
                </form>
                <div className="loginButton">
                    <button type="submit" onClick={()=>navigate('/Home')}>Login</button>
                    <button type="submit" onClick={()=>navigate('/Signup')}>Signup</button>
                </div>
            </div>
        </div>
        </div>
    )
};
export default Login; 