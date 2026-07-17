import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-1 border-stone-800 pr-8">
            <h2 className="font-serif text-2xl tracking-widest uppercase text-white mb-6">Velmora</h2>
            <p className="text-sm leading-relaxed mb-6 font-light">Fine jewelry designed to be lived in, loved, and passed down. Editorial elegance for everyday wear.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Pinterest</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-white mb-6">Shop</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/collection" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Earrings</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Necklaces</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Huggies</Link></li>
              <li><Link to="/collection" className="hover:text-primary transition-colors">Best Sellers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-white mb-6">Help</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ring Size Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-wide text-stone-500">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
