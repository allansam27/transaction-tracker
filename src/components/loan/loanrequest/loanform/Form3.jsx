import React from "react";
import Navbar from "../../../home/Navbar";
import Loanbar from "../../Loanbar";
import { useNavigate } from "react-router-dom";
import Loanrequest from "../Loanrequest";
import VerifyOtp from "../../../login/verifyOtp";
import Otp from "../../../Otp";
function Form3(){
    let navigate=useNavigate();
    return (
        <div className="home">
            <Navbar/>
            <div className="loan">
                <Loanbar/>
                <div className="loanRequest">
                    <div className="requestForm">
                        <div className="imageCon">
                            <img src="money2.avif"/>
                        </div>
                        <div className="formLoan">
                            <Otp/>
                            <div className="loanButton">
                                <p onClick={()=>navigate('/form2')} style={{marginRight:"30px"}}><i class="fa-solid fa-arrow-left"></i></p>
                                <p onClick={()=>navigate('/form3')}><i class="fa-solid fa-arrow-right"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Form3;