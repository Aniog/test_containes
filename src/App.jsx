import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Roots from './pages/Roots';
import MicroForest from './pages/MicroForest';
import TheOutlook from './pages/TheOutlook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Roots />} />
          <Route path="micro-forest" element={<MicroForest />} />
          <Route path="the-outlook" element={<TheOutlook />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
