import { useState, useEffect, useCallback } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';

/* ─── Simple hash-based router ─── */
function parseHash(hash) {
  const h = hash.replace(/^#/, '') || '/';
  const [path, query] = h.split('?');
  const params = new URLSearchParams(query || '');
  return { path, params };
}

function AppInner() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  const navigate = useCallback((path) => {
    window.location.hash = path;
  }, []);

  useEffect(() => {
    const onHash = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Expose navigate for the preview bridge
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
      if (opts?.replace) {
        window.history.replaceState({}, '', `#${path}`);
      } else {
        window.location.hash = path;
      }
    };
  }, []);

  const { path, params } = route;

  let page = null;
  if (path.startsWith('/product/')) {
    const slug = path.split('/product/')[1];
    page = <ProductPage slug={slug} navigate={navigate} />;
  } else if (path === '/shop') {
    page = <ShopPage navigate={navigate} initialCat={params.get('cat')} />;
  } else {
    page = <HomePage navigate={navigate} />;
  }

  return (
    <>
      <Header navigate={navigate} currentPath={path} />
      <CartDrawer />
      {page}
      <Footer navigate={navigate} />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <AppInner />
    </CartProvider>
  );
}

export default App
