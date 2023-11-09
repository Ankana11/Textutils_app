import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
// import About from './component/About';

function App() {
  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#0D1072";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" about="About Us" mode={mode} togglemode={togglemode} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform heading="Enter the Text to Analyze" mode={mode} />} />
          </Routes> */}
          <Textform heading="Enter the Text to Analyze" mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
