import React from 'react';
import './Footer.css'
export default function Footer(){
   return (
    <div className='footerContainer'>
        <p className='footerCinemap'>CineMap</p>
        <div className='footerinfo'>
            <div className='footerVisitPA'>
                <p className='footerVisit'>Visit: </p>
                <a href="https://github.com/FedericoCalderon/CineMap">GitHub Proyect</a>
            </div>
            <p className='footerCredits'>This website was developed by Federico Calderón</p>
        </div>
    </div>       
   )
}

