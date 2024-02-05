import React from 'react';
import './My.css';
import { Outlet, Link } from "react-router-dom";

const Rinfo = () => {
  return (
    <div className='Rinfo'>
      <div className='billstep'>
        <div className='billenter'> 
            <p className='cta2-text-1'>Rentel Info</p>
            <p className='cta2-text-2'>Please enter your rental date</p>
        </div>
        <div className='cta2-text-3'>
            <p className='Step2of4'>Step 2 of 4</p>
        </div>
      </div>

      <div className='radiobtn'>
        <input type="radio" id="option1" name="radioGroup" />
        <label htmlFor="option1" className='cta3-text-1'>Pick - Up</label>
      </div>

      <div className='dateset'>
        <div className='location'>
            <p className='cta3-text-2'>Locations</p>
            <select id="mySelect" name="mySelect" className='cityinput-1'>
              <option value="" className="placeholder" disabled selected>Select your city</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
          </select>
        </div>
        
        <div className='Rdate'>
            <p className='cta3-text-3'>Date</p>
            <select id="mySelect" name="mySelect" className='dateinput-1'>
              <option value="" className="placeholder" disabled selected>Select your date</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
          </select>  
        </div>
      </div>


      <div className='time'>
            <p className='cta3-text-2'>Time</p>
            <select id="mySelect" name="mySelect" className='timeinput'>
              <option value="" className="placeholder" disabled selected>Select your time</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
          </select>
     </div>

     <div className='radiobtn'>
        <input type="radio" id="option1" name="radioGroup" />
        <label htmlFor="option1" className='cta3-text-1'>Drop - off</label>
      </div>

      <div className='locationdate'>
        <div className='r2date'>
            <p className='cta3-text-2'>Locations</p>
            <select id="mySelect" name="mySelect" className='cityinput-2'>
              <option value="" class="placeholder" disabled selected>Select your city</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
          </select>
        </div>
        <div className='nddate'>
            <p className='cta3-text-3'>Date</p>
            <select id="mySelect" name="mySelect" className='dateinput-2'>
              <option value="" class="placeholder" disabled selected>Select your date</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
          </select>  
        </div>
      </div>


      <div className='time'>
            <p className='cta3-text-2'>Time</p>
            <select id="mySelect" name="mySelect" className='timeinput-332'>
              <option value="" class="placeholder" disabled selected>Select your time</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
          </select>
     </div>
     <div className='infonextbtn'>
        <Link to="/Pay" style={{ textDecoration: 'none' }}><p className='infobtn-1'>Next</p></Link>
      </div>
    </div>
  );
}

export default Rinfo;
