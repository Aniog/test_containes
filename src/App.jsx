import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import GeneratorsHubPage from './pages/GeneratorsHubPage.jsx';
import './App.css';

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);
  return null;
};

const App = () => (
  <BrowserRouter>
    <ScrollToTopOnRouteChange />
    <Routes>
      <Route path="/" element={<GeneratorsHubPage />} />
      <Route path="/generators" element={<GeneratorsHubPage />} />
      <Route path="/generators/*" element={<GeneratorsHubPage />} />
      <Route path="*" element={<GeneratorsHubPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
