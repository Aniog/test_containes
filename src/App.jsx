import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import ContactsPage from '@/pages/ContactsPage';
import './App.css';

function Navbar() {
  const location = useLocation();
  const isContacts = location.pathname === '/contacts';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors duration-200">
          Acme
        </Link>
        <div className="flex items-center gap-2">
          <Link
            to="/#features"
            className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            to="/#contact"
            className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            to="/contacts"
            className={`text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors duration-200 ${
              isContacts
                ? 'bg-indigo-600 text-white'
                : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
            }`}
          >
            View contacts
          </Link>
        </div>
      </div>
    </nav>
  );
}

function AppLayout() {
  const location = useLocation();
  const isContacts = location.pathname === '/contacts';

  return (
    <>
      {!isContacts && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
