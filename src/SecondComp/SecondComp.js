import React from 'react'
import center from './center.png';
import right1 from './right-1.png';
import right2 from './right-2.png';
import left1 from './left-1.png';
import left2 from './left-2.png';
import './SecondComp.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function SecondComp() {
    AOS.init({duration:1200});
    return (
        <div>
            <div className="FirstAnimator">
                <img className="credMobile" alt="Hi" data-aos="flip-right" src={left1}/>
                <img className="credMobile" alt="Hi" data-aos="flip-left" src={left2}/>
                <img className="credMobile" alt="Hi" data-aos="flip-right" src={center}/>
                <img className="credMobile" alt="Hi" data-aos="flip-left" src={right1}/>
                <img className="credMobile" alt="Hi" data-aos="flip-left" src={right2}/>
            </div>
        </div>
    )
}
