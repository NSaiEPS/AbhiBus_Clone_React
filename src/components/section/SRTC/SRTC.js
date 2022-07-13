import React from 'react'
import './SRTC.css'
import SRTC_bottom from './SRTC_bottom'
import SRTC_Top from './SRTC_Top'
function SRTC() {
  return (
    <div className='SRTC'>
        <SRTC_Top/>
        <SRTC_bottom/>
    </div>
  )
}

export default SRTC