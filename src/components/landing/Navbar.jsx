import { Users } from 'lucide-react';

export default function Navbar({ onViewContacts }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-gray-900 font-bold text-lg">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">L</span>
          </div>
          Launchpad
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-500">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        <button
          onClick={onViewContacts}
          className="flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
        >
          <Users className="w-4 h-4" />
          <span className="hidden sm:inline">View Contacts</span>
          <span className="sm:hidden">Contacts</span>
        </button>
      </div>
    </header>
  );
}
