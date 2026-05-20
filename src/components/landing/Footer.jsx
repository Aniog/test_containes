const footerLinks = {
  Product: ['Features', 'Templates', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About Us', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Help Center', 'Community', 'Tutorials', 'API Docs', 'Status'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
}

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="text-white font-extrabold text-xl mb-3">
              <span className="text-emerald-400">S</span>trikingly
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              The easiest way to build a beautiful website. No code required.
            </p>
            <div className="flex gap-3">
              {['𝕏', 'f', 'in', '▶'].map(icon => (
                <a key={icon} href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 text-gray-400 hover:text-white flex items-center justify-center text-sm transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Strikingly, Inc. All rights reserved.</p>
          <p className="text-gray-600 text-sm">
            Made with <span className="text-emerald-500">♥</span> for creators everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
