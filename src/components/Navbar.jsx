import { Link, useLocation } from "react-router-dom";
import { Mail, Users } from "lucide-react";

export function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      location.pathname === path
        ? "bg-primary text-primary-foreground"
        : "text-foreground/70 hover:bg-accent hover:text-foreground"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-foreground">
          <Mail className="h-5 w-5" />
          ContactKeeper
        </Link>
        <div className="flex items-center gap-2">
          <Link to="/" className={linkClass("/")}>
            <Mail className="h-4 w-4" />
            Contact Form
          </Link>
          <Link to="/contacts" className={linkClass("/contacts")}>
            <Users className="h-4 w-4" />
            Saved Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
}
