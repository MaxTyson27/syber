import React, { useState } from 'react'

import Solution from './components/Solution'
import BottomContent from './components/BottomContent'
import Popup from './components/Popup'
import AboutUs from './components/AboutUs';
import Main from './components/Main';

import './sass/main.sass'

const App = () => {
  const [popup, setPopup] = useState(false);

  return (
    <div className='wrapper'>
      <Main />
      <AboutUs />
      <Solution/>
      <BottomContent setPopup={ setPopup }/>
      { popup && <Popup setPopup={ setPopup }/>}
    </div>
  )
}

export default App
