import React from "react";
import './Gradient.css'
import backgroundImage from '../images/GradientBg.png'
import Gallery from "./Gallery";


export default function Gradient() { 
    return(
        <>
            <div className="Content-background">
                <img alt="background" src={backgroundImage} className="background--image"/>    
                <div className="container">
                    <div className="main--info">
                        <Gallery/>
                    </div>
                </div>
            </div>
            
        </>
        
    )
};
