import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Monoliths from './pages/Monoliths';
import Spaces from './pages/Spaces';
import BlueprintArchive from './pages/BlueprintArchive';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-void text-light-grey">
        <Navigation />
        <Routes>
          <Route path="/" element={<Monoliths />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/archive" element={<BlueprintArchive />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

