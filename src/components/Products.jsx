import React from 'react';
import { ChevronRight, Drill, Settings, Shield } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: "pro-folder",
      name: "Artitect ProFolder X1",
      description: "Our flagship double folding machine designed for high-volume automated production.",
      imageKeyword: "industrial sheet metal folding machine",
      features: ["Auto-adjustable clamping", "Touchscreen CNC Control", "10ft working length"]
    },
    {
      id: "compact-folder",
      name: "Artitect Compact C-200",
      description: "Elegant, space-saving double folder perfect for specialized workshops and precise custom jobs.",
      imageKeyword: "compact metal folder machinery",
      features: ["Ergonomic design", "Quick-change tooling", "Ultra-precise bending"]
    },
    {
      id: "heavy-duty",
      name: "Artitect TitanFold H.D.",
      description: "Heavy-duty sheet metal folding machine capable of handling thick gauge materials with ease.",
      imageKeyword: "heavy duty metal folding equipment",
      features: ["Hydraulic power system", "Reinforced frame", "Extended durability"]
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Machines</h2>
          <p id="products-section-subtitle" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of advanced double folding and sheet metal bending machines, engineered for perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  data-strk-img-id={`product-img-${product.id}`}
                  data-strk-img={`[product-title-${product.id}] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src={`https://source.unsplash.com/600x400/?${product.imageKeyword.replace(/ /g, ',')}`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600&h=400";
                  }}
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 id={`product-title-${product.id}`} className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p id={`product-desc-${product.id}`} className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                
                <ul className="mb-8 space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <ChevronRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a href="#contact" className="inline-block w-full text-center bg-gray-900 hover:bg-black text-white py-3 rounded-md font-medium transition-colors">
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;