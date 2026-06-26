import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1f2e] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1a1f2e] font-bold text-xl">AM</span>
              </div>
              <span className="font-semibold text-xl tracking-tight">ARTITECT MACHINERY</span>
            </div>
            <p className="text-[#a0aec0] max-w-md">
              Precision-engineered folding machines trusted by manufacturers worldwide since 1985.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-[#a0aec0]">
              <li>Double Folding Machines</li>
              <li>Sheet Metal Folders</li>
              <li>Metal Folding Machines</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-[#a0aec0]">
              <li>About Us</li>
              <li>Our History</li>
              <li>Global Network</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#a0aec0]">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;