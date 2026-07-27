import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Products', path: '/products' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-primary">
          <span className="text-xl font-extrabold tracking-tight">SSourcing China</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path) ? 'text-primary' : 'text-slate-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button asChild className="bg-accent hover:bg-accent/90 text-white">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-slate-700" />
        </button>
      </div>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen} side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-medium ${
                isActive(link.path) ? 'text-primary' : 'text-slate-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-4 bg-accent hover:bg-accent/90 text-white">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              Get a Free Sourcing Quote
            </Link>
          </Button>
        </nav>
      </Sheet>
    </header>
  )
}
