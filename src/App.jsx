import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Matches from './pages/Matches';
import Standings from './pages/Standings';
import Teams from './pages/Teams';
import News from './pages/News';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
