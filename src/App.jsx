import { useState } from 'react';
import './index.css';
import Navbar from './components/social/Navbar';
import Social from './pages/Social';

export default function App() {
  const [active, setActive] = useState('首页');
  return (
    <div style={{ minHeight: '100vh', background: '#f7f5ff' }}>
      <Navbar active={active} setActive={setActive} />
      <Social />
    </div>
  );
}
