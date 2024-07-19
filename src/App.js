import './App.css';
import QuoteBox from './components/QuoteBox.js';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('');

  const getRandomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            r = Math.min(r, 254);
            break;
        case 1:
            g = Math.min(g, 254);
            break;
        case 2:
            b = Math.min(b, 254);
            break;
        default:
            break;
    }
    setBgColor(`rgba(${r}, ${g}, ${b})`);
  }


  return (
    <div style={{backgroundColor: bgColor}} className='flex justify-center items-center h-screen'>
      <QuoteBox changeBgColor={getRandomColor} bgColor={bgColor}/>
    </div>
  );
}

export default App;
