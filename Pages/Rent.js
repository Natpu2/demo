import React from 'react';
import './My.css';
import { Outlet, Link } from "react-router-dom";

const Rent = () => {
  return (
    <div className='container-1'>
      <div className='textpara'>
        <h1 className='cta-text-1'>Rental Summary</h1>
        <p className='cta-para-1'>Prices may change depending on the length of the rental and the price of your rental car.</p>
      </div>

      <div className='logotext'>
        <img src='./images/Look.png' alt="dfs" className='gtr'/>
        <div className='textstar'>
        <h1 className='cta-text-2'>Nissan GT - R</h1>
        <span className='startxt'>
            <img src="./images/ReviewStar.png" alt="ds" className='starimg'/>
            <h1 className='cta-tect-3'>440+ Reviewer</h1>
        </span>
        </div>
      </div>

      <div className='line'></div>

      <div className='totaltax'>
        <div className='subtotal'>
            <p className='text-4'>Subtotal</p>
            <p className='text-5'>$80.00</p>
        </div>
        <div className='tax'>
            <p className='text-6'>Tax</p>
            <p className='text-7'>0</p>
        </div>
      </div>

      <div className='promoapply'>
        <p className='promo'>Apply promo code</p>
        <Link to='/Bill' style={{ textDecoration: 'none' }}><p className='apply'>Apply now</p></Link>
      </div>
      
      <div className='rentel-price'>
        <div className='rentel'>
            <p className='renteltext'>Total Rental Price</p>
            <p className='overall'>Overall price and includes rental discount</p>
        </div>
        <div className='price'>
            <p className='pricetext'>$80.00</p>
        </div>
      </div>
    </div>
  );
}

export default Rent;
