import React from 'react'
import logo from './logo.svg'
import './App.scss'
import ReleaseNotification from './components/releasenotification/ReleaseNotification'
import Header from './components/header/Header'
import MainArea from './components/mainarea/MainArea'

function App() {
  return (
    <div className="App">
      <Header/>
      <ReleaseNotification/>
      <MainArea/>
    </div>
  );
}

export default App
