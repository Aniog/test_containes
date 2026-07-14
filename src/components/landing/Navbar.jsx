import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">A</span>
          </div>
          Acme
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contacts"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">View contacts</span>
          </Link>
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
