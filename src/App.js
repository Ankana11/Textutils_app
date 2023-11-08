import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
function App() {
  const [mode, setMode] = useState('light');

  const togglemode =()=>{
    if(mode==="light"){
    setMode('dark');
    document.body.style.backgroundColor ="gray"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ="white"
      }
   
  }
  return (
  
  <>
 

<Navbar title="TextUtils" about="About Us" mode={mode} togglemode= {togglemode}/>
<div className="container my-3">
<Textform  heading="Enter the Text to Analyze"  mode={mode} /> 

</div>


  </>

  );
}

export default App;
