import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Laureates from './pages/Laureates';
import History from './pages/History';
import Medal from './pages/Medal';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-ivory-light font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/laureates" element={<Laureates />} />
            <Route path="/history" element={<History />} />
            <Route path="/medal" element={<Medal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
