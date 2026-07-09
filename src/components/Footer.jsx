import { Microscope, Github, Twitter, Mail, ExternalLink } from 'lucide-react'

const footerLinks = [
  {
    title: 'Explore',
    links: [
      { label: 'Gallery', href: '#gallery' },
      { label: 'Micro Worlds', href: '#worlds' },
      { label: 'Fun Facts', href: '#facts' },
      { label: 'Resources', href: '#explore' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Getting Started', href: '#' },
      { label: 'Microscopy Basics', href: '#' },
      { label: 'Species Guide', href: '#' },
      { label: 'Research Papers', href: '#' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Community Forum', href: '#' },
      { label: 'Submit Photos', href: '#' },
      { label: 'Partnerships', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#050510] border-t border-white/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          data-strk-img-id="footer-bg-pattern-9a8b7c"
          data-strk-img="microscopic pattern abstract cells dark"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1920"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Microscope className="w-8 h-8 text-micro-400" />
                <span className="text-xl font-heading font-bold text-white">
                  Micro<span className="text-micro-400">Cosmos</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                Exploring the breathtaking beauty of the microscopic world. Every image 
                reveals a universe of wonder invisible to the naked eye.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} MicroCosmos. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}