import { Microscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050a0f] border-t border-cyan-900/30 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Microscope className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-black text-base tracking-widest uppercase">
              Micro<span className="text-cyan-400">Cosmos</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['Explore', 'Gallery', 'Organisms', 'Science', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#4a7a8a] hover:text-cyan-300 text-sm font-semibold uppercase tracking-widest transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[#4a7a8a] text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-cyan-900/20 text-center">
          <p className="text-[#4a7a8a] text-xs leading-relaxed max-w-xl mx-auto">
            Dedicated to the exploration and celebration of the microscopic world. Science, beauty, and wonder — at every scale.
          </p>
        </div>
      </div>
    </footer>
  );
}
