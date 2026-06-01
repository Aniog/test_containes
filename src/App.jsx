import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Galleries from './pages/Galleries';
import GalleryDetail from './pages/GalleryDetail';
import DataSheets from './pages/DataSheets';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-true-black min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Galleries />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          <Route path="/data" element={<DataSheets />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
