import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { site, navLinks } from '@/data/site'

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-18 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-primary">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-primary text-white text-sm">
              SS
            </span>
            {site.name}
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-primary ${
                    isActive ? 'text-primary' : 'text-neutral-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button as={Link} to="/contact" variant="primary" size="sm">
              {site.cta}
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-neutral-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={mobileOpen ? 'X' : 'Menu'} className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <Container>
            <nav className="flex flex-col py-4 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium ${isActive ? 'text-primary' : 'text-neutral-700'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button
                as={Link}
                to="/contact"
                onClick={() => setMobileOpen(false)}
                variant="primary"
                size="md"
                className="mt-2"
              >
                {site.cta}
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-xl font-extrabold text-white mb-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-primary text-white text-sm">
                SS
              </span>
              {site.name}
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              China sourcing agent helping global buyers find reliable suppliers, verify factories,
              inspect quality, and coordinate shipping.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services#supplier-sourcing" className="hover:text-white">Supplier Sourcing</Link></li>
              <li><Link to="/services#factory-verification" className="hover:text-white">Factory Verification</Link></li>
              <li><Link to="/services#quality-control" className="hover:text-white">Quality Control</Link></li>
              <li><Link to="/services#shipping-coordination" className="hover:text-white">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Mail" className="h-4 w-4 mt-1" />
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Phone" className="h-4 w-4 mt-1" />
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-white">{site.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" className="h-4 w-4 mt-1" />
                <span className="text-neutral-400">{site.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-sm text-neutral-500 flex flex-col md:flex-row justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-white">Privacy Policy</Link>
            <Link to="/" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
