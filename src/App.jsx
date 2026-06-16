import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-brand-light">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
