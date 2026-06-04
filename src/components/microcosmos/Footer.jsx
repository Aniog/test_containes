const Footer = () => {
  return (
    <footer className="bg-[#050a0f] border-t border-[rgba(0,212,255,0.1)] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-black text-[#e2f0fb] mb-1">
              Micro<span className="text-[#00d4ff]">Cosmos</span>
            </div>
            <p className="text-[#4a7a96] text-sm">Exploring the invisible universe</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {['About', 'Gallery', 'Worlds', 'Techniques', 'Facts'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[#7fb3cc] hover:text-[#00d4ff] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-[#4a7a96] text-xs text-center md:text-right">
            © 2026 MicroCosmos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
