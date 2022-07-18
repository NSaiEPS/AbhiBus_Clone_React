import React, { useEffect, useState } from 'react'
import './ChatBox.css'
import {ImCancelCircle} from 'react-icons/im'

const ChatBox = () => {
  // let datedata=new Date()
  // let date=`${datedata.getMonth()}`
  // console.log(date)
  // let [[d1],[d2],[d3],[d4]]=Date()
  // console.log(d1,d2,d3,d4)
  

  let [topDis,setTopdis]=useState(false)
  let [openchat, setOpenChat]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
     
      if(window.scrollY>250){
        setTopdis(true)
      }

      else setTopdis(false)
    })
  })

  let handlescrollbtn=()=>{

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }

  let handlechatcancl=()=>{
    setOpenChat(false)
  }

  let handleOpenChat=()=>{
    setOpenChat(true)

  }
let datedata=Date()
let date=[];
  // console.log(datedata)
// for(let i=0;i<datedata.l)
let dateval=datedata.split(' ')
console.log(datedata,dateval)

  return (
    <>
    <div className='ChatBox position'>
      <img src='https://www.city.ac.uk/__data/assets/file/0005/552227/red50-talk-solid-circle.svg' className='CHatbox_img'
      onClick={handleOpenChat} />
    
    
    <div className='ChatBox_info'><small>Abhi Help</small> <br/>
    <small>24/7 Chat Support</small></div>
    
    </div>
   {

     topDis? <button className='scrollTop_btn' onClick={handlescrollbtn}> {`>>`} </button>:null
   }


   {openchat? <div className='ChatSupport'>
    <div className='ChatSupport_top'>
      <h1> ABhi Help - 24x7 Chat Support </h1> 
     <h1><ImCancelCircle onClick={handlechatcancl} /></h1>  </div>
    <div className='ChatSupport_bottom'>
      <div>Good Morning<br/>This is Abhi, your chatbot assistant.<br/><br/>We request you always check the travel guidelines related to COVID before traveling issued by the concerned state governments or local authorities.</div>
      <div>I need to verify the passenger mobile number to get the booking details.
</div>
      <div>Please enter the passenger mobile number to receive an OTP for verification.
</div>

      {/* style="background-image: url(https://cdn.verloop.io/abhibus/9d91aab7-6158-452d-9391-b46b0699d7cc/jnseM3eDu7jzfHCfF/abhibus-icon-png);" */}
   
   
      <div  className='chat_box_quires'>
      <input placeholder='write your quires here ....'/>
    </div>
    </div>


 
   </div>
   :null}


  {openchat? <span className='Chat_date' >{`${dateval[1]},${dateval[2]},${dateval[3]}`}</span>


:null}

{openchat? <span className='Chat_inside_img'>
  <img  src='https://cdn.verloop.io/abhibus/9d91aab7-6158-452d-9391-b46b0699d7cc/jnseM3eDu7jzfHCfF/abhibus-icon-png'/>
</span>:null}
    </>
  )


}

export default ChatBox