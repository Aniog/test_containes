import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation.jsx';
import Descending from './pages/Descending.jsx';
import TheReef from './pages/TheReef.jsx';
import LuminousLife from './pages/LuminousLife.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen" style={{ background: '#000510' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Descending />} />
          <Route path="/reef" element={<TheReef />} />
          <Route path="/luminous" element={<LuminousLife />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

