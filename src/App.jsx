import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Home from '@/pages/Home';
import Contacts from '@/pages/Contacts';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
