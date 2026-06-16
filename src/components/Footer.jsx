import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="text-xl font-bold tracking-tight text-white uppercase inline-block mb-6">
            ARTITECT <span className="font-light text-amber-500">MACHINERY</span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400 max-w-md">
            Pioneering elegant, robust, and user-friendly sheet metal folding machinery. We build equipment that powers modern manufacturing with precision and power.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Equipment</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#products" className="hover:text-amber-500 transition-colors">Double Folding Machines</a></li>
            <li><a href="#products" className="hover:text-amber-500 transition-colors">Double Folders</a></li>
            <li><a href="#products" className="hover:text-amber-500 transition-colors">Sheet Metal Folders</a></li>
            <li><a href="#products" className="hover:text-amber-500 transition-colors">Metal Folding Machines</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li>123 Industrial Way</li>
            <li>Manufacturing Hub, NY 10001</li>
            <li>info@artitectmachinery.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
        &copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;