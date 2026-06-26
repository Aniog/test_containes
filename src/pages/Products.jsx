import React from 'react';
import { Smartphone, Home, Shirt, Utensils, Bike, Settings, Luggage, Briefcase, Zap } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: "Electronics & Tech",
      icon: <Smartphone className="w-8 h-8" />,
      items: ["Smart Home Devices", "Phone Accessories", "TWS Earbuds", "Consumer Electronics", "PC Components", "Wearables"],
      img: "modern electronics and gadgets on desk",
      id: "cat-electronics"
    },
    {
      name: "Home & Garden",
      icon: <Home className="w-8 h-8" />,
      items: ["Furniture", "Home Decor", "Gardening Tools", "Cleaning Equipment", "Storage Solutions", "Textiles"],
      img: "modern living room interior with furniture",
      id: "cat-home"
    },
    {
      name: "Apparel & Fashion",
      icon: <Shirt className="w-8 h-8" />,
      items: ["Menswear", "Womenswear", "Activewear", "Children's Clothing", "Fabrics & Textiles", "Accessories"],
      img: "fashion clothing display in store",
      id: "cat-apparel"
    },
    {
      name: "Kitchen & Dining",
      icon: <Utensils className="w-8 h-8" />,
      items: ["Cookware", "Tableware", "Kitchen Appliances", "Bakeware", "Cutlery", "Coffee Accessories"],
      img: "stainless steel kitchen utensils and appliances",
      id: "cat-kitchen"
    },
    {
      name: "Sports & Outdoors",
      icon: <Bike className="w-8 h-8" />,
      items: ["Fitness Equipment", "Camping Gear", "Bicycles & E-bikes", "Yoga Accessories", "Fishing Tackle", "Outdoor Furniture"],
      img: "outdoor camping gear and equipment",
      id: "cat-sports"
    },
    {
      name: "Industrial & Hardware",
      icon: <Settings className="w-8 h-8" />,
      items: ["Machinery Parts", "Hand Tools", "Power Tools", "Fasteners", "Molds & Tooling", "Raw Materials"],
      img: "industrial machinery and precision parts",
      id: "cat-industrial"
    },
    {
      name: "Toys & Baby Products",
      icon: <Zap className="w-8 h-8" />,
      items: ["Educational Toys", "Baby Gear", "Plush Toys", "Outdoor Play", "Baby Clothing", "Strollers"],
      img: "colorful children toys and play area",
      id: "cat-toys"
    },
    {
      name: "Bags & Luggage",
      icon: <Luggage className="w-8 h-8" />,
      items: ["Backpacks", "Travel Suitcases", "Handbags", "Laptop Bags", "Wallets", "Custom Packaging"],
      img: "collection of stylish travel bags and luggage",
      id: "cat-bags"
    },
    {
      name: "Office & Stationery",
      icon: <Briefcase className="w-8 h-8" />,
      items: ["Office Supplies", "Writing Instruments", "Notebooks", "Paper Products", "Desk Organizers", "Gift Sets"],
      img: "organized office stationery and supplies",
      id: "cat-office"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Broad category expertise to help you find the right manufacturers for almost any product.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Your One-Stop Sourcing Hub</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Based in the heart of China’s manufacturing hubs, we have established relationships across thousands of factories in diverse industries. Whether you need a standard off-the-shelf product or a fully customized OEM solution, we have the network to make it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-200/50 group">
                <div className="h-48 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-110"
                    data-strk-bg-id={`cat-bg-${cat.id}`}
                    data-strk-bg={cat.img}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors" />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                      {cat.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{cat.name}</h3>
                  </div>
                  
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                    {cat.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-sm text-slate-500 flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM/ODM Support */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-[2rem] p-8 md:p-16 text-white relative overflow-hidden">
             {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display">Need Custom Products?</h2>
                <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                  We specialize in OEM and ODM projects. From initial prototyping to final mass production, we ensure your intellectual property is protected and your specifications are followed to the letter.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-white/20 p-2 rounded-lg h-fit">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">Custom Molds & Tooling</h4>
                      <p className="text-blue-100 text-sm">Working with technical factories for precision parts.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/20 p-2 rounded-lg h-fit">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">Rapid Prototyping</h4>
                      <p className="text-blue-100 text-sm">Faster iterations to get your product to market.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                   <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-blue-50 transition-colors">
                    Start Custom Project
                  </a>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-2xl skew-y-3">
                 <img 
                  data-strk-img-id="custom-manufacturing-img"
                  data-strk-img="Engineers reviewing custom product design on tablet in factory"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="OEM Manufacturing"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Concierge */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display">Specialized Product Request?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-12">
            Don't see your product category listed? No problem. Our expert sourcers can find almost any physical product manufactured in China.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-extrabold text-xl hover:underline">
            Let us find it for you <Search className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;

