const Footer = () => (
  <footer className="bg-[#050a14] border-t border-slate-800 py-12 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-2xl font-bold text-white tracking-tight">Microcosm</h3>
        <p className="text-slate-500 text-sm mt-1">Exploring the invisible universe</p>
      </div>
      <nav className="flex gap-8">
        {['Introduction', 'Gallery', 'Worlds', 'Discoveries'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-slate-400 text-sm hover:text-cyan-400 transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </nav>
      <p className="text-slate-600 text-xs">
        © {new Date().getFullYear()} Microcosm. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
