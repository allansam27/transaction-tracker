import React from "react";
import Navbar from "../home/Navbar";
import Loanbar from "./Loanbar";
function Loan(){
    return (    
        <div className="home">
            <Navbar/>
            <div className="loan">
                <Loanbar/>
            </div>
        </div>
    )
}
export default Loan;