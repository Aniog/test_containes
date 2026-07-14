import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Users } from 'lucide-react';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-gray-900 text-lg">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          ContactUs
        </Link>

        <div className="flex items-center gap-1">
          <Link
            to="/"
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === '/'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Home
          </Link>
          <Link
            to="/contacts"
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === '/contacts'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <Users className="w-4 h-4" />
            View Contacts
          </Link>
          <a
            href="/#contact"
            className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
