const Footer = () => {
  return (
    <footer className="bg-cosmos-bg border-t border-cosmos-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-grotesk text-2xl font-bold text-cosmos-text mb-1">
              Micro<span className="text-cosmos-cyan">Cosmos</span>
            </div>
            <p className="font-inter text-cosmos-faint text-sm">
              Exploring the invisible universe beneath our feet
            </p>
          </div>
          <div className="flex gap-8">
            {['About', 'Gallery', 'Research', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-inter text-sm text-cosmos-muted hover:text-cosmos-cyan transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cosmos-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-cosmos-faint text-xs">
            © 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="font-inter text-cosmos-faint text-xs">
            Dedicated to the invisible architects of life
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
