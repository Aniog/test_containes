import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-[#8e8e8e] py-16 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-heading text-white text-xl lowercase mb-6">strikingly</div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 font-sans text-sm">Product</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li><a href="/templates" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 font-sans text-sm">Company</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 font-sans text-sm">Support</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li><a href="/support" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#333] pt-8 font-sans text-xs flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Strikingly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
