import React from 'react';
import './My.css';


const Conf = () => {
  return (
    <div className='Confrentel'> 
      <div className='confstep'>
        <div className='billenter'> 
            <p className='cta2-text-1'>Confirmation</p>
            <p className='cta2-text-2'>We are getting to the end.Just few clicks and your rentel is ready!</p>
        </div>
        <div className='cta2-text-3'>
            <p className='step4of4'>Step 4 of 4</p>
        </div>
      </div>

      <div className='checkboxes'>
        <div className='checkbox-1'>
            <input type="checkbox" id='c1' name='check-1' className='checkinput-1'/>
            <label htmlFor="check-1" className='check-text-1'>I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
        </div>
        <div className='checkbox-2'>
            <input type="checkbox" id='c1' name='check-1' className='checkinput-2'/>
            <label htmlFor="check-1" className='check-text-2'>I agree with our terms and conditions and privacy policy.</label>
        </div>
      </div>

      <div className='rentbtn1'>
        <p className='sss'>Rent Now</p>
      </div>

      <div className='layerimg'> 
        <img src="./images/Layer.png" alt="sd"/>
      </div>

      <div className='allwe'>
        <p className='cta4-text-1'>All your data are safe</p>
        <p className='cta4-text-2'>We are using the most advanced security to provide you the best experience ever.</p>
      </div>
    </div>
  );
}

export default Conf;
