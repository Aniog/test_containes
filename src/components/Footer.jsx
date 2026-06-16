import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">ARTITECT<span className="text-blue-400"> MACHINERY</span></h3>
            <p className="text-sm text-gray-400 max-w-sm mb-6 leading-relaxed">
              Premium sheet metal folding machines and double folders designed for performance, precision, and durability. Build better with Artitect.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-gray-400 block">Email:</span>
                <span className="ml-2 text-white">sales@artitectmachinery.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 block">Phone:</span>
                <span className="ml-2 text-white">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Artitect Machinery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
