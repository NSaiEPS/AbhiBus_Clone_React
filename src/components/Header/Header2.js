import React from 'react'
import './Header2.css'
// // import FontAwesomeIcon from '@fortawesome/fontawesome-free'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



function Header2() {

  
  return (
    <div className='header2'>
      <div className='header2_section1'>
      <div className='header2_first'><p>Book Bus Tickets </p></div>
      <div className='header2_two'>
        <button >Bus</button>
        <button >Trains</button>
        <button >Hotels</button>
        <button>Rentals</button>
      </div>


      <div className='header2_third'>
        <form className='header2_third_from'>
          <div className='form_inside'>
          <img className='form_input_img' src='https://static.abhibus.com/assets/img/pointer-1.png'/>
          
          
          <input required type='text' placeholder='Leaving from' className='form_input' />
         
         </div>

         <div className='form_inside'>
          <img className='form_input_img' src='https://static.abhibus.com/assets/img/pointer-2.png'/>
          
          
          <input resource='' type='text' placeholder='Going to' className='form_input' />
         
         </div>

         <div className='form_inside'>
          <img className='form_input_img' src='https://static.abhibus.com/assets/img/date.png'/>
          
          
          <input  required type='date' placeholder='Date of journey' className='form_input' />
         
         </div>

         <div className='form_inside'>
          <img className='form_input_img' src='https://static.abhibus.com/assets/img/date.png'/>
          
          
          <input  type='date' placeholder='Date of Return (Optional)' className='form_input' />
         
         </div>

         
         

         
          {/* <input type='text' placeholder='Going to'/>
          <input type='date' placeholder='Date of journey' />
          <input type='date' placeholder='Date of Return (Optional)'/>
         */}
          <button className='form_btn'>Search</button> 
        </form>
      </div>

      </div>
    </div>
  )
}

export default Header2