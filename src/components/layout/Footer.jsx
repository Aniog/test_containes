const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folding Machine',
  ],
  Company: ['About Us', 'Careers', 'News & Events', 'Certifications', 'Partners'],
  Support: ['Technical Support', 'Spare Parts', 'Training Programs', 'Documentation', 'Warranty'],
};

const Footer = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060F18] text-[#8A9BB0]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="text-[#C9A84C] font-bold text-2xl tracking-widest uppercase leading-none">
                ARTITECT
              </div>
              <div className="text-[#8A9BB0] text-xs tracking-[0.3em] uppercase font-medium mt-0.5">
                MACHINERY
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Engineering precision sheet metal folding machines for professionals worldwide.
              Quality, reliability, and innovation since 1999.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'YouTube', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#C9A84C]/20 flex items-center justify-center text-[#8A9BB0] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-xs font-bold"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-[#C9A84C] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8A9BB0]">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-xs hover:text-[#C9A84C] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
