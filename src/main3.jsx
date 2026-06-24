import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppRoot2 from './AppRoot2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoot2 />
  </StrictMode>,
);
