import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Generators from './pages/Generators';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<Generators />} />
        <Route path="*" element={<Generators />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
