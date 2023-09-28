import './App.css';
import React, { useState } from 'react';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import hex from '../src/assets/photos/hex_grid.png';

function App() {

    const [categories] = useState([
      {
        name: "Websites",
        description: "Photos of websites",
      },
      {
        name: "Technologies",
        description: "Technologies used in websites",
      },
      {
        name: "Experience",
        description: "Work experience in the field",
      },
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Navbar 
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}>
      </Navbar>
      <main>
      <Gallery></Gallery>
        <About></About>
      </main>
      <div>
          <img src={hex} className='App-logo' alt='cover' />
          <img src={hex} className='App-logo-2' alt='cover' />
    </div>
    </div>

  );
}

export default App;
