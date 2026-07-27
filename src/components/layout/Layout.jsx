import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">SSourcing China</Link>
          <nav className="flex gap-6">
            <Link to="/services">Services</Link>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/products">Products We Source</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-gray-500">
          © {new Date().getFullYear()} SSourcing China. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
