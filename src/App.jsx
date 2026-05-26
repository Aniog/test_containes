import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import MoldSourcing from './pages/MoldSourcing';
import CustomMoldMaking from './pages/CustomMoldMaking';
import MoldTypes from './pages/MoldTypes';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mold-sourcing" element={<MoldSourcing />} />
          <Route path="custom-mold-making" element={<CustomMoldMaking />} />
          <Route path="mold-types" element={<MoldTypes />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
