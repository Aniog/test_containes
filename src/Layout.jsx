import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/Sheet";
import { Separator } from "@/components/ui/Separator";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Products We Source", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                S<span className="text-blue-700">Sourcing</span> China
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-700",
                    location.pathname === link.href ? "text-blue-700" : "text-slate-600"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 md:flex">
              <Link to="/contact">
                <Button variant="primary">Get a Free Sourcing Quote</Button>
              </Link>
            </div>

            <div className="md:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col gap-6 pt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "text-base font-medium",
                          location.pathname === link.href ? "text-blue-700" : "text-slate-700"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link to="/contact" onClick={() => setMobileOpen(false)}>
                      <Button variant="primary" className="w-full">
                        Get a Free Sourcing Quote
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-white">
                S<span className="text-blue-400">Sourcing</span> China
              </h3>
              <p className="mt-4 text-sm text-slate-400">
                Your on-the-ground sourcing partner in China. We help global buyers find reliable
                suppliers, verify factories, control quality, and coordinate shipments.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link to="/services" className="hover:text-white">Supplier Sourcing</Link></li>
                <li><Link to="/services" className="hover:text-white">Factory Verification</Link></li>
                <li><Link to="/services" className="hover:text-white">Quality Inspection</Link></li>
                <li><Link to="/services" className="hover:text-white">Production Follow-Up</Link></li>
                <li><Link to="/services" className="hover:text-white">Shipping Coordination</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link to="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link to="/products" className="hover:text-white">Products We Source</Link></li>
                <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-blue-400" />
                  <span>Shenzhen & Yiwu, China</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <a href="mailto:hello@ssourcingchina.com" className="hover:text-white">hello@ssourcingchina.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <a href="tel:+8613812345678" className="hover:text-white">+86 138 1234 5678</a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-800" />

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}
