import React, { useState } from 'react'
import './Header2.css'
// // import FontAwesomeIcon from '@fortawesome/fontawesome-free'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



function Header2() {
  // var focus=false;
  let [focus,setFocus]=useState({
    inpL:false,
    inpG:false
  })

  // if(window.focus){
  //   alert('focussed')
  // }

// if(window.onclick){
//   alert('clicked!')
// }

  let handlefocus=()=>{
    // setFocus(true)
    setFocus({...focus,inpL:true})

  // focus=true;

    console.log('focused',focus)
    // console.log('focused',focus)
  }
  // if (window.onclick()){
  //   setFocus(false)
  // }


  // if(window.oncanplay){
  //   alert('clicked')
  // }

  // let onnoFocus=()=>{
  //   setFocus(false)

  // }

  // if(handle_nofus){
    
  // }

  // let [focus,setFocus]

  let [outfocus,setOutfocus]=useState(false)

  let handle_nofus=()=>{
    // alert('clicked')
    // setOutfocus(true)
    setFocus({...focus,inpL:false})

  }
console.log(focus)
  
let handlefocus_going=()=>{
  setFocus({
    ...focus,inpG:true
  })
}


let handle_nofus_going=()=>{
  setFocus({
    ...focus, inpG:false
  })
}

  return (
    <div  className='header2 header2_1'  >
      <div className='header2_section1'>
      <div className='header2_first'><p>Book Bus Tickets </p></div>
      <div className='header2_two'>
        <button >Bus</button>
        <button >Trains</button>
        <button >Hotels</button>
        <button>Rentals</button>
      </div>


      <div   className='header2_third'>
        <form className='header2_third_from'>
          <div className='form_inside'>
          <img className='form_input_img' src='https://static.abhibus.com/assets/img/pointer-1.png'/>
          
          <input onFocus={handlefocus} onBlur={handle_nofus} required type='text'  className='form_input' />
           {/* {focus ? 
           <span className='form_inside_text_focus'>Leaving from</span> 
           :
           <span className='form_inside_text'>Leaving from</span> 
           } */}
          {/* <span className={(!outfocus && focus) ? `form_inside_text_focus`: `form_inside_text`}>Leaving from</span> */}
          <span className={ focus.inpL ? `form_inside_text_focus`: `form_inside_text`}>Leaving from</span>
          {/* <span {focus ? className=`form_inside_text_focus`: className= `form_inside_text`}>Leaving from</span> */}
         
         </div>

         <div className='form_inside'>
          <img className='form_input_img' src='https://static.abhibus.com/assets/img/pointer-2.png'/>
          
          
          <input onClick={handlefocus_going} onBlur={handle_nofus_going} type='text'  className='form_input' />
          {/* <span className='form_inside_text_focudg'> Going to</span> */}
          {/* <span className={ focus ? `form_inside_text_focus`: `form_inside_text`}>Going to</span> */}
          <span className={ focus.inpG ? 'form_inside_text_focudg':'form_inside_text  form_inside_text2'}> Going to</span>
         
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