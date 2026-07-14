import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users } from "lucide-react"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <MessageSquare className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">Reachly</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
          <Link to="/contacts">
            <Button variant="outline" size="sm" className="gap-2">
              <Users className="h-4 w-4" />
              View Contacts
            </Button>
          </Link>
        </nav>

        <Link to="/contacts" className="md:hidden">
          <Button variant="outline" size="sm" className="gap-2">
            <Users className="h-4 w-4" />
            Contacts
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
