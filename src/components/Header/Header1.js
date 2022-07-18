import React, { useState } from 'react'
import './Header1.css'
import {IoMdArrowDropdown} from 'react-icons/io'
import {useDispatch, useSelector} from 'react-redux'
import { LoginSlice, selectlogin ,nologing, logining} from '../../ReduxToolkit/Slices'
import { ImCancelCircle } from 'react-icons/im'


function Header1() {

  let selectlog=useSelector(selectlogin)
   let dispatch=useDispatch()
  let [display,setDisplay]=useState(false)
  // let dis;

  let handlebar=()=>{
    setDisplay(!display)

  }

  console.log(display)

  // if (window.innerWidth>1000){
  //   dis=true;
  //   // alert('width more than 10000')
  //   // break;
  // }

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

if (window.onclick){
  alert('he clicked!')
}


let handlecnllog=()=>{
  dispatch(
    nologing()
  )

}

let handleOpenlogin=()=>{
  dispatch(
    logining()

  )
}


return ( <>
    <div className={display?'header1_dis' : 'header1 '}>
    {/* <div className={display ? 'header1_dis' :'header1'}> */}
        
        <div className='header1_left'>
            <img className='header1_left_img' src='https://static.abhibus.com/img/abhilogos/logo1.png' alt='abhibus'/>
        </div>
        <div className='header1_right'>
            <button>Offers</button>
            <button>Get Free Rides</button>
            <button>My Bookings
           <small> <IoMdArrowDropdown/></small>

            </button>
            <button onClick={handleOpenlogin}>Login / Register
           <small> <IoMdArrowDropdown/></small>

              {/* <IoMdArrowDropdown/> */}
            </button>
        </div>
        {/* <LoginSlice */}


        {display ?  <div className='header_bar'>
            <button>Offers</button>
            <button>Get Free Rides</button>
            <button>My Bookings
           <small className='dropdown_small'> <IoMdArrowDropdown/></small> </button>

            
            <button onClick={handleOpenlogin}>Login / Register
           <small className='dropdown_small'> <IoMdArrowDropdown/></small> </button>
            
        </div> : null}


        <div className='header1_small'   >
        <button onClick={handlebar}>
        __<br/>
        __<br/>
          __<br/>
        </button>
          </div>
        
        </div> 
        
      { selectlog? <div className='Header1_loging'>
        <div className='Header1_loging_inside'>
          <div className='Header1_loging_top'>
            <span>Login/Signup with OTP
</span>
<span><ImCancelCircle onClick={handlecnllog}/></span>
          </div>
          <div className='Header1_loging_bottom'>
            <div>
              <img src='https://static.abhibus.com/img/icons/left-img.png'/>
            </div>
            <div className='Header1_loging_bottom_right'>
              <input placeholder='Enter your mobile number' />
              <br/>
              <input type='checkbox' /> Get First Ride Free <br/>
              <button className='Header1_log_btn1'>Login/Signup with OTP</button> <br/>
              <span>  or login with</span> <br/>


              <button className='Header1_log_btn2'>
                
                Google</button>
            </div>
          </div>
        </div></div>: null}
        </>
  )
}

export default Header1