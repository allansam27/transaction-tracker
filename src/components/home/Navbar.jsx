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
                <p>Penny Pincher</p>
            </div>
            <div className="navButtons">
                <p onClick={()=>navigate('/home')}><i class="fa-solid fa-house navicons"></i> Home</p>
                <p onClick={()=>navigate('../loanrequest')}><i class="fa-solid fa-landmark navicons"></i> Loan</p>
                <p><i class="fa-solid fa-circle-up navicons"></i> Payable</p>
                <p><i class="fa-solid fa-circle-down navicons"></i> Recievable</p>
                <p><i class="fa-solid fa-credit-card navicons"></i> Payment</p>
                <p><i class="fa-solid fa-user navicons"></i> Account</p>
            </div>
            <div className="settings">
                <p><i className="fa-solid fa-gear navicons"></i> Settings</p>
                <p onClick={()=>navigate('/login')}><i class="fa-solid fa-arrow-right-from-bracket navicons"></i> Logout</p>
            </div>
        </div>
    )
};
export default Navbar;