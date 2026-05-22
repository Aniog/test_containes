import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import News from '@/pages/News';
import Deals from '@/pages/Deals';
import Store from '@/pages/Store';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
