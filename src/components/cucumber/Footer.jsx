const Footer = () => (
  <footer className="bg-cucumber-dark text-white py-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🥒</span>
          <div>
            <div className="font-black text-xl text-white">Cucumber</div>
            <div className="text-green-400 text-sm">Nature's Coolest Vegetable</div>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          {['About', 'Nutrition', 'Varieties', 'Recipes', 'Growing'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-green-300 hover:text-white text-sm transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
        <p className="text-green-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Cucumber. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
