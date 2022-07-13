import React, { useState } from 'react'
import './SectionalNormal.css'

function SectionNormal({myData}) {

  // let p2,p3=[myData.section.section.p2,myData.section.section.p3]

  // console.log(p2,p3)




  console.log(myData)
  return (
    <div className='SectionNormal'>
     
   {
    myData.map((res)=>{
      return(
        <div className='sectionnormal' key={Math.random()}>
          <h2 className='sectionnormal_title'>
{
  res.section.title
}         </h2>

<p className='sectionormal_p1'>

{res.section.section.p1} </p>


{res.section.section.p2?.info!=null || undefined ? (<p className='sectionormal_p2'>{res.section.section.p2?.info}</p>) :`` }


<p className='sectionormal_p2'>  {
  res.section.section.p2?.info!=null || undefined ? res.section.section.p2?.arry?.map((res)=>{
    return(
      <ul key={Math.random()}>
        <li>{res}</li>
      </ul>
    )
  })
  : res.section.section.p2}

</p>



<p className='sectionormal_p3'>{res.section.section.p3?.info!=null || undefined ?res.section.section.p3?.info:`` }</p>

<p className='sectionormal_p3'>  {
  res.section.section.p3?.info!=null || undefined ?  res.section.section.p3?.arry?.map((res)=>{
    return(
      <ul key={Math.random()}>
        <li>{res}</li>
      </ul>
    )
  })
  : res.section.section.p3}


</p>

        </div>
      )
    })
   }


    </div>
  )
}

export default SectionNormal