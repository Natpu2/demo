import React from 'react';
import './My.css';
import { Outlet, Link } from "react-router-dom";


const Bill = () => {
  return (
    <div className='billsection'>
      <div className='billstep'>
        <div className='billenter'> 
            <p className='cta2-text-1'>Billing Info</p>
            <p className='cta2-text-2'>Please enter your billing info</p>
        </div>
        <div className='cta2-text-3'>
            <p className='step'>Step 1 of 4</p>
        </div>
      </div>


      <div className='namenum'>
        <div className='name'>
            <p className='cta2-text-4'>Name</p>
            <input type="text" placeholder='Your name' className='input-1'/>
        </div>
        <div className='num'>
            <p className='cta2-text-5'>Phone Number</p>
            <input type="text" placeholder='Phone number' className='input-2'/>
        </div>
      </div>


      <div className='addresstown'>
        <div className='adress'>
            <p className='cta2-text-6'>Address</p>
            <input type="text" placeholder='Address' className='input-3'/>
        </div>
        <div className='town'>
            <p className='cta2-text-7'>Town / City</p>
            <input type="text" placeholder='Town or city' className='input-4'/>
        </div>
      </div>

      <div className='btns'>
      <div className='prevbtn'>
        <p className='btn-1'>Back</p>
      </div>
      <div className='nextbtn'>
        <Link to="/Rinfo" style={{ textDecoration: 'none' }}><p className='btn-1'>Next</p></Link>
      </div>
      </div>
    </div>
  );
}

export default Bill;
