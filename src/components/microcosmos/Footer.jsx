import { Microscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-[#1e3a5f] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[#f0f9ff] font-bold text-xl">
            <Microscope className="w-6 h-6 text-[#00d4ff]" />
            <span>Micro<span className="text-[#00d4ff]">Cosmos</span></span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-[#94a3b8]">
            {['Explore', 'Gallery', 'Worlds', 'Science', 'About'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="hover:text-[#00d4ff] transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <p className="text-[#475569] text-sm text-center md:text-right">
            © 2026 MicroCosmos. Exploring the invisible universe.
          </p>
        </div>
      </div>
    </footer>
  );
}
