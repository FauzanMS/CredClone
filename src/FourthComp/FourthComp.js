import React from 'react'
import './FourthComp.css';
import brands from './brands.png';
export default function FourthComp() {
    return (
        <div className="FourthComp">
            <p className="FourthHead">rewards from brands you love.</p>
            <img className="brands" alt="Hi" src={brands}/>
        </div>
    )
}
