//hook
import {useState} from "react";

import './App.css';
import './index.css';
// components
import Button from './components/Button';
import Header from './components/Header';
import Title from './components/Title';
import Modal from './components/Modal';
//Image
import headerImg from './img/header-img.png';
//Examples-useState hook
import UseStateHooksEx from './Examples/UseStateHooksEx';


function App() {
  //Modal state
  const[showCourseModal,setShowCourseModal]=useState(false);
  //Modal Handlers
  function handleStartLearningEvent(){
        setShowCourseModal(true);

  }

  function handleCancelEvent(){
    setShowCourseModal(false);
  }
  return (
    <div className="App">
    {showCourseModal&& <Modal title={"Access denied"} text={"Please log in.. to continue"}
     cancelEvent={handleCancelEvent}/>}
     <Header> 
         <Title classes={"header-title fs-xxl "}/>
         <p className='header-text mb-3'>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
          </p>
          <img src={headerImg} alt="header-img" className="header-img"/>
          <div className='header-btn'>
            
            <Button classes={"btn btn-primary text-light"}text={"Try it free 30 days"}
             type={"button"}
              onClick={handleStartLearningEvent}></Button>

            <Button classes={"btn btn-secondary"}text={"Learn more"}></Button>
          </div>

     </Header>
     <UseStateHooksEx />
    </div>
  );
}

export default App;
