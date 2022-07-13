import React from 'react'
import './Footer.css'

const Footer = () => {
 
    let busroute1=[`Hyderabad to Bangalore Bus `,
    `Hyderabad to Vijayawada Bus`,
    ` Hyderabad to Mumbai Bus `,
    `Vijayawada to Bangalore Bus `,
    `Vijayawada to Hyderabad Bus `]
    let busroute2=[
    `Bangalore to Hyderabad Bus`,
     `Bangalore to Chennai Bus `,
     `Chennai to Bangalore Bus`,
     `Chennai to Madurai Bus`,
      `Chennai to Coimbatore Bus`]
      let busroute3=[
       `Mumbai to Pune Bus`,
       `Mumbai to Hyderabad Bus`,
       `Mumbai to Ahmedabad Bus`,
       `Indore to Bhopal Bus`,
       `Indore to Ahmedabad Bus`]
       let busroute4=[
       `Ahmedabad to Jaipur Bus`,
       `Ahmedabad to Rajkot Bus`,
       `Ahmedabad to Indore Bus`,
       `Udaipur to Jaipur Bus`,
       `Jaipur to Delhi Bus `]
       let busroute5=[
       `Jaipur to Ahmedabad Bus`,
       `Delhi to Lucknow Bus`,
       `Delhi to Gorakhpur Bus `,
       `Delhi to Shimla Bus `,
       `Delhi to Jaipur Bus`]

       let footerinfo=[`Operators`,`Routes`,`About`,`Contact`,`Mobile Version`,`Careers`,`Offers`,`FAQs`,`Terms`,`Privacy`,`Agent Login`]
       
       let moreapps=[`AbhiBus`,`Ixigo`,`ConfirmTkt`]
  return (
    <div className='Footer'>
        <div className='Footerinside'>
        
    <div className='FooterTop'>
        <div className='FooterTop_inside'>
    <div className='FooterTop_top'>
        <button>Top Bus Routes</button>
        <button> Buses from Top Cities</button>
        <button> Top RTC Buses
</button>
        <button>Top Bus Services
</button>
        <button>Quick Links
</button>
    </div>
    </div>
    <div className='FooterTop_btm'>

        <div className='busrouters'>
        {busroute1.map((item)=>{
            return(
                <ul key={Math.random()}>
                   <a  className='FooterTop_btm_ancr' href=''> <li className='FooterTop_btm_tobus'>{item}</li> </a>
                </ul>
            )
        })}
        </div>
        

        <div className='busrouters'>
        {busroute2.map((item)=>{
            return(
                <ul key={Math.random()}>
                   <a  className='FooterTop_btm_ancr' href=''> <li className='FooterTop_btm_tobus'>{item}</li> </a>
                </ul>
            )
        })}
        </div>

        <div className='busrouters'>
        {busroute3.map((item)=>{
            return(
                <ul key={Math.random()}>
                   <a  className='FooterTop_btm_ancr' href=''> <li className='FooterTop_btm_tobus'>{item}</li> </a>
                </ul>
            )
        })}
        </div>

        <div className='busrouters'>
        {busroute4.map((item)=>{
            return(
                <ul key={Math.random()}>
                   <a  className='FooterTop_btm_ancr' href=''> <li className='FooterTop_btm_tobus'>{item}</li> </a>
                </ul>
            )
        })}
        </div>

        <div className='busrouters'>
        {busroute5.map((item)=>{
            return(
                <ul key={Math.random()}>
                   <a  className='FooterTop_btm_ancr' href=''> <li className='FooterTop_btm_tobus'>{item}</li> </a>
                </ul>
            )
        })}
        </div>
       
    </div>

    </div>
    <div className='FooterBwn'>
        <div className='FooterBwn_inside'>
        <div className='FooterInfo_div'>
            {footerinfo.map((item)=>{ return(
                <ul className='FooterInfo_ul' key={Math.random()}>
                <a href={`https://www.abhibus.com/${item}`}>  <li className='footeinfo_li'>{item}</li></a>
                </ul>)
            })}
        </div>
        <div><img src='https://static.abhibus.com/img/bus-booking/pci-dss-logo.png' alt='PCi.img'/></div>
    </div></div>
    <div className='Footerbtm'>

        <div className='Footerbtm_inside'>
        <div> 
            {moreapps.map((app)=>{return(
            <a key={Math.random()} href={`www.${app}.com`}>{app}</a>
                        
            )})}
        </div>
        <div>Copyright @Le Travenues Technology Ltd. All Rights Reserved</div>
       </div>
    
    </div>

    </div></div>
  )
}

export default Footer