import './App.css';
import Header from './components/Header/Header';
import Header1 from './components/Header/Header1';
// import Header2 from './components/Header/Header2';
import Body from './components/section/Body';
import '../src/components/Header/Header1.css'
import { useEffect, useState } from 'react';
import Header1_scrl from './components/Header/Header1_scrl';

function App() {

  // let ar=[2,4,6,8]
  // let v=1;
  // let va=0;
  //  for (let i=1;i<ar.length;i++){
  //   v=v*ar[i];
  //   va+=v;
  //  console.log(va)

  // let ar=[2,4,6,8]
  // let v=1;

  // function product(ar){
  //   if (ar.lenght ===1){
  //     return ar;

  //   }
  //   return ar.pop() * product(ar )
  // }

  // console.log(product(ar))


  //  }
  //  console.log(va)


//   let val=160;
//   let srcollv=false;

// if(window.scrollY >=160 && window.screenY<163){
//   setscrool(true)

//   srcollv=true;
//   // alert('scroll!')x
// }

// if(srcollv) {

//   setscrool(true)

// }


// // console.log(scroll)
// console.log(scroll)




//  useEffect(()=>{
    



//     if(window.screenY===500){
//       setscrool(true)
//     }
//  },window.scrollbars)
let [scroll, setscrool]=useState(false)

// useEffect(()=>{
//   window.addEventListener('scroll',scling)


// })

window.addEventListener('scroll',scling)
  

function scling(){
  if(window.scrollY>230){
    setscrool(true)
  }
  else setscrool(false)
}

return (
    <div className="app">
      
      
      {scroll ? <Header1_scrl/>:null}
      {/* <Header1/> */}
     <Header/>
     <Body/>
     {/* <input placeholder='Write some thing' className='placeholder_check'/> */}

    </div>
  );
}

export default App;
