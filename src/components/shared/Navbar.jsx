import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-blue-800">
            SSourcing<span className="text-amber-500">.</span>China
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition hover:text-blue-800 ${
                pathname === link.href ? "text-blue-800" : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/contact?quote=true">Get a Free Sourcing Quote</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle className="text-left text-blue-800">
                SSourcing<span className="text-amber-500">.</span>China
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    to={link.href}
                    className={`text-base font-medium ${
                      pathname === link.href ? "text-blue-800" : "text-slate-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <Button asChild variant="outline">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild>
                  <Link to="/contact?quote=true">Get a Free Sourcing Quote</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
