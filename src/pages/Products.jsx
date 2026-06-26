import React from 'react';
import { Package, Smartphone, Home as HomeIcon, Shirt, Hammer, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';


const categories = [
  { name: "Electronics & Tech", icon: Smartphone, items: ["Mobile Accessories", "Consumer Electronics", "Computer Hardware", "Home Appliances"] },
  { name: "Furniture & Decor", icon: HomeIcon, items: ["Office Furniture", "Home Furniture", "Outdoor Gear", "Home Textiles"] },
  { name: "Apparel & Textiles", icon: Shirt, items: ["Fashion Apparel", "Workwear", "Fabric & Raw Materials", "Footwear"] },
  { name: "Industrial Goods", icon: Hammer, items: ["Machinery Parts", "Hardware Tools", "Construction Materials", "Electrical Components"] },
  { name: "Consumer Goods", icon: Coffee, items: ["Kitchenware", "Pet Supplies", "Personal Care", "Stationery"] },
  { name: "Packaging", icon: Package, items: ["Eco-friendly Packaging", "Retail Boxes", "Shipping Cartons", "Custom Labels"] }
];

const Products = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            With thousands of suppliers in our database, we can source almost any physical product manufactured in China.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
                <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-8 text-white">
                  <cat.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{cat.name}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center bg-blue-50 py-16 px-8 rounded-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Don't see your category?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-lg">
              Our sourcing network is vast. If it's made in China, we can find a reliable manufacturer for you. Send us your specs and let us do the heavy lifting.
            </p>
            <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-md font-bold text-xl inline-block transition-transform hover:scale-105 shadow-xl">
              Inquire About Your Product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
