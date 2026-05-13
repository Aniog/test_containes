import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import KnowledgeHub from './pages/KnowledgeHub';
import Constellations from './pages/Constellations';
import StellarEvolution from './pages/StellarEvolution';
import ObservationalPhysics from './pages/ObservationalPhysics';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/knowledge" element={<KnowledgeHub />} />
          <Route path="/knowledge/constellations" element={<Constellations />} />
          <Route path="/knowledge/stellar-evolution" element={<StellarEvolution />} />
          <Route path="/knowledge/observational-physics" element={<ObservationalPhysics />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
