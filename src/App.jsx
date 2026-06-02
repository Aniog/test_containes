import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import Bikes from '@/pages/Bikes';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
