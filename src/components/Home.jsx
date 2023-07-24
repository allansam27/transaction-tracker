import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Home(){ 
    let navigate=useNavigate();   
    return (
        <div className="home">
            <Navbar/>
            <div className="dashboard">
                 
            </div>
             
        </div>
    )
};
export default Home;
