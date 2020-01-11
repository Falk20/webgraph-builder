import React from 'react';
import './App.scss';
import SiteHeader from './components/SiteHeader';
import SiteBody from './components/SiteBody';

function App() {
  return (
    <div className="App">
      <SiteHeader></SiteHeader>
      <SiteBody></SiteBody>
    </div>
  );
}

export default App;
