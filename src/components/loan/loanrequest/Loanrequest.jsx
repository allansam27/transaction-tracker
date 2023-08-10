import React from "react";
import Navbar from "../../home/Navbar";
import Loanbar from "../Loanbar";
import { useNavigate } from "react-router-dom";
import Form1 from "./loanform/Form1";
function Loanrequest(){
    let navigate= useNavigate();
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
                        <Form1/>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Loanrequest;