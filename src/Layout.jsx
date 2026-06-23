export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center flex-row px-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-primary">SSourcing China</span>
          </div>
          <nav className="hidden md:flex ml-auto items-center gap-6 text-sm font-medium">
            <a href="/" className="transition-colors hover:text-primary">Home</a>
            <a href="/services" className="transition-colors hover:text-primary">Services</a>
            <a href="/how-it-works" className="transition-colors hover:text-primary">How It Works</a>
            <a href="/products" className="transition-colors hover:text-primary">Products We Source</a>
            <a href="/case-studies" className="transition-colors hover:text-primary">Case Studies</a>
            <a href="/blog" className="transition-colors hover:text-primary">Blog</a>
            <a href="/contact" className="transition-colors hover:text-primary">Contact</a>
            <a href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Get a Quote</a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t bg-muted/40 py-12 md:py-16">
        <div className="container px-4 grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">SSourcing China</h3>
            <p className="text-sm text-muted-foreground">Your trusted B2B sourcing partner in China. We help global buyers find reliable suppliers, verify factories, and ensure quality.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/services" className="hover:text-primary">Our Services</a></li>
              <li><a href="/how-it-works" className="hover:text-primary">How It Works</a></li>
              <li><a href="/products" className="hover:text-primary">Products We Source</a></li>
              <li><a href="/case-studies" className="hover:text-primary">Case Studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/blog" className="hover:text-primary">Sourcing Blog</a></li>
              <li><a href="/faq" className="hover:text-primary">FAQ</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Guangzhou, Guangdong, China</li>
              <li>info@ssourcingchina.example.com</li>
              <li>+86 123 4567 8900</li>
            </ul>
          </div>
        </div>
        <div className="container px-4 mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
