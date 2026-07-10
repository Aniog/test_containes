const Footer = () => {
  return (
    <footer className="bg-[#050d1a] border-t border-[#1a3050] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black text-[#f0f6ff] mb-3">
              Micro<span className="text-[#00d4c8]">Cosmos</span>
            </div>
            <p className="text-[#8ba3c7] text-sm leading-relaxed max-w-xs">
              Revealing the extraordinary beauty and complexity of the microscopic world through science and art.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-bold text-[#f0f6ff] uppercase tracking-widest mb-4">Explore</h4>
            <ul className="space-y-2">
              {['Gallery', 'Specimens', 'Ecosystems', 'About'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-[#8ba3c7] hover:text-[#00d4c8] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-sm font-bold text-[#f0f6ff] uppercase tracking-widest mb-4">Topics</h4>
            <div className="flex flex-wrap gap-2">
              {['Bacteria', 'Viruses', 'Cells', 'Diatoms', 'Fungi', 'Crystals', 'Protozoa', 'Extremophiles'].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#0f1f38] border border-[#1a3050] text-[#8ba3c7] text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a3050] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#4a6080]">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-xs text-[#4a6080]">
            Exploring the invisible universe, one micron at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
