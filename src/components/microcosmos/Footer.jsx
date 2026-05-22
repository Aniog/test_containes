const Footer = () => {
  return (
    <footer className="bg-[#050d1a] border-t border-[#1a3a4a] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#00d4aa] flex items-center justify-center shadow-[0_0_12px_rgba(0,212,170,0.4)]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#050d1a]" />
            </div>
            <span className="text-lg font-black text-[#e8f4f8] tracking-tight">
              Micro<span className="text-[#00d4aa]">Cosmos</span>
            </span>
          </div>

          <p className="text-sm text-[#5a7a8a] text-center">
            Revealing the hidden universe — one organism at a time.
          </p>

          <div className="flex items-center gap-6">
            {['About', 'Gallery', 'Research', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-[#5a7a8a] hover:text-[#00d4aa] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1a3a4a] text-center">
          <p className="text-xs text-[#5a7a8a]">
            © 2026 MicroCosmos. All rights reserved. Exploring the invisible world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
