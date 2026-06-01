import { Link } from 'react-router-dom';
import { Microscope, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-teal-400" />
              </div>
              <span className="text-white font-bold text-lg">
                Micro<span className="text-teal-400">Cosmos</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Exploring the invisible universe beneath our feet — from bacteria to fungi, from cells to crystals.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Navigate</h4>
            <ul className="space-y-2">
              {[['Home', '/'], ['Explore', '/explore'], ['Gallery', '/gallery'], ['About', '/about']].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-gray-500 hover:text-teal-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Follow</h4>
            <div className="flex gap-4">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-500/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-600 text-xs">
          © 2026 MicroCosmos. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
