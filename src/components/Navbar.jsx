import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Users } from 'lucide-react';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-slate-900 text-lg">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          ContactHub
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              pathname === '/'
                ? 'text-indigo-600'
                : 'text-slate-600 hover:text-indigo-600'
            }`}
          >
            Home
          </Link>
          <a
            href={pathname === '/' ? '#contact' : '/#contact'}
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Contact
          </a>
          <Link
            to="/contacts"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              pathname === '/contacts'
                ? 'text-indigo-600'
                : 'text-slate-600 hover:text-indigo-600'
            }`}
          >
            <Users className="w-4 h-4" />
            View Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
}
