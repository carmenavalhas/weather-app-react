import React from 'react';
import Weather from './Weather';
import { GitHubLogoIcon } from '@radix-ui/react-icons'

import './App.css';

export default function App() {
  return (
  <div className="App">
    <div className="container">
     <Weather defaultCity="New York" />
    <footer>
      2023, React ⎪  <a href="https://github.com/carmenavalhas/weather-app-react"
    target="_blank" rel="noopener noreferrer"> <span className='footer-icon'> 
          <GitHubLogoIcon />
 </span>
</a>  open-source code by 
      {" "}
<a href="https://carmenavalhas-portfolio.netlify.app/" 
target="_blank" rel="noopener noreferrer">Carmen Navalhas
</a>
    </footer>
    </div>
  </div>
);
}

