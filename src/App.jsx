import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneratorsPage from './pages/GeneratorsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<GeneratorsPage />} />
        <Route path="*" element={<GeneratorsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
