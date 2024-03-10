import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 2000);

  }

  const toggleModeBlue = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  const toggleModeGreen = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042f1c';
      showAlert("Dark mode enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success")
    }
  }

  const toggleModeBrown = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#310405';
      showAlert("Dark mode enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleModeBlue={toggleModeBlue} toggleModeGreen={toggleModeGreen} toggleModeBrown={toggleModeBrown}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            {/* /users --> component 1
            /users/home --> component 2 bcoz react does partial matching so w/o using exact it will render component 1 */}
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
