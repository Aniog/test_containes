import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Conservation from './pages/Conservation';
import Stories from './pages/Stories';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/conservation" element={<Conservation />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

