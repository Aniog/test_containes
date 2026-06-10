import React from 'react';
import { Smartphone, Home as HomeIcon, Shirt, ChefHat, Palette, Cog, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    { name: "Consumer Electronics", icon: <Smartphone />, items: ["Mobile Accessories", "Portable Audio", "Smart Home Devices"] },
    { name: "Home & Furniture", icon: <HomeIcon />, items: ["Living Room Furniture", "Office Chairs", "Home Decor"] },
    { name: "Apparel & Textiles", icon: <Shirt />, items: ["Activewear", "Promotional Clothing", "Home Textiles"] },
    { name: "Kitchen & Dining", icon: <ChefHat />, items: ["Kitchenware", "Bakeware", "Tabletop Accessories"] },
    { name: "Toys & Hobbies", icon: <Palette />, items: ["Educational Toys", "Wooden Toys", "Outdoor Play"] },
    { name: "Industrial Parts", icon: <Cog />, items: ["Metal Fabrication", "Injection Molding", "Electronic Components"] }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Products We Source</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">We have an extensive network of verified suppliers across diverse industries. If it's made in China, we can source it.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((cat, idx) => (
              <div key={idx} className="group">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-8 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    {React.cloneElement(cat.icon, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{cat.name}</h3>
                  <ul className="space-y-4 mb-8">
                    {cat.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-slate-600 flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                         {item}
                      </li>
                    ))}
                  </ul>
                  <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                    <img 
                      data-strk-img-id={`cat-img-${idx}`}
                      data-strk-img={`china manufacturing ${cat.name} product professional factory`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Need Something Not Listed?</h2>
            <p className="text-slate-400 text-lg mb-0 leading-relaxed">Our sourcing capabilities extend far beyond these main categories. From specialized industrial machinery to custom promotional items, our team can find the right factory for your niche.</p>
          </div>
          <div className="lg:w-auto">
            <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/10">
              Inquire About My Product <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
EOF > /workspace/my-app/src/pages/Products.jsx
import React from 'react';
import { Smartphone, Home as HomeIcon, Shirt, ChefHat, Palette, Cog, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    { name: "Consumer Electronics", icon: <Smartphone />, items: ["Mobile Accessories", "Portable Audio", "Smart Home Devices"] },
    { name: "Home & Furniture", icon: <HomeIcon />, items: ["Living Room Furniture", "Office Chairs", "Home Decor"] },
    { name: "Apparel & Textiles", icon: <Shirt />, items: ["Activewear", "Promotional Clothing", "Home Textiles"] },
    { name: "Kitchen & Dining", icon: <ChefHat />, items: ["Kitchenware", "Bakeware", "Tabletop Accessories"] },
    { name: "Toys & Hobbies", icon: <Palette />, items: ["Educational Toys", "Wooden Toys", "Outdoor Play"] },
    { name: "Industrial Parts", icon: <Cog />, items: ["Metal Fabrication", "Injection Molding", "Electronic Components"] }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Products We Source</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">We have an extensive network of verified suppliers across diverse industries. If it's made in China, we can source it.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((cat, idx) => (
              <div key={idx} className="group">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-8 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    {React.cloneElement(cat.icon, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{cat.name}</h3>
                  <ul className="space-y-4 mb-8">
                    {cat.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-slate-600 flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                         {item}
                      </li>
                    ))}
                  </ul>
                  <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-100">
                    <img 
                      data-strk-img-id={`cat-img-${idx}`}
                      data-strk-img={`china manufacturing ${cat.name} product professional factory`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Need Something Not Listed?</h2>
            <p className="text-slate-400 text-lg mb-0 leading-relaxed">Our sourcing capabilities extend far beyond these main categories. From specialized industrial machinery to custom promotional items, our team can find the right factory for your niche.</p>
          </div>
          <div className="lg:w-auto">
            <Link to="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/10">
              Inquire About My Product <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
