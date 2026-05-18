export default function FooterSection() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-white font-black text-2xl tracking-widest uppercase">MicroCosmos</span>
            <p className="text-neutral-500 text-sm leading-relaxed mt-3 max-w-xs">
              Dedicated to revealing the extraordinary beauty of the microscopic world through science, photography, and storytelling.
            </p>
            <div className="flex gap-4 mt-6">
              {['Twitter', 'Instagram', 'YouTube', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-neutral-500 text-xs font-medium tracking-widest uppercase hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-white text-xs font-medium tracking-widest uppercase mb-4">Explore</p>
            <ul className="space-y-2">
              {['Gallery', 'Specimens', 'Science', 'Team', 'About'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-neutral-500 text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white text-xs font-medium tracking-widest uppercase mb-4">Contact</p>
            <ul className="space-y-2 text-neutral-500 text-sm">
              <li>hello@microcosmos.io</li>
              <li>+1 (555) 012-3456</li>
              <li className="pt-2 leading-relaxed">
                123 Science Park Drive<br />
                Cambridge, MA 02139
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs">© 2026 MicroCosmos. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-neutral-600 text-xs hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
