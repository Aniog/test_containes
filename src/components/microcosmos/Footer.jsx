import { Microscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#fce7f3] border-t border-[#f9a8d4] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[#1e1b2e] font-bold text-xl">
            <Microscope className="w-6 h-6 text-[#be185d]" />
            <span>Micro<span className="text-[#be185d]">Cosmos</span></span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-[#7c4d6a]">
            {['Explore', 'Gallery', 'Worlds', 'Science', 'About'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="hover:text-[#be185d] transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <p className="text-[#b07a9a] text-sm text-center md:text-right">
            © 2026 MicroCosmos. Exploring the invisible universe.
          </p>
        </div>
      </div>
    </footer>
  );
}
