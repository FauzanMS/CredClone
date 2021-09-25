import React from 'react'
import './SixthComp.css';
import fold1 from './fold1.png';
import fold2 from './fold2.png';
import fold3 from './fold3.png';
import fold4 from './fold4.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default function SixthComp() {
    AOS.init({duration:1600});
    return (
        <div className="SixthComp">  
            <div className="SixthDivText">
            <div className="SixthRow">
            <div className="SixthDiv" data-aos="fade-right">
            <p className="SixthHead">we’ve got your back.</p>
            <p className="SixthSubHead">gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.</p>
            </div>
            <img src={fold1} data-aos="fade-left" className="credMob"/>
            </div>
            <div className="SixthRow">
            <div className="SixthDiv" data-aos="fade-right">
            <p className="SixthHead">begin your winning streak.</p>
            <p className="SixthSubHead">use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.</p>
            </div>
            <img src={fold2} data-aos="fade-left" className="credMob"/>
            </div>
            <div className="SixthRow">
            <div className="SixthDiv" data-aos="fade-right">
            <p className="SixthHead">for your eclectic taste.</p>
            <p className="SixthSubHead">get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste.</p>
            </div>
            <img src={fold3} data-aos="fade-left" className="credMob"/>
            </div>
            <div className="SixthRow">
            <div className="SixthDiv" data-aos="fade-right">
            <p className="SixthHead">more cash in your pockets.</p>
            <p className="SixthSubHead">switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period.</p>
            </div>
            <img src={fold4} data-aos="fade-left" className="credMob"/>
            </div>
            </div>
        </div>
    )
}
