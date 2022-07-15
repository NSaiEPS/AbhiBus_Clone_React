import React, { useEffect, useState } from 'react'
import './ChatBox.css'

const ChatBox = () => {

  let [topDis,setTopdis]=useState(false)
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
  return (
    <>
    <div className='ChatBox'>
      <img src='https://www.city.ac.uk/__data/assets/file/0005/552227/red50-talk-solid-circle.svg' className='CHatbox_img' />
    
    
    <div className='ChatBox_info'><small>Abhi Help</small> <br/>
    <small>24/7 Chat Support</small></div>
    

    </div>
   {

     topDis? <button className='scrollTop_btn' onClick={handlescrollbtn}> {`>>`} </button>:null
   }
    </>
  )


}

export default ChatBox