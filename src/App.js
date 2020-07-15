import React from 'react';
import Contact from './components/Contact.js';

function App() {
  return (
    <div>
    <Contact 
      name="Bree Van de Kamp"
      avatar="https://randomuser.me/api/portraits/women/2.jpg"
      status={true} 
    />

    <Contact 
      name="Gabriel Solis"
      avatar="https://randomuser.me/api/portraits/women/14.jpg"
      status={false}
    />

    <Contact 
      name="Lynette Scavo"
      avatar="https://randomuser.me/api/portraits/women/96.jpg"
      status={true}
    />
  </div>
  );
}

export default App;
