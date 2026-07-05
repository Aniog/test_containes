import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <div style={{ padding: '40px' }}>
          <h1>Testing Layout component...</h1>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
