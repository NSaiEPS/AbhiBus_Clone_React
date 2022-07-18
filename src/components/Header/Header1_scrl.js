import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { logining } from '../../ReduxToolkit/Slices';
import './Header1_scrl.css'

function Header1_scrl() {

  let [display,setDisplay]=useState(false)
  let dis;
  let dispatch=useDispatch()

  let handleOpenlogin=()=>{
    dispatch(
      logining()
  
    )
  }
  
  let handlebar=()=>{
    setDisplay(!display)

  }

  console.log(display)

  if (window.innerWidth>1000){
    dis=true;
    // alert('width more than 10000')
    // break;
  }

  // if (dis){}

//   let [small,setSmall]=useState(false)

//   if(window.innerWidth <=500){
//     // alert('less than 500')
//     setSmall(true)
//     // small=true;
//     console.log(small)
//   }


//   if(window.innerWidth >500){
//     setSmall(false)
//     // small=false;
//     console.log(small)

//   }
// console.log(window.innerWidth)



// if( window.screenY===40)

// if(window.scrollY>160)
// {
//   alert('sceolled')
// }

// if (window.onclick){
//   alert('he clicked!')
// }

return (
    <div className={display?'header1_dis' : 'header1_scrl '}>
    {/* <div className={display ? 'header1_dis' :'header1'}> */}
        
        <div className='header1_left'>
            <img className='header1_left_img' src='https://static.abhibus.com/img/abhilogos/logo1.png' alt='abhibus'/>
        </div>
        <div className='header1_right_scl'>
            <button>Bus</button>
            <button>Trains</button>
            <button>Hotals</button>
            <button>Rentals</button>
            <button>Offers</button>
            <button>Get Free Rides</button>
            <button>My Bookings
           <small className='dropdown_small'> <IoMdArrowDropdown/></small> </button>

            
            <button onClick={handleOpenlogin}>Login / Register
           <small className='dropdown_small'> <IoMdArrowDropdown/></small> </button>
        </div>


        {display ?  <div className='header_bar_scl'>
            <button>Bus</button>
            <button>Trains</button>
            <button>Hotel</button>
            <button>Rentals</button>
            <button>Offers</button>
            <button>Get Free Rides</button>
            <button>My Bookings
           <small className='dropdown_small'> <IoMdArrowDropdown/></small> </button>

          
            <button onClick={handleOpenlogin}>Login / Register
           <small className='dropdown_small'> <IoMdArrowDropdown/></small> </button>

        </div> : null}


        <div className='header1_small'   >
        <div className='header_small_inside' onClick={handlebar}>
        <button>__</button>
        <button>__</button>
        <button>__</button>
        </div>
          </div>
        
        </div>
  )
}

export default Header1_scrl