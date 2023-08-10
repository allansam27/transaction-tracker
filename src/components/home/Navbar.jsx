import React from "react";
import { useNavigate } from "react-router-dom";
function myFunction() {
    document.getElementById("demo").style.color = "red";
  }
function Navbar(){
    let navigate = useNavigate();
    return(
        <div className="navBar">
            <div className="logo">
                <br></br> 
                <p>Penny</p>
                <p>Pincher</p>
            </div>
            <div className="navButtons">
                <br></br>
                <br></br>
                <p onClick={()=>navigate('/home')}><i class="fa-solid fa-house"></i> Home</p>
                <p onClick={()=>navigate('../loanrequest')}><i class="fa-solid fa-landmark"></i> Loan</p>
                <p><i class="fa-solid fa-circle-up"></i> Payable</p>
                <p><i class="fa-solid fa-circle-down"></i> Recievable</p>
                <p><i class="fa-solid fa-credit-card"></i> Payment</p>
                <p><i class="fa-solid fa-user"></i> Account</p>
            </div>
            <div className="settings">
                <p><i className="fa-solid fa-gear"></i>     Settings</p>
                <p onClick={()=>navigate('/login')}><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</p>
            </div>
        </div>
    )
};
export default Navbar;