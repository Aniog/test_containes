import { Microscope } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-cosmos-border bg-cosmos-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-cosmos-primary/20 flex items-center justify-center border border-cosmos-primary/40">
                <Microscope className="w-5 h-5 text-cosmos-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight text-cosmos-text">
                Micro<span className="text-cosmos-primary">Cosmos</span>
              </span>
            </div>
            <p className="text-cosmos-muted text-sm leading-relaxed">
              Revealing the extraordinary beauty and complexity of the microscopic world that surrounds us.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-cosmos-text tracking-wide uppercase mb-4">Explore</h4>
            <ul className="space-y-2">
              {['Kingdoms', 'Gallery', 'Discoveries', 'Microscopy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cosmos-muted text-sm hover:text-cosmos-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-cosmos-text tracking-wide uppercase mb-4">Connect</h4>
            <ul className="space-y-2">
              {['About Us', 'Research', 'Contact', 'Newsletter'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cosmos-muted text-sm hover:text-cosmos-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cosmos-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cosmos-muted text-xs">
            &copy; 2026 MicroCosmos. All rights reserved.
          </p>
          <p className="text-cosmos-muted text-xs">
            Built to explore the unseen universe.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
