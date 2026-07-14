import { Link, useLocation } from 'react-router-dom';
import { Mail, Users } from 'lucide-react';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-indigo-600 font-bold text-lg no-underline">
          <Mail className="w-5 h-5" />
          <span>ContactUs</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
              pathname === '/'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Home
          </Link>
          <Link
            to="/contacts"
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${
              pathname === '/contacts'
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <Users className="w-4 h-4" />
            View Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
