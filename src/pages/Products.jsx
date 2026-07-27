import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    { name: "Electronics & Components", items: ["Consumer electronics", "PCB assemblies", "Power supplies", "Cables & connectors", "LED lighting"] },
    { name: "Home & Kitchen", items: ["Kitchen appliances", "Cookware & bakeware", "Home textiles", "Storage solutions", "Furniture hardware"] },
    { name: "Apparel & Textiles", items: ["Garments & clothing", "Fabric & materials", "Home textiles", "Accessories", "Workwear & uniforms"] },
    { name: "Industrial Equipment", items: ["Machinery parts", "Tools & hardware", "Safety equipment", "Material handling", "Packaging machinery"] },
    { name: "Consumer Goods", items: ["Toys & games", "Sports equipment", "Personal care", "Pet products", "Seasonal items"] },
    { name: "Packaging Materials", items: ["Custom boxes", "Labels & tags", "Protective packaging", "Retail displays", "Shipping supplies"] }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 rounded flex items-center justify-center"><span className="text-white font-semibold text-lg">SS</span></div>
            <span className="font-semibold text-xl text-slate-900">SSourcing China</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/services" className="text-slate-600 hover:text-slate-900">Services</Link>
            <Link to="/how-it-works" className="text-slate-600 hover:text-slate-900">How It Works</Link>
            <Link to="/products" className="text-slate-900 font-medium">Products</Link>
            <Link to="/case-studies" className="text-slate-600 hover:text-slate-900">Case Studies</Link>
            <Link to="/blog" className="text-slate-600 hover:text-slate-900">Blog</Link>
            <Link to="/contact" className="text-slate-600 hover:text-slate-900">Contact</Link>
          </div>
          <Link to="/contact" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded hover:bg-slate-800">Get a Free Quote</Link>
        </div>
      </nav>

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-slate-400 tracking-widest mb-3">PRODUCT RANGE</div>
          <h1 className="text-4xl font-semibold mb-4">Products We Source</h1>
          <p className="text-xl text-slate-300">We source across diverse categories with established supplier networks in each sector.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl p-10">
              <h3 className="text-xl font-semibold mb-6 text-slate-900">{cat.name}</h3>
              <ul className="grid grid-cols-1 gap-y-3 text-sm text-slate-600">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center"><span className="text-emerald-600 mr-3">•</span>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center bg-slate-50 rounded-2xl p-12">
          <h3 className="text-xl font-semibold mb-3 text-slate-900">Don't see your product category?</h3>
          <p className="text-slate-600 mb-6">We work across many additional categories. Contact us to discuss your specific sourcing needs.</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800">Discuss Your Requirements</Link>
        </div>
      </div>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-sm flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0"><div className="w-7 h-7 bg-white/10 rounded flex items-center justify-center"><span className="text-white text-xs font-semibold">SS</span></div><span>SSourcing China</span></div>
          <div>© {new Date().getFullYear()} SSourcing China. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Products;