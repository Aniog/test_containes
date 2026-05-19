const Footer = () => {
  return (
    <footer className="bg-forest text-cream py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-hay mb-4">The World of Horses</h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              Celebrating the beauty, history, and spirit of horses — one of humanity's most enduring companions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-hay mb-4 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-2">
              {['About Horses', 'Horse Breeds', 'Gallery'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-cream/70 hover:text-hay transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fun fact */}
          <div>
            <h4 className="font-semibold text-hay mb-4 uppercase tracking-widest text-xs">Did You Know?</h4>
            <p className="text-cream/70 text-sm leading-relaxed">
              Horses can sleep both standing up and lying down. They use a special locking mechanism in their legs called the "stay apparatus" to rest while standing.
            </p>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} The World of Horses. All rights reserved.
          </p>
          <p className="text-cream/50 text-sm">
            Made with ❤️ for horse lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
