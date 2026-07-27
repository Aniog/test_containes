import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Products", path: "/products" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
]

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold text-brand tracking-tight">SSourcing China</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-brand ${
                location.pathname === item.path ? "text-brand" : "text-slate-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => navigate("/contact")}>
            Get a Free Sourcing Quote
          </Button>
        </div>

        <button
          className="lg:hidden rounded-md p-2 text-slate-600 hover:bg-slate-100"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetClose onClick={() => setOpen(false)} />
          </SheetHeader>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  location.pathname === item.path ? "text-brand" : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="mt-4 w-full" onClick={() => { setOpen(false); navigate("/contact") }}>
              Get a Free Sourcing Quote
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="text-xl font-extrabold text-brand tracking-tight">SSourcing China</span>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Reliable China sourcing agent for global buyers. Supplier verification, quality control, and shipping coordination.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/services" className="hover:text-brand">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-brand">How It Works</Link></li>
              <li><Link to="/case-studies" className="hover:text-brand">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-brand">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/contact" className="hover:text-brand">Contact Us</Link></li>
              <li><Link to="/products" className="hover:text-brand">Products We Source</Link></li>
              <li><span className="hover:text-brand cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-brand cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>hello@ssourcingchina.com</li>
              <li>+86 755 1234 5678</li>
              <li>Shenzhen, Guangdong, China</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 text-sm text-slate-500 text-center md:text-left">
          © {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
