import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Matches from '@/pages/Matches';
import Groups from '@/pages/Groups';
import Players from '@/pages/Players';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/players" element={<Players />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
