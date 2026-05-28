const FooterSection = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <h3
          className="text-white text-2xl font-bold mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Mexico Food
        </h3>
        <p className="text-sm text-gray-500">Celebrating the flavors of a great culinary tradition.</p>
      </div>

      <nav className="flex gap-6 text-sm">
        {['Dishes', 'Regions', 'Ingredients'].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="hover:text-orange-400 transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </nav>

      <p className="text-xs text-gray-600">© 2026 Mexico Food. All rights reserved.</p>
    </div>
  </footer>
);

export default FooterSection;
