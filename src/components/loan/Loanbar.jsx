import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
function Loanbar(){
    const [request,setRequest] = useState(true);
    const [page,setPage] = useState('REQUEST');//REQUEST | LISTING | LEND | ACTIVE | HISTORY
    let navigate=useNavigate();
    return (
            <div className="loanBar">
                <p onClick={()=>navigate('/loanrequest')} style={{marginRight:"10px",marginLeft:"10px",backgroundColor:''+(page==='REQUEST'?'black':''),color:''+(page==='REQUEST'?'white':'black')}}>Loan Request</p>
                <p style={{marginRight:"10px"}}>Lend Loan</p>
                <p style={{marginRight:"10px"}}>Loan listings</p>
                <p style={{marginRight:"10px"}}>Active Loans</p>
                <p style={{marginRight:"10px"}}>History</p>
            </div>
    )
};
export default Loanbar;
