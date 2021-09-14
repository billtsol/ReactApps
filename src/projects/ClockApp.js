import './../css/ClockApp.css';
import clock_img from './../img/clock.svg'
import React, { useEffect } from 'react';

const ClockApp = () => {
      useEffect(() => {
        const interval = setInterval(() => {
            const d = new Date();
            const h = d.getHours()-12;
            const m =  d.getMinutes();
            const s = d.getSeconds();
            
            const secondsD = s *6;
            document.querySelector('#clock-seconds').style.transform = `rotate(${secondsD}deg)`;
            const minutesD= m*6;
            document.querySelector('#clock-minutes').style.transform = `rotate(${minutesD}deg)`;
            const hoursD = h*30 + m/2;
            document.querySelector('#clock-hours').style.transform = `rotate(${hoursD}deg)`;

        }, 1000);
        return () => clearInterval(interval);
      }, []);
    return (<>
        
            <div id='Clock-body'>
            <a href="." class="btn btn-info Mybtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                Back
            </a>
                <div className="analog-clock">
                    <div id='clock-hours' className="clock-index clock-hour"></div>
                    <div id='clock-minutes' className="clock-index clock-min"></div>
                    <div id='clock-seconds' className="clock-index clock-sec"></div>
                    <div className="clock-mid"></div>
                    <img src={clock_img} alt="" className="clock" />
                </div>
            </div>
       </>)
}

export default ClockApp