import React from 'react'
import { InfoContainer } from '../InfoContainer'
import './Covid.css'
export const Covid = () => {
  return (
    <div className='covid'
    >
        <h2 className='covid_top'>COVID-19 Related Travel Advisory</h2>
   
      <div className='covid_bottom'>
        <div className='covid_bottom_inside'>
            <p>AbhiBus recommends that all passengers follow Covid Safety Guidelines. Maintaining strict safety protocols can ensure that the virus spread is in control. Travellers must make sure to wear double masks, use hand sanitisers and keep their distance from others.</p>
            <p>Look out for our bus services while booking your tickets. These bus services are handpicked and they follow all the safety protocols - regular bus fumigation, availability of hand sanitisers, passenger temperature screening before onboarding, staff that is well educated about the safety protocols.

</p>
            <p>Follow our travel updates to know the up to date travel guidelines in the country. Refer to State-wise COVID-19 Travel Guidelines in India for detailed information.

</p>
            <p>Follow 6 simple steps to protect yourself during bus travel.

</p>

            {/* <InfoContainer img='' p1='Choose Safe-T' p2='Bus Partner'/>
            <InfoContainer img='' p1='Maintain' p2='Safe distance'/>
            <InfoContainer img='' p1='Wear Mask' p2=''/>
            <InfoContainer img='' p1='Carry Sanitizer &' p2=' Disposable gloves'/>
            <InfoContainer img='' p1='Carry own' p2='Blanket'/>
            <InfoContainer img='' p1='Eat hot' p2='cooked Food'/> */}

            <img src='https://static.abhibus.com/img/homepage/covid-precausion.png' alt='saftypng'/>
        </div>

        <div className='covid_bottom_img'>
            <img src='https://static.abhibus.com/img/homepage/home-2.png' alt='home[age3' />
        </div>
      </div>
   
    </div>
  )
}
