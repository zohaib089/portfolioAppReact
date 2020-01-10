import React from 'react';
import './App.css';
import Layout from './components/Layout';
import MiniFooter from './components/Footer'
function App() {
  return (
    <div className="App" style={{
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}>
      <Layout />
      <MiniFooter />
    </div>
  );
}

export default App;
