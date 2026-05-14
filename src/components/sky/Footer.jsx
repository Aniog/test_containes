const Footer = () => {
  return (
    <footer className="bg-[#060d1a] border-t border-sky-900/40 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-3xl">☁️</span>
            <div>
              <div className="text-white font-bold text-xl">
                <span className="text-sky-300">Sky</span> Above Us
              </div>
              <div className="text-sky-500 text-xs">Celebrating the beauty of the sky</div>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {['Home', 'Sky Types', 'Phenomena', 'Gallery', 'Night Sky'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sky-400 hover:text-sky-200 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-sky-900/30 text-center">
          <p className="text-sky-600 text-sm">
            © {new Date().getFullYear()} Sky Above Us · Made with wonder and curiosity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
