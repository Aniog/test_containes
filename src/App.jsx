import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Dishes from './pages/Dishes';
import Drinks from './pages/Drinks';
import Regions from './pages/Regions';
import Ingredients from './pages/Ingredients';
import Festivals from './pages/Festivals';
import History from './pages/History';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
