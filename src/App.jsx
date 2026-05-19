import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import News from './pages/News';
import ArticleDetail from './pages/ArticleDetail';
import Deals from './pages/Deals';
import Store from './pages/Store';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<ArticleDetail />} />
          <Route path="deals" element={<Deals />} />
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
