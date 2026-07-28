import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetBody } from '@/components/ui/sheet'
import { navLinks, siteConfig } from '@/data/siteData'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (href) => location.pathname === href

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">SSourcing</span>
          <span className="text-xl font-semibold text-gray-900">China</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.href) ? 'text-primary' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button variant="cta" asChild>
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetClose onClick={() => setMobileOpen(false)} />
          </SheetHeader>
          <SheetBody>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 ${
                    isActive(link.href) ? 'bg-primary-light text-primary-dark' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Button variant="outline" asChild className="w-full justify-center">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link>
              </Button>
              <Button variant="cta" asChild className="w-full justify-center">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Get a Free Sourcing Quote</Link>
              </Button>
            </div>
          </SheetBody>
        </SheetContent>
      </Sheet>
    </header>
  )
}
