import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Breeds from './pages/Breeds';
import Care from './pages/Care';
import Facts from './pages/Facts';
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#faf8f5]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/care" element={<Care />} />
            <Route path="/facts" element={<Facts />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
