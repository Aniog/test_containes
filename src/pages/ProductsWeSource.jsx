import React from 'react';
import { ArrowRight, ShoppingBag, Cable, Cpu, Sofa, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsWeSource = () => {
  const categories = [
    {
      id: "electronics",
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "Consumer Electronics",
      desc: "Smart home devices, audio equipment, wearables, and accessories. We have strict QC protocols for electronic components and battery safety.",
      items: ["TWS Earbuds & Headphones", "Smart Watches", "Power Banks & Chargers", "Phone Accessories"]
    },
    {
      id: "home-appliance",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Home Appliances",
      desc: "Kitchen gadgets, personal care items, and small home appliances complying with CE/RoHS/UL standards.",
      items: ["Air Purifiers & Humidifiers", "Coffee Makers", "Robot Vacuums", "Hair Dryers & Stylers"]
    },
    {
      id: "furniture",
      icon: <Sofa className="w-8 h-8 text-blue-600" />,
      title: "Home & Furniture",
      desc: "Indoor/outdoor furniture, home decor, and textiles. We help manage large volumetrics and ensure packaging survives international transit.",
      items: ["Office Chairs & Desks", "Outdoor Patio Sets", "Storage & Organization", "Home Decor Items"]
    },
    {
      id: "industrial",
      icon: <Cable className="w-8 h-8 text-blue-600" />,
      title: "Industrial & Hardware",
      desc: "Tools, machinery parts, building materials, and commercial equipment sourced from specialized industrial zones.",
      items: ["Hand & Power Tools", "LED Commercial Lighting", "Packaging Materials", "Machinery Components"]
    },
    {
       id: "apparel",
       icon: <ShoppingBag className="w-8 h-8 text-blue-600" />,
       title: "Apparel & Accessories",
       desc: "Clothing, bags, sportswear, and fashion accessories. We handle fabric sourcing, prototyping, and size scaling.",
       items: ["Activewear & Yoga", "Backpacks & Luggage", "Corporate Wear", "Sustainable Fashion"]
     }
  ];

  return (
    <div className="flex flex-col">
       {/* Header */}
       <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Products We Source</h1>
          <p id="products-page-desc" className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our strong network in manufacturing hubs (Guangdong, Zhejiang, Jiangsu) allows us to source a wide variety of goods securely.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
               <div key={cat.id} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition">
                  <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    {cat.icon}
                  </div>
                  <h3 id={`cat-${cat.id}-title`} className="text-2xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                  <p id={`cat-${cat.id}-desc`} className="text-slate-600 mb-6">{cat.desc}</p>
                  <ul className="space-y-2 mb-8">
                     {cat.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-slate-700 text-sm font-medium">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></div>
                           {item}
                        </li>
                     ))}
                  </ul>
                  <img 
                    data-strk-img-id={`cat-img-${cat.id}`}
                    data-strk-img={`[cat-${cat.id}-desc] [cat-${cat.id}-title] products`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    alt={cat.title}
                    className="w-full h-48 object-cover rounded-lg"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
               </div>
            ))}

            {/* Custom Request Box */}
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-800 text-white flex flex-col justify-center">
                 <h3 className="text-2xl font-bold mb-3">Looking for something else?</h3>
                 <p className="text-slate-300 mb-6">We source custom products, heavy machinery, OEM/ODM items and more. Just tell us your specs.</p>
                 <Link to="/contact" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-slate-100 transition">
                    Send Custom Request <ArrowRight className="ml-2 w-4 h-4" />
                 </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsWeSource;