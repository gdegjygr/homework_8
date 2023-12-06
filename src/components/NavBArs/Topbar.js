import React from "react";
import './TopBar.css'
import prev from '../images/Prev-arrow.png'
import next from '../images/Next-arrow.png'


export default function TopBar() {
    
    return(
        <div className="TopBarBlock">
            <div className="ellipse-animation">
                <ellipse className="red"></ellipse>
                <ellipse className="yellow"></ellipse>
                <ellipse className="green"></ellipse>
            </div>
            <h1>Steam</h1>
            <div className="BottomBar">
                <div className="arrow--container">
                    <img alt="arrow" src={prev}/>
                    <img alt="arrow" src={next}/>
                </div>
                <li className="leftindentation">STORE</li>
                <li>LIBRARY</li>
                <li>COMMUNITY</li>
                <li>USER NAME</li>
            </div>  
        </div>
    )
};



