import './App.css';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar.js';
import hex from './photos/hex_grid.png';

function App() {
  return (
    <div>
      <main>
        <Navbar></Navbar>
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
