import React from 'react';
import './My.css';
import { Outlet, Link } from "react-router-dom";

const Pay = () => {
  return (
    <div className='payment'>
      <div className='billstep'>
        <div className='billenter'> 
            <p className='cta2-text-1'>Payment Method</p>
            <p className='cta2-text-2'>Please enter your payment method</p>
        </div>
        <div className='cta2-text-3'>
            <p className='step3'>Step 3 of 4</p>
        </div>
      </div>

      <div className='innercont'>
      <div className='cardvisa'>
            <div className='radiobtn-2'>
                  <input type="radio" id="option1" name="radioGroup" />
                  <label htmlFor="option1" className='cta3-text-1'>Credit Card</label>
            </div>
            <div className='visa'>
                <img src="./images/Visa.png" alt="" className='visaimg'/>
            </div>
        </div>

        <div className='card-date'>
        <div className='card-01'>
            <p className='cta2-text-4'>Card Number</p>
            <input type="text" placeholder='Card number' className='card-input-1'/>
        </div>
        <div className='date-01'>
            <p className='cta2-text-5'>Expration Date</p>
            <input type="text" placeholder='DD / MM / YY' className='date-input-2'/>
        </div>
      </div>

      <div className='card-date'>
        <div className='holder-01'>
            <p className='cta2-text-4'>Card holder</p>
            <input type="text" placeholder='Card holder' className='holder-input-1'/>
        </div>
        <div className='CVC-01'>
            <p className='cta2-text-5'>CVC</p>
            <input type="text" placeholder='CVC' className='cvc-input-2'/>
        </div>
      </div>
      </div>

      <div className='paypal-cont'>
      <div className='paypal'>
            <div className='radiobtn-2'>
                  <input type="radio" id="option1" name="radioGroup" />
                  <label htmlFor="option1" className='cta3-text-1'>PayPal</label>
            </div>
            <div className='visa'>
                <img src="./images/PayPal.png" alt="" className='paypalimg'/>
            </div>
        </div>
      </div>

      <div className='paypal-cont'>
      <div className='paypal'>
            <div className='radiobtn-2'>
                  <input type="radio" id="option1" name="radioGroup" />
                  <label htmlFor="option1" className='cta3-text-1'>Bitcoin</label>
            </div>
            <div className='visa'>
                <img src="./images/Bitcoin.png" alt="" className='bitcoinimg'/>
            </div>
        </div>
      </div>

      <div className='paynextbtn'>
        <Link to="/Conf" style={{ textDecoration: 'none' }}><p className='paybtn-1'>Next</p></Link>
      </div>
    </div>
  );
}

export default Pay;
