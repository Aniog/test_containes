import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Products', href: '/products' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActive = (href) => location.pathname === href

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="SSourcing China home" className="flex items-center gap-2 text-foreground no-underline hover:no-underline">
          <span aria-hidden="true" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white font-bold text-sm">
            SS
          </span>
          <span className="text-lg font-bold tracking-tight">SSourcing China</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors no-underline hover:no-underline ${
                isActive(item.href)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+8613812345678" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 no-underline hover:no-underline">
            <Phone className="h-4 w-4" />
            +86 138 1234 5678
          </a>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link to="/contact?quote=true" className="no-underline hover:no-underline">Get a Free Quote</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-white p-0">
            <div className="flex h-16 items-center justify-between border-b px-4">
              <span className="font-bold">Menu</span>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" aria-label="Close menu">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>
            </div>
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    to={item.href}
                    className={`px-3 py-2.5 text-sm font-medium rounded-md no-underline hover:no-underline ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="border-t p-4">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/contact?quote=true" className="no-underline hover:no-underline">Get a Free Quote</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
