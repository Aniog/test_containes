const Navbar = () => {
  const links = ['About', 'Nutrition', 'Varieties', 'Recipes', 'Growing'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-cucumber-pale shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🥒</span>
          <span className="font-black text-cucumber text-xl tracking-tight">Cucumber</span>
        </div>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-cucumber-dark text-sm font-semibold hover:text-cucumber transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#recipes"
          className="hidden md:inline-block bg-cucumber text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-cucumber-light transition-colors"
        >
          Get Recipes
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
