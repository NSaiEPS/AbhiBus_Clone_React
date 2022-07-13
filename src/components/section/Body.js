import React from 'react'
import { AppInstall } from './AppInstall/AppInstall'
import { Covid } from './Covid/Covid'
import Info from './Info/Info'
import Middle from './Middle/Middle'
import Offers from './Offers/Offers'
import { Questions } from './Questions/Questions'
import SRTC from './SRTC/SRTC'
import {SocialInfo} from './SocialInfo'
import Footer from './Footer/Footer'
import ChatBox from './ChatBox/ChatBox'

function Body() {
  return (
    <div>
        <Offers/>
        <SRTC/>
        <Info/>
        <Middle/>
        <Covid/>
        <Questions/>
        <AppInstall/>
        <SocialInfo/>
        <Footer/>
        <ChatBox/>
    </div>
  )
}

export default Body