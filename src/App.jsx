import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Atlas from './pages/Atlas';
import Theory from './pages/Theory';
import Simulations from './pages/Simulations';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Atlas />} />
          <Route path="theory" element={<Theory />} />
          <Route path="simulations" element={<Simulations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
