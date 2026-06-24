import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRoot3 from './AppRoot3.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoot3 />
  </StrictMode>,
);
