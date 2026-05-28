import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Dishes from './pages/Dishes';
import Regions from './pages/Regions';
import Ingredients from './pages/Ingredients';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/ingredients" element={<Ingredients />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
