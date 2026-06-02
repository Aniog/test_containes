import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hardware from './pages/Hardware';
import Blueprints from './pages/Blueprints';
import Forge from './pages/Forge';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Hardware />} />
          <Route path="/blueprints" element={<Blueprints />} />
          <Route path="/forge" element={<Forge />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
