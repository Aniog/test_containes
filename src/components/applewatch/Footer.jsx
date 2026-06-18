const links = {
  Shop: ['Apple Watch Series 10', 'Apple Watch Ultra 2', 'Apple Watch SE', 'Bands & Accessories'],
  Support: ['Apple Watch Support', 'User Guide', 'Repair & Service', 'AppleCare+'],
  Company: ['About Apple', 'Newsroom', 'Careers', 'Investor Relations'],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <span className="text-gray-900 font-bold text-xl tracking-tight">Apple Watch</span>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              The most personal device Apple has ever made. Designed to keep you healthy, connected, and safe.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © 2026 Apple Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Sales Policy', 'Legal'].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
