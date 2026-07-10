import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
import FarmPage from './pages/FarmPage';

const getPath = () => window.location.pathname;

function App() {
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onPop = () => setPath(getPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setPath(to);
  };

  if (path === '/farm') {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar navigate={navigate} currentPath={path} />
        <FarmPage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar navigate={navigate} currentPath={path} />
      <Hero />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
