import React  from 'react';

import '../utils/css/CardSection3.css';
import { Link } from 'react-router-dom';

const CardSection3 = () => {
    
  
    return (
        <div className='card-section-container'>
          <div className='card-image-section-container'>
            <div className='card-internal'>
              <img  src="https://honeywell.scene7.com/is/image/honeywell/Healthy-Building-Occupant-Survery-Landing-Page_2880x1440_0222_V2_Option01" alt='team working in office' className='card-image'></img>
              <p className='case-study-title'>Case Study</p>
              <p className='case-study-title2'>Creating a safer workplace during a pandemic</p>
              <p className='case-study-info'>Our R&D facility in Bangalore had to continue critical work. So we incorporated touchless technology, monitoring and compliance solutions. Result? Audit to healthy building in 60 days. </p>
              <p><Link to='#' className='case-study-links1'>SHARE </Link><Link to='#' className='case-study-links2'>LEARN MORE</Link></p>
            </div>

            <div className='card-internal' >
            <img  src="https://honeywell.scene7.com/is/image/honeywell/Healthy-Building-Occupant-Survery-Landing-Page_2880x1440_0222_V2_Option01" alt='Honeywell sign on construction object' className='card-image'></img>
            <p className='case-study-title'>Case Study</p>
            <p className='case-study-title2'>Creating a safer workplace during a pandemic</p>
            <p className='case-study-info'>Our R&D facility in Bangalore had to continue critical work. So we incorporated touchless technology, monitoring and compliance solutions. Result? Audit to healthy building in 60 days. </p>
            <p><Link to='#' className='case-study-links1'>SHARE </Link><Link to='#' className='case-study-links2'>LEARN MORE</Link></p>
            </div>

            <div className='card-internal'>
            <img  src="https://honeywell.scene7.com/is/image/honeywell/Healthy-Building-Occupant-Survery-Landing-Page_2880x1440_0222_V2_Option01" alt='classroom' className='card-image'></img>
            <p className='case-study-title'>Case Study</p>
            <p className='case-study-title2'>Creating a safer workplace during a pandemic</p>
            <p className='case-study-info'>Our R&D facility in Bangalore had to continue critical work. So we incorporated touchless technology, monitoring and compliance solutions. Result? Audit to healthy building in 60 days. </p>
            <p><Link to='#' className='case-study-links1'>SHARE </Link><Link to='#' className='case-study-links2'>LEARN MORE</Link></p>
            </div>

          </div>
        </div>
    );
  }
  
  export default CardSection3;