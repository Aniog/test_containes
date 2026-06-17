import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0A1220] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#C8973E] rounded-lg flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-tight">ARTITECT</span>
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase leading-tight text-white/60">MACHINERY</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Precision metal folding machines engineered for performance, built for durability, and backed by decades of expertise.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5">Products</h4>
            <ul className="space-y-3">
              {['Double Folding Machine', 'Double Folder', 'Sheet Metal Folder', 'Metal Folding Machine'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNav('#products')}
                    className="text-white/60 text-sm hover:text-[#C8973E] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Why Choose Us', href: '#features' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="text-white/60 text-sm hover:text-[#C8973E] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>+86 555 8888 9999</li>
              <li>sales@artitect-machinery.com</li>
              <li>Ma'anshan, Anhui, China</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-white/40 text-sm hover:text-white/70 transition-colors">Privacy Policy</button>
            <button className="text-white/40 text-sm hover:text-white/70 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
