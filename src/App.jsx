import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '@/components/nav/Navbar';
import Home from '@/pages/Home';
import { ThemeProvider } from '@/context/ThemeContext';
import './App.css';

const ThemedPage = ({ themeKey }) => (
  <ThemeProvider themeKey={themeKey}>
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <Home />
    </div>
  </ThemeProvider>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/red" replace />} />
        <Route path="/red"    element={<ThemedPage themeKey="red" />} />
        <Route path="/orange" element={<ThemedPage themeKey="orange" />} />
        <Route path="/blue"   element={<ThemedPage themeKey="blue" />} />
        <Route path="/purple" element={<ThemedPage themeKey="purple" />} />
        <Route path="/teal"   element={<ThemedPage themeKey="teal" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


