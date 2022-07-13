import './App.css';
import Header from './components/Header/Header';
import Header1 from './components/Header/Header1';
// import Header2 from './components/Header/Header2';
import Body from './components/section/Body';
import '../src/components/Header/Header1.css'

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

  return (
    <div className="app">
      <Header1/>
     <Header/>
     <Body/>

    </div>
  );
}

export default App;
