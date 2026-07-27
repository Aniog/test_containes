import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Header() {
  const routes = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/products-we-source", label: "Products" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-blue-900">
            SSourcing China
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {routes.map((route, i) => (
            <Link
              key={i}
              to={route.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-900"
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route, i) => (
                  <Link
                    key={i}
                    to={route.href}
                    className="block px-2 py-1 text-lg font-medium"
                  >
                    {route.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block px-2 py-1 text-lg font-medium text-blue-600"
                >
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}