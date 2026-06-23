import { Microscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0d1a26] border-t border-[#1a3a50] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Microscope className="w-6 h-6 text-[#00d4ff]" />
            <span className="text-[#e8f4f8] font-black text-xl tracking-tight">
              Micro<span className="text-[#00d4ff]">Cosmos</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8ab4c8]">
            {['Explore', 'Gallery', 'Worlds', 'Science', 'About'].map((link) => (
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-[#00d4ff] transition-colors bg-transparent border-none cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>

          <p className="text-[#4a7a94] text-sm text-center md:text-right">
            © 2026 MicroCosmos. All rights reserved.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1a3a50] text-center">
          <p className="text-[#4a7a94] text-sm">
            Dedicated to revealing the beauty of the invisible world through science and photography.
          </p>
        </div>
      </div>
    </footer>
  );
}
