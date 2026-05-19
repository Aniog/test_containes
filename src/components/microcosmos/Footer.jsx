const Footer = () => (
  <footer className="bg-black border-t border-neutral-800 py-12">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="text-white font-black text-2xl tracking-tighter mb-2">
            MICRO<span className="text-neutral-500">COSMOS</span>
          </div>
          <p className="text-neutral-500 text-sm">The invisible world made visible.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 text-sm">
          {['Explore', 'Gallery', 'Worlds', 'About'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-neutral-500 hover:text-white transition-colors duration-200 uppercase tracking-widest text-xs"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-neutral-600 text-xs">
          © 2026 MicroCosmos. All rights reserved.
        </p>
        <p className="text-neutral-700 text-xs uppercase tracking-widest">
          Exploring the infinitely small
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
