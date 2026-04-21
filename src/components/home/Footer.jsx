const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍕</span>
            <span
              className="text-xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Napoli's Pizza
            </span>
          </div>
          <p
            className="text-sm text-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} Napoli's Pizza. Made with ❤️ and a very hot oven.
          </p>
          <div
            className="flex gap-6 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {['Menu', 'About', 'Specials', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-orange-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
