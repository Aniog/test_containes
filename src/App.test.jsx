import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

console.log('Test App: Starting...');

function TestApp() {
  console.log('TestApp: Rendering...');
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div style={{ padding: '50px' }}>
            <h1>Test Page</h1>
            <p>If you see this, basic routing works!</p>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default TestApp;
