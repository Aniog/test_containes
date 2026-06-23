const Footer = () => {
  return (
    <footer className="bg-cosmos-dark border-t border-cosmos-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-cosmos-teal" />
              <span className="font-display text-cosmos-teal text-lg font-semibold tracking-widest uppercase">MicroCosmos</span>
            </div>
            <p className="text-cosmos-muted text-sm font-sans leading-relaxed max-w-xs">
              Dedicated to revealing the extraordinary beauty of the world invisible to the naked eye.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cosmos-text text-xs uppercase tracking-widest font-sans font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {['Gallery', 'Specimens', 'Cell Biology', 'Minerals & Crystals', 'Insect Anatomy', 'Water Worlds'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cosmos-muted text-sm font-sans hover:text-cosmos-teal transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-cosmos-text text-xs uppercase tracking-widest font-sans font-semibold mb-4">Stay Curious</h4>
            <p className="text-cosmos-muted text-sm font-sans leading-relaxed mb-4">
              Get weekly discoveries from the microscopic world delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-cosmos-card border border-cosmos-border rounded-lg px-4 py-2 text-cosmos-text text-sm font-sans placeholder-cosmos-muted/50 focus:outline-none focus:border-cosmos-teal transition-colors"
              />
              <button className="bg-cosmos-teal text-cosmos-dark font-sans font-semibold text-sm px-4 py-2 rounded-lg hover:bg-cosmos-glow transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-cosmos-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cosmos-muted text-xs font-sans">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-cosmos-muted text-xs font-sans">
            Exploring the invisible universe, one image at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
