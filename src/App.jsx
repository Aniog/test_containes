import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.location.pathname === '/generators') {
      window.location.replace('/generators/index.html');
    }
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: "'Open Sans', sans-serif" }}>
      <p style={{ color: '#636972', fontSize: '14px' }}>
        Redirecting to <a href="/generators/index.html" style={{ color: '#8159BB' }}>AI Generators Hub</a>...
      </p>
    </div>
  );
}

export default App;
