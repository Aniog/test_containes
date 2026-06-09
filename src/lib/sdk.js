import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

export const getRows = (response) => response?.data?.list ?? []
export const getEntity = (response) => response?.data ?? null
export const getSchemaData = (entity) => entity?.data ?? {}
export const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}
EOF && cat > src/components/layout/Header.jsx <<EOF
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Products', href: '/products' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const location = useLocation()

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="bg-primary text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 hover:text-slate-200 transition-colors">
              <Mail className="w-4 h-4" /> info@ssourcingchina.com
            </a>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +86 123 4567 8901
            </span>
          </div>
          <div>Global China Sourcing Agent - Trustworthy & Professional</div>
        </div>
      </div>
      <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="text-2xl font-bold text-primary tracking-tight">SSourcing <span className="text-accent">China</span></span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-primary",
                location.pathname === item.href ? "text-primary border-b-2 border-primary" : "text-slate-600"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="default" size="sm" onClick={() => window.location.href='/contact'}>
            Get a Free Sourcing Quote
          </Button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white p-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-2xl font-bold text-primary">SSourcing China</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button className="w-full" onClick={() => { setMobileMenuOpen(false); window.location.href='/contact'; }}>
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
EOF && cat > src/components/layout/Footer.jsx <<EOF
import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">SSourcing <span className="text-accent">China</span></span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your reliable partner in China. We help global businesses navigate the complexities of sourcing, manufacturing, and logistics with transparency and professionalism.
            </p>
            <div className="flex gap-4 mt-6">
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Product Sourcing</Link></li>
              <li><Link to="/services" className="hover:text-white">Supplier Verification</Link></li>
              <li><Link to="/services" className="hover:text-white">Quality Inspection</Link></li>
              <li><Link to="/services" className="hover:text-white">Factory Audits</Link></li>
              <li><Link to="/services" className="hover:text-white">Shipping Coordination</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
              <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Level 15, Global Trade Center, Guangzhou, China</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>info@ssourcingchina.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+86 123 4567 8901</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
EOF && cat > src/Layout.jsx <<EOF
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Toaster } from 'sonner'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}
