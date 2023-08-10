import React from "react";
import Navbar from "../../../home/Navbar";
import Loanbar from "../../Loanbar";
import { useNavigate } from "react-router-dom";
import Loanrequest from "../Loanrequest";
function Form2(){
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
                            <div className="form2">
                                <p >PHONE NUMBER</p>
                                <input type="number" id="phnum" placeholder="Enter Phone number linked with aadhar"/>
                                <p>EMAIL ADDRESS</p>
                                <input type="email" id="emailid" placeholder="Enter your personal email ID"/>
                                <p>PAN NUMBER</p>
                                <input type="number" id="pannum" placeholder="Enter your PAN number"/>
                            </div>
                            <div className="loanButton">
                                <p onClick={()=>navigate('/loanrequest')} style={{marginRight:"30px"}}><i class="fa-solid fa-arrow-left"></i></p>
                                <p onClick={()=>navigate('/form3')}><i class="fa-solid fa-arrow-right"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Form2;