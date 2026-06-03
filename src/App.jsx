import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Explore from '@/pages/Explore';
import Science from '@/pages/Science';
import ScienceAbout from '@/pages/ScienceAbout';
import ScienceDetail from '@/pages/ScienceDetail';
import About from '@/pages/About';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/science" element={<Science />} />
          <Route path="/science/about" element={<ScienceAbout />} />
          <Route path="/science/:id" element={<ScienceDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
