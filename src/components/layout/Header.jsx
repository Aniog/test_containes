import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-slate-900 tracking-tight">
          SSourcing<span className="text-blue-600">China</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Services</Link>
          <Link to="/how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">How It Works</Link>
          <Link to="/products" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Products</Link>
          <Link to="/case-studies" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Case Studies</Link>
          <Link to="/contact">
            <Button>Get a Quote</Button>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}
