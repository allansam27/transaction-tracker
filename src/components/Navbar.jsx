import React from "react";
import { useNavigate } from "react-router-dom";
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
                <p>Transactions</p>
                <p>Payable</p>
                <p>Recievable</p>
                <p>Payment</p>
                <p><i class="fa-solid fa-user"></i> Account</p>
            </div>
            <div className="settings">
                <p><i className="fa-solid fa-gear"></i>     Settings</p>
                <p onClick={()=>navigate('../login')}><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</p>
            </div>
        </div>
    )
};
export default Navbar;