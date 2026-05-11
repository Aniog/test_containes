const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span
              className="text-xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Animal Kingdom
            </span>
          </div>
          <p className="text-sm text-center md:text-right">
            Celebrating the diversity of life on Earth. Every creature matters.
          </p>
        </div>
        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-xs text-stone-600">
          © 2026 Animal Kingdom. Made with ❤️ for wildlife.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
