import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="*" element={
            <div className="pt-32 pb-20 container mx-auto px-6 text-center min-h-[60vh] flex flex-col items-center justify-center">
              <h1 className="font-serif text-3xl mb-4 text-primary">Page Not Found</h1>
              <a href="/" className="text-secondary-foreground border-b border-secondary-foreground pb-1 uppercase tracking-widest text-sm">
                Return Home
              </a>
            </div>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
