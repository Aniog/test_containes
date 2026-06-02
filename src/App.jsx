import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import PatternPage from './pages/PatternPage';
import SpeciesIndexPage from './pages/SpeciesIndexPage';
import HerbariumPage from './pages/HerbariumPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PatternPage />} />
          <Route path="/species" element={<SpeciesIndexPage />} />
          <Route path="/herbarium" element={<HerbariumPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
