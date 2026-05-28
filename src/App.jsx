import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Cameras from './pages/Cameras';
import Gallery from './pages/Gallery';
import Specs from './pages/Specs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/cameras" element={<Layout><Cameras /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/specs" element={<Layout><Specs /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
