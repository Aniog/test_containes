import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Menu, X } from 'lucide-react'
import strkImgConfig from './strk-img-config.json'
import Home from './pages/HomePage.jsx'
import Services from './pages/Services.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Products from './pages/Products.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/ContactPage.jsx'
import './App.css'

const navItems = [
  ['Home', '/'],
  ['Services', '/services'],
  ['How It Works', '/how-it-works'],
  ['Products We Source', '/products'],
  ['Case Studies', '/case-studies'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
]

const pageTitles = {
  '/': 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
  '/services': 'China Sourcing Services | SSourcing China',
  '/how-it-works': 'How China Sourcing Works | SSourcing China',
  '/products': 'Products We Source in China | SSourcing China',
  '/case-studies': 'China Sourcing Case Studies | SSourcing China',
  '/blog': 'China Sourcing Blog | SSourcing China',
  '/contact': 'Get a Free Sourcing Quote | SSourcing China',
}

const Header = () => {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-brand-sky text-brand-blue' : 'text-slate-700 hover:bg-slate-100 hover:text-brand-blue'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 text-slate-900 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-brand-navy" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-navy text-sm font-bold text-white">SS</span>
          <span>
            <span className="block text-base font-semibold leading-5">SSourcing China</span>
            <span className="block text-xs font-medium text-slate-500">Sourcing agent in China</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, path]) => (
            <NavLink key={path} to={path} className={navLinkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-navy lg:inline-flex"
        >
          Get a Free Sourcing Quote
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 text-slate-900 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navItems.map(([label, path]) => (
              <NavLink key={path} to={path} className={navLinkClass} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

const Footer = () => (
  <footer className="bg-brand-navy py-12 text-white">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
      <div>
        <h2 className="text-xl font-semibold text-white">SSourcing China</h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
          China-based sourcing agent helping overseas buyers find suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
        </p>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-sky">Services</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          <li>Supplier sourcing</li>
          <li>Factory verification</li>
          <li>Quality inspection</li>
          <li>Shipping coordination</li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-sky">Start</h3>
        <p className="mt-4 text-sm leading-6 text-slate-200">Ready to discuss your sourcing project?</p>
        <Link to="/contact" className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-sky">
          Get a Free Sourcing Quote
        </Link>
      </div>
    </div>
    <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs text-slate-300 sm:px-6 lg:px-8">
      © 2026 SSourcing China. Professional China sourcing support for global buyers.
    </div>
  </footer>
)

const PreviewRouteBridge = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

const AppShell = () => {
  const location = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    document.title = pageTitles[location.pathname] || pageTitles['/']
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900">
      <PreviewRouteBridge />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

const App = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
)

export default App
