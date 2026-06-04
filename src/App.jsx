import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import TheRoots from './pages/TheRoots';
import MicroForest from './pages/MicroForest';
import TheOutlook from './pages/TheOutlook';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TheRoots />} />
          <Route path="/micro-forest" element={<MicroForest />} />
          <Route path="/the-outlook" element={<TheOutlook />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
