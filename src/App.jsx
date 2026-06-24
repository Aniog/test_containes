import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Home from '@/pages/Home';
import Groups from '@/pages/Groups';
import Schedule from '@/pages/Schedule';
import Knockout from '@/pages/Knockout';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0D1B2A] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/knockout" element={<Knockout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
