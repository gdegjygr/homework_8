import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OSBar from './components/NavBArs/OSBar';
import TopBar from './components/NavBArs/Topbar';
import Gradient from './components/Content_1/Gradient';
import Info from './components/Content_2/Info';
import Footer from './components/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OSBar/>
    <TopBar/>
    <Gradient/>
    
    <Info/>
    <Footer/>
  </React.StrictMode>
);