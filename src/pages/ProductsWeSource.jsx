import React from 'react';
import { Home as HomeIcon, Smartphone, Shirt, Package, Heart, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsWeSource = () => {
  const categories = [
    {
      id: "electronics",
      title: "Consumer Electronics",
      icon: <Smartphone className="w-6 h-6" />,
      desc: "Smartphones accessories, audio equipment, smart home devices, and wearables.",
      imgQuery: "consumer electronics smart devices gadget",
      examples: ["Bluetooth Speakers", "Smartwatches", "Phone Cases & Chargers", "Home Security Cameras"]
    },
    {
      id: "home-kitchen",
      title: "Home & Kitchen",
      icon: <HomeIcon className="w-6 h-6" />,
      desc: "Furniture, kitchenware, decor, and small household appliances.",
      imgQuery: "modern home kitchenware furniture",
      examples: ["Stainless Steel Cookware", "Ergonomic Office Chairs", "LED Lighting Fixtures", "Storage Solutions"]
    },
    {
      id: "apparel",
      title: "Apparel & Textiles",
      icon: <Shirt className="w-6 h-6" />,
      desc: "Clothing, bags, sportswear, and industrial fabrics.",
      imgQuery: "apparel clothing textiles manufacturing",
      examples: ["Activewear (Yoga/Gym)", "Custom Branded Bags", "Sustainable Cotton T-shirts", "Winter Jackets"]
    },
    {
      id: "packaging",
      title: "Custom Packaging",
      icon: <Package className="w-6 h-6" />,
      desc: "Eco-friendly packaging, custom retail boxes, and shipping materials.",
      imgQuery: "custom product packaging cardboard boxes",
      examples: ["Corrugated Mailer Boxes", "Custom Printed Poly Mailers", "Biodegradable Inserts", "Retail Display Boxes"]
    },
    {
      id: "health-beauty",
      title: "Health & Beauty",
      icon: <Heart className="w-6 h-6" />,
      desc: "Skincare tools, cosmetics packaging, and personal care devices.",
      imgQuery: "health beauty tools cosmetics packaging",
      examples: ["Facial Cleansing Brushes", "Bamboo Makeup Brushes", "Custom Glass Dropper Bottles", "Massage Guns"]
    },
    {
      id: "industrial",
      title: "Industrial & Hardware",
      icon: <Factory className="w-6 h-6" />,
      desc: "Machinery parts, tools, building materials, and auto accessories.",
      imgQuery: "industrial hardware tools manufacturing parts",
      examples: ["CNC Machined Parts", "Hand Tools Sets", "LED Work Lights", "Automotive Fasteners"]
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Products We Source</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Leveraging China's vast manufacturing ecosystem. If it can be made, we can find the factory to make it.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Expertise Across Major Industries</h2>
            <p className="text-lg text-slate-600">
               While we can source almost any product, we have developed deep supply chain networks and specialized knowledge in several key categories. We know where the best industry clusters are located and how to negotiate the best terms within them.
            </p>
        </div>
      </section>

      {/* Grid of Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200">
                <div className="aspect-[16/9] relative">
                  <img 
                    data-strk-img-id={`cat-${category.id}`}
                    data-strk-img={category.imgQuery}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 flex items-center text-white">
                      <div className="mr-3 p-2 bg-blue-600 rounded-lg">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">{category.desc}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Commonly Sourced:</h4>
                    <ul className="space-y-1">
                      {category.examples.map((item, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start">
                          <span className="text-blue-500 mr-2">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't see your product? */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Don't see your product category?</h2>
          <p className="text-lg text-slate-600 mb-8">
            The list above is just a sample. From specialized medical equipment to niche promotional items, our sourcing experts have the skills to find qualified manufacturers for virtually any physical product.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-colors"
          >
            Ask Us About Your Product
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ProductsWeSource;