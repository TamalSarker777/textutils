// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'
import React, {useState} from 'react'
import Alert from './components/Alert';

// import {BrowserRouter, Routes, Route} from 'react-router-dom'



// import About from './components/About';

// let name='Tamal';
function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
        setAlert(
          {
            msg : message,
            type: type
          }
        )
        // 2 second por set alert vanish korbo er jonne
        setTimeout(()=>{
            setAlert(null);
        },2000
         )

  }




  const toggleMode = () =>{
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success"); // first one is msg and 2nd one is type
      document.title = 'TextUtils - Dark Mode'; // upore tab er title change hobe, akhane jokhn e dark mode korbo

      // //title ta 2 second por por change hobe, caile multiple deya jay
      // setInterval(()=>{
      //   document.title = 'TextUtils - is Amazing Mode';
      // }, 2000)

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';

    }
  }

  return (
  <>
    <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>  
  
      {/* <Navbar />   */}
     <Alert alert={alert} />


    <div className='container my-3'>
    <TextForm showAlert={showAlert} heading="Enter The Text To Analyze :" mode={mode}/>
    {/* <About/> */}
   </div>
    {/* <div className='container my-3'>
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/" element={<TextForm heading="Enter text to analyze..!"  mode={mode} showAlert={showAlert} />}> </Route>
     </Routes>
    </BrowserRouter>
    </div> */}
    
  
  </>
  );
}

export default App;
