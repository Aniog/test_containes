const Footer = () => (
  <footer className="bg-gray-950 border-t border-gray-800 py-12">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-gray-950" />
          </span>
          <span className="text-white font-bold text-lg tracking-tight">MicroCosmos</span>
        </div>
        <p className="text-gray-500 text-sm text-center">
          Exploring the invisible world — one organism at a time.
        </p>
        <div className="flex items-center gap-6">
          {['Explore', 'Gallery', 'Organisms', 'Science', 'About'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-500 hover:text-cyan-400 text-sm transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} MicroCosmos. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
