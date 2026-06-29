import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GeneratorsHub from './pages/GeneratorsHub';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/generators" replace />} />
        <Route path="/generators" element={<GeneratorsHub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
