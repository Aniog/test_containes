const Footer = () => {
  const links = ['About', 'Gallery', 'Research', 'Contact'];

  return (
    <footer className="bg-[#0a1628] border-t border-[#1a3a5c] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-white text-2xl">
              Micro<span className="text-cyan-400">Cosmos</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1">Exploring the invisible universe</p>
          </div>

          <nav className="flex flex-wrap gap-6 justify-center">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                {link}
              </a>
            ))}
          </nav>

          <p className="text-slate-500 text-sm text-center md:text-right">
            © 2026 MicroCosmos. <br className="md:hidden" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
