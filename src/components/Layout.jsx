import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 flex flex-col">
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-sm"></div>
            <span className="font-bold text-xl tracking-tight text-neutral-900">ARTITECT</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium hover:text-blue-600 transition-colors text-blue-600">Home</a>
            <a href="#products" className="text-sm font-medium hover:text-blue-600 transition-colors">Products</a>
            <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About Us</a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
             <a href="#contact" className="hidden lg:inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">Get Quote</a>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-neutral-900 text-neutral-300 py-12 lg:py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
                    <span className="font-bold text-lg text-white">ARTITECT</span>
                </div>
                <p className="text-sm text-neutral-400">
                    Precision engineering for modern manufacturing. Specializing in advanced double folding machines and sheet metal folders.
                </p>
            </div>
            <div>
                <h4 className="font-semibold text-white mb-4">Products</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#products" className="hover:text-white transition-colors">Double Folding Machines</a></li>
                    <li><a href="#products" className="hover:text-white transition-colors">Sheet Metal Folders</a></li>
                    <li><a href="#products" className="hover:text-white transition-colors">Custom Solutions</a></li>
                </ul>
            </div>
            <div>
                 <h4 className="font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#about" className="hover:text-white transition-colors">About Artitect</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Global Network</a></li>
                    <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-white mb-4">Contact Info</h4>
                <ul className="space-y-2 text-sm">
                    <li>sales@artitectmachinery.com</li>
                    <li>+1 (555) 123-4567</li>
                    <li>100 Industrial Parkway, <br/>Innovation City, CA 90210</li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-neutral-800 text-sm text-center text-neutral-500">
            &copy; 2026 Artitect Machinery. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;