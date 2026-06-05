import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GeneratorsPage from './pages/GeneratorsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<GeneratorsPage />} />
        <Route path="/" element={
          <main className="app-loading-shell">
            <div className="app-loading-content" role="status" aria-live="polite">
              <p className="app-loading-text">
                Tell Strikingly Agent what you want to build!
              </p>
            </div>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
