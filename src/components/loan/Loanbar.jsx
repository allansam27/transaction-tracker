import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
function Loanbar(){
    const [request,setRequest] = useState(true);
    const [page,setPage] = useState('REQUEST');//REQUEST | LISTING | LEND | ACTIVE | HISTORY
    let navigate=useNavigate();
    return (
            <div className="loanBar">
                <p onClick={()=>navigate('/loanrequest')} style={{marginRight:"10px",marginLeft:"10px",backgroundColor:''+(page==='REQUEST'?'black':''),color:''+(page==='REQUEST'?'white':'black')}}>Loan Request</p>
                <p onClick={()=>navigate('/lendform1')} style={{marginRight:"10px",marginLeft:"10px",backgroundColor:''+(page==='REQUEST'?'black':''),color:''+(page==='REQUEST'?'white':'black')}}>Lend Loan</p>
                <p onClick={()=>navigate('/List')} style={{marginRight:"10px",marginLeft:"10px",backgroundColor:''+(page==='REQUEST'?'black':''),color:''+(page==='REQUEST'?'white':'black')}}>Loan listings</p>
                <p onClick={()=>navigate('/activeloans')} style={{marginRight:"10px",marginLeft:"10px",backgroundColor:''+(page==='REQUEST'?'black':''),color:''+(page==='REQUEST'?'white':'black')}}>Active Loans</p>
                <p onClick={()=>navigate('history')} style={{marginRight:"10px",marginLeft:"10px",backgroundColor:''+(page==='REQUEST'?'black':''),color:''+(page==='REQUEST'?'white':'black')}}>History</p>
            </div>
    )
};
export default Loanbar;
