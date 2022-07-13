import React from 'react'
import './Offertop.css'

function Offertop() {
  return (
    <div className='offertop'> 
    <div>AbhiBus Offers</div>
    <div className='offertop_btns'>
        <button >All Offers</button>
        <button className='offertop_busofer'> Bus Offers</button>
        <button>View All</button>
        <button className='offertop_more'> {`< >`}</button>
    </div>


    </div>
  )
}

export default Offertop