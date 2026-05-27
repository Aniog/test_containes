import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Gallery from './pages/Gallery';
import About from './pages/About';

function NavigateBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => navigate(path, opts);
    return () => { delete window.__STRIKINGLY_PREVIEW_NAVIGATE__; };
  }, [navigate]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <NavigateBridge />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
