import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LevelSelect from '@/pages/LevelSelect';
import SudokuGame from '@/pages/SudokuGame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LevelSelect />} />
        <Route path="/game/:levelId" element={<SudokuGame />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
