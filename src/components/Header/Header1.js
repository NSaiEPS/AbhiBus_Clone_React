import React, { useState } from 'react'
import './Header1.css'

function Header1() {

  let [display,setDisplay]=useState(false)
  let dis;

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

if (window.onclick){
  alert('he clicked!')
}

return (
    <div className={display?'header1_dis' : 'header1 '}>
    {/* <div className={display ? 'header1_dis' :'header1'}> */}
        
        <div className='header1_left'>
            <img className='header1_left_img' src='https://static.abhibus.com/img/abhilogos/logo1.png' alt='abhibus'/>
        </div>
        <div className='header1_right'>
            <button>Offers</button>
            <button>Get Free Rides</button>
            <button>My Bookings</button>
            <button>Login / Register</button>
        </div>


        {display ?  <div className='header_bar'>
            <button>Offers</button>
            <button>Get Free Rides</button>
            <button>My Bookings</button>
            <button>Login / Register</button>
        </div> : null}


        <div className='header1_small'   >
        <button onClick={handlebar}>
        _<br/>
        _<br/>
          _<br/>
        </button>
          </div>
        
        </div>
  )
}

export default Header1