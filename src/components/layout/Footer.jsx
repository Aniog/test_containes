import { Linkedin, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Metal Folding Machine',
  ],
  Company: ['About Us', 'Careers', 'News & Press', 'Certifications'],
  Support: ['Technical Support', 'Spare Parts', 'Training', 'Documentation'],
};

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 bg-[#1B2A4A] border border-[#C9A84C]/30 rounded-lg flex items-center justify-center">
                <span className="text-[#C9A84C] font-bold text-sm tracking-wider">AM</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-base tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Artitect
                </span>
                <span className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-semibold">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-[#5A6A82] text-sm leading-relaxed mb-6 max-w-xs">
              Engineering precision sheet metal folding solutions for industry leaders worldwide. Built to perform. Designed to last.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-[#1B2A4A] rounded-lg flex items-center justify-center text-[#5A6A82] hover:text-[#C9A84C] hover:bg-[#243a63] transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-white font-bold text-sm tracking-widest uppercase mb-5"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#products"
                      onClick={(e) => { e.preventDefault(); scrollTo('#products'); }}
                      className="text-[#5A6A82] text-sm hover:text-[#C9A84C] transition-colors"
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
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#3A4A5E] text-xs">
            © {new Date().getFullYear()} Artitect Machinery. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-[#3A4A5E] text-xs hover:text-[#C9A84C] transition-colors">
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
