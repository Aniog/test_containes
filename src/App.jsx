import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import GreatMigration from './pages/GreatMigration';
import SpeciesArchive from './pages/SpeciesArchive';
import DustAndLight from './pages/DustAndLight';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<GreatMigration />} />
        <Route path="/species" element={<SpeciesArchive />} />
        <Route path="/dust-and-light" element={<DustAndLight />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
