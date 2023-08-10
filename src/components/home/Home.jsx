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
                 <div className="hometopbar">
                    <div className="homeusername">
                        <p style={{margin:"0px",marginLeft:"20px"}}>Hi! Name</p>
                    </div>
                    <div className="homeuser">
                        <div className="userhome">
                            <button type="submit"><i class="fa-solid fa-user"></i></button>
                        </div>
                    </div>

                 </div>
                 <div>

                 </div>
            </div>
             
        </div>
    )
};
export default Home;
