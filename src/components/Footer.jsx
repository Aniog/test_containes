import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold font-heading text-xl font-bold tracking-wide">
                ARTITECT
              </span>
              <span className="text-off-white font-heading text-xl font-semibold tracking-wide">
                MACHINERY
              </span>
            </div>
            <p className="text-muted-gray text-sm leading-relaxed max-w-md mb-6">
              Industry-leading manufacturer of precision folding machines for sheet metal fabrication. Built for professionals who demand the best.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-muted-gray text-sm hover:text-gold transition-colors"
              >
                Products
              </a>
              <span className="text-muted-gray/30">|</span>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-muted-gray text-sm hover:text-gold transition-colors"
              >
                About
              </a>
              <span className="text-muted-gray/30">|</span>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-muted-gray text-sm hover:text-gold transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-off-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <p className="text-muted-gray text-sm">
                1280 Industrial Parkway<br />
                Cleveland, OH 44114
              </p>
              <a
                href="tel:+1-800-555-0199"
                className="block text-muted-gray text-sm hover:text-gold transition-colors"
              >
                +1 (800) 555-0199
              </a>
              <a
                href="mailto:sales@artitectmachinery.com"
                className="block text-muted-gray text-sm hover:text-gold transition-colors"
              >
                sales@artitectmachinery.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-off-white text-sm font-semibold uppercase tracking-wider mb-4">
              Business Hours
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-gray">Monday – Friday</span>
                <span className="text-off-white">8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-gray">Saturday</span>
                <span className="text-off-white">9:00 AM – 2:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-gray">Sunday</span>
                <span className="text-off-white">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-gray text-xs">
              &copy; {currentYear} ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-gray text-xs hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-gray text-xs hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
