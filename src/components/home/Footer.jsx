const Footer = () => (
  <footer className="bg-dark-brown text-cream py-14 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <h2 className="font-display text-3xl font-bold text-cream mb-3">Napoli's</h2>
          <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
            Authentic Neapolitan pizza, crafted with love and tradition since 1987.
            Come hungry, leave happy.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xs tracking-widest uppercase font-semibold text-warm-orange mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {['Menu', 'Our Story', 'Why Us', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-cream/60 hover:text-warm-orange transition text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs tracking-widest uppercase font-semibold text-warm-orange mb-4">
            Contact
          </h3>
          <p className="text-cream/60 text-sm leading-relaxed">
            142 Via Napoli Street<br />
            Little Italy, New York, NY 10013<br /><br />
            (212) 555-0192<br />
            hello@napolispizza.com
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-cream/40 text-xs">
          © {new Date().getFullYear()} Napoli's Pizza. All rights reserved.
        </p>
        <p className="text-cream/40 text-xs italic font-display">
          "La pizza è vita."
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
