import { ArrowUp } from 'lucide-react'

const footerLinks = {
  Products: [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folder Machine',
    'Metal Folding Machine',
  ],
  Company: ['About Us', 'Our History', 'Certifications', 'Careers', 'News'],
  Support: ['Technical Support', 'Spare Parts', 'Training', 'Warranty', 'FAQs'],
}

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-extrabold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight leading-tight">
                  ARTITECT
                </span>
                <span className="text-gold-500 text-[10px] font-semibold tracking-[0.25em] uppercase leading-tight">
                  Machinery
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Precision metal folding solutions for industries worldwide.
              Engineered for performance, built to last.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-gold-500 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-gold-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-gold-500 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
