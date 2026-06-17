import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = el.getBoundingClientRect().top;
      window.scrollTo({ top: elementPosition - bodyRect - offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark text-white/80 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-y-12 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded bg-white/10 flex items-center justify-center">
                <span className="text-white font-serif text-xl font-bold tracking-tight">A</span>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold tracking-tight text-white">ARTITECT</div>
                <div className="text-[10px] text-white/50 -mt-1 tracking-[3px]">MACHINERY</div>
              </div>
            </div>
            <div className="text-sm max-w-xs text-white/60">
              Precision sheet metal folding machines engineered for workshops that demand excellence.
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8 text-sm">
            <div>
              <div className="text-white/40 text-xs tracking-widest mb-3">EXPLORE</div>
              <div className="space-y-2">
                <button onClick={() => scrollTo('about')} className="block hover:text-white">About Us</button>
                <button onClick={() => scrollTo('machines')} className="block hover:text-white">Our Machines</button>
                <button onClick={() => scrollTo('engineering')} className="block hover:text-white">Engineering</button>
              </div>
            </div>
            <div>
              <div className="text-white/40 text-xs tracking-widest mb-3">COMPANY</div>
              <div className="space-y-2">
                <button onClick={() => scrollTo('why-us')} className="block hover:text-white">Why ARTITECT</button>
                <button onClick={() => scrollTo('contact')} className="block hover:text-white">Contact</button>
                <a href="mailto:sales@artitectmachinery.com" className="block hover:text-white">Sales</a>
              </div>
            </div>
            <div>
              <div className="text-white/40 text-xs tracking-widest mb-3">HEADQUARTERS</div>
              <div className="space-y-1 text-white/70">
                <div>1240 Industrial Parkway</div>
                <div>Cleveland, OH 44135</div>
                <div className="pt-2">United States</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between text-xs text-white/50 gap-y-2">
          <div>© {year} ARTITECT MACHINERY. All rights reserved.</div>
          <div className="flex gap-x-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;