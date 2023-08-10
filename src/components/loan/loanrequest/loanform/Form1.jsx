import React from "react";
import Loanrequest from "../Loanrequest";
import { useNavigate } from "react-router-dom";
function Form1(){
    let navigate=useNavigate();
    return (
        <>
            <div className="formLoan">
                <div className="form1">
                    <p>LOAN AMOUNT</p>
                    <input type="text" id="amount" placeholder="Enter amount for loan"/>
                    <p>TENURE</p>
                    <input type="number" min="0" max="30" id="tenure" placeholder="Enter tenure for loan"/>
                </div>
                <div className="loanButton">
                    <p onClick={()=>navigate('/form2')}><i class="fa-solid fa-arrow-right"></i></p>
                </div>
            </div>
        </>
    )
}
export default Form1;