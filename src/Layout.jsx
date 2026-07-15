import { Link, useLocation } from 'react-router-dom';
import { Users, Zap } from 'lucide-react';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-slate-900 text-lg">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          Launchpad
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            to="/"
            className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
              pathname === '/'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Home
          </Link>
          <Link
            to="/contacts"
            className={`flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
              pathname === '/contacts'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Users className="w-4 h-4" />
            Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-slate-200 py-8 px-4">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-slate-700 font-semibold">
        <div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center">
          <Zap className="w-3 h-3 text-white" />
        </div>
        Launchpad
      </div>
      <p className="text-sm text-slate-400">© {new Date().getFullYear()} Launchpad. All rights reserved.</p>
    </div>
  </footer>
);

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
