import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import 'katex/dist/katex.min.css';
import Toc from 'components/Chapters/Toc';

import './App.css'

// ---------------------------------------------------------------------
//  Chapters
// ---------------------------------------------------------------------
import Chapter1_Section1 from 'components/Chapters/Chapter1/Chapter1.1';
import Chapter1_Section2 from 'components/Chapters/Chapter1/Chapter1.2';

import Chapter2_Section1 from 'components/Chapters/Chapter2/Chapter2.1';
import Chapter2_Section2 from 'components/Chapters/Chapter2/Chapter2.2';
import Chapter2_Section3 from 'components/Chapters/Chapter2/Chapter2.3';
import Chapter2_Section4 from 'components/Chapters/Chapter2/Chapter2.4';
import Chapter2_Section5 from 'components/Chapters/Chapter2/Chapter2.5';

import Chapter3_Section1 from 'components/Chapters/Chapter3/Chapter3.1';
import Chapter3_Section2 from 'components/Chapters/Chapter3/Chapter3.2';
import Chapter3_Section3 from 'components/Chapters/Chapter3/Chapter3.3';


import Chapter4_Section1 from 'components/Chapters/Chapter4/Chapter4.1';
import Chapter4_Section2 from 'components/Chapters/Chapter4/Chapter4.2';
import Chapter4_Section3 from 'components/Chapters/Chapter4/Chapter4.3';
import Chapter4_Section4 from 'components/Chapters/Chapter4/Chapter4.4';
// ---------------------------------------------------------------------
import PyConsole from 'components/PyShell/PyConsole';


function Main() {
  return (
    <div className="App">
      <div className="toc">
        <Toc />
      </div>
      <Outlet />

      {/* <div className='py-console'>
        <PyConsole />
      </div> */}

      <div className="footer">
        <p>© Langyan Zang, 2023 - 2023 </p>
      </div>  
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Main/> } >

          <Route path="chapter1/section1" element={ <Chapter1_Section1 /> } />
          <Route path="chapter1/section2" element={ <Chapter1_Section2 /> } />

          <Route path="chapter2/section1" element={ <Chapter2_Section1 /> } />
          <Route path="chapter2/section2" element={ <Chapter2_Section2 /> } />
          <Route path="chapter2/section3" element={ <Chapter2_Section3 /> } />
          <Route path="chapter2/section4" element={ <Chapter2_Section4 /> } />
          <Route path="chapter2/section5" element={ <Chapter2_Section5 /> } />
          
          <Route path="chapter3/section1" element={ <Chapter3_Section1 /> } />
          <Route path="chapter3/section2" element={ <Chapter3_Section2 /> } />
          <Route path="chapter3/section3" element={ <Chapter3_Section3 /> } />
          
          <Route path="chapter4/section1" element={ <Chapter4_Section1 /> } />
          <Route path="chapter4/section2" element={ <Chapter4_Section2 /> } />
          <Route path="chapter4/section3" element={ <Chapter4_Section3 /> } />
          <Route path="chapter4/section4" element={ <Chapter4_Section4 /> } />
        </Route>
      </Routes>
    </Router>
  );
}
