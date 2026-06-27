export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1B1E] text-[#A1A4A9] py-[60px] text-[14px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo Column */}
          <div className="md:col-span-1">
            <a href="/" aria-label="Strikingly" className="flex items-center gap-1 font-[family-name:var(--font-heading)] font-bold text-xl tracking-tight text-white mb-4">
              <span>strikingly</span>
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-[12px]">Product</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="/templates" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><span className="opacity-70">Features</span></li>
              <li><span className="opacity-70">Free Domain</span></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-[12px]">Company</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><span className="opacity-70">Careers</span></li>
              <li><span className="opacity-70">Affiliates</span></li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-[12px]">Community</h4>
            <ul className="flex flex-col gap-2">
              <li><span className="opacity-70">Help Center</span></li>
              <li><span className="opacity-70">Idea Forum</span></li>
              <li><span className="opacity-70">Experts</span></li>
              <li><span className="opacity-70">App Store</span></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4 text-[12px]">Support</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="/support" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><span className="opacity-70">System Status</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#333539] flex flex-col md:flex-row justify-between items-center gap-4 text-[12px]">
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <div>
            &copy; {currentYear} Strikingly. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
