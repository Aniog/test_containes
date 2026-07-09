import { Microscope, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#050a0f] border-t border-[#1a3a4a] py-12">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Microscope className="w-5 h-5 text-[#00d4ff]" />
          <span className="text-[#e8f4f8] font-black text-lg tracking-tight">
            Micro<span className="text-[#00d4ff]">Cosmos</span>
          </span>
        </div>

        {/* Nav */}
        <div className="flex flex-wrap gap-6 justify-center">
          {['Explore', 'Gallery', 'Organisms', 'Science', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#7fb3c8] hover:text-[#00d4ff] text-sm transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">
          {[Twitter, Instagram, Youtube, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-[#3d6070] hover:text-[#00d4ff] transition-colors"
              aria-label="Social link"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="section-divider my-8" />

      <p className="text-center text-[#3d6070] text-xs">
        © 2026 MicroCosmos. Exploring the invisible world, one image at a time.
      </p>
    </div>
  </footer>
);

export default Footer;
