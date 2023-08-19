import React from "react";
import Navbar from "../../home/Navbar";
import Loanbar from "../Loanbar";
function List(){
    return(
        <div className="home">
        <Navbar/>
        <div className="loan">
            <Loanbar/>
            <div className="loanRequest">
                <div className="requestForm">
                    <div><h1 style={{color:"white",textAlign:"center"}}>List</h1></div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default List;
