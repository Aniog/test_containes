import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Links */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          <Link to="/shop" className="text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors">Shop</Link>
          <Link to="/shop" className="text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors">Collections</Link>
          <Link to="/about" className="text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors">About</Link>
        </nav>

        {/* Logo */}
        <div className="flex-1 text-center md:flex-none">
          <Link to="/" className="font-serif text-2xl tracking-widest text-foreground hover:opacity-80 transition-opacity uppercase">
            Velmora
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center justify-end gap-6 flex-1">
          <button className="text-foreground hover:text-primary transition-colors" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <button className="text-foreground hover:text-primary transition-colors relative" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span className="absolute -top-1 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 flex items-center justify-center rounded-full leading-none">0</span>
          </button>
        </div>
      </div>
    </header>
  )
}