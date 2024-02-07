import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Header from './components/Header';
import Organization from './components/Organization';
import RSVP from './components/RSVP';
import Seeyou from './components/Seeyou';
import Sidebar from './components/Sidebar';
import Story from './components/Story';
import Where from './components/Where';
import React from 'react';

function App() {
  return (
    <>
      <Sidebar />
      <div id='oliven-main'>
        <Header />
        <Story />
        <Countdown />
        <Organization />      
        <Seeyou />
        <Where />  
        <RSVP />
        <Footer />
      </div>
    </>
  );
}

export default App;
