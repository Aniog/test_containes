import React from 'react';
import { Package, Smartphone, Home, Coffee, Watch, Car, Check } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Electronics & Gadgets",
      items: ["Smartphone Accessories", "Bluetooth Speakers", "Smart Home Devices", "LED Displays"]
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Packaging & Printing",
      items: ["Custom Boxes", "Biodegradable Bags", "Glass Bottles", "Labels & Tags"]
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Home & Garden",
      items: ["Kitchenware", "Furniture", "Outdoor Tools", "Home Decor"]
    },
    {
      icon: <Coffee className="w-8 h-8 text-blue-600" />,
      title: "Apparel & Textiles",
      items: ["Sportswear", "T-shirts & Hoodies", "Bed Linens", "Fabrics"]
    },
    {
      icon: <Watch className="w-8 h-8 text-blue-600" />,
      title: "Fashion Accessories",
      items: ["Watches", "Leather Bags", "Jewelry", "Sunglasses"]
    },
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "Industrial Parts",
      items: ["Auto Parts", "Hardware Tools", "Plastic Injection Molds", "Valves & Fittings"]
    }
  ];

  return (
    <div className="bg-slate-50">
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Expertise Across Industries</h1>
            <p className="text-lg text-slate-600 leading-relaxed">We source from thousands of categories. Our experienced sourcing specialists understand the specific technical requirements and quality standards for diverse industries.</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-6">{cat.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-600">
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-blue-700 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Don't see your product here?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">We source virtually anything from China. Contact us with your specific requirements and we will find the right manufacturer for you.</p>
            <a href="/contact" className="inline-block px-10 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all">
              Request a Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
