import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Cameras from './pages/Cameras';
import Gallery from './pages/Gallery';
import Specs from './pages/Specs';
import About from './pages/About';
import Learn from './pages/Learn';
import Support from './pages/Support';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/cameras" element={<Layout><Cameras /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/specs" element={<Layout><Specs /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/learn" element={<Layout><Learn /></Layout>} />
        <Route path="/support" element={<Layout><Support /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
