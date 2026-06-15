import React from 'react';
import { Smartphone, Laptop, Sofa, Shirt, Hammer, Package } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Consumer Electronics",
      description: "Audio devices, wearable tech, smart home appliances, mobile accessories.",
      image: "consumer electronics manufacturing china",
      imgId: "prod-cat-1"
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Industrial & Tools",
      description: "Machinery parts, power tools, construction hardware, metal fabrication.",
      image: "industrial machinery factory china",
      imgId: "prod-cat-2"
    },
    {
      icon: <Sofa className="h-8 w-8" />,
      title: "Furniture & Home",
      description: "Modern furniture, kitchenware, home decor, garden supplies.",
      image: "modern furniture factory showroom china",
      imgId: "prod-cat-3"
    },
    {
      icon: <Shirt className="h-8 w-8" />,
      title: "Apparel & Textiles",
      description: "Fashion garments, sportswear, home textiles, eco-friendly fabrics.",
      image: "textile factory garment production china",
      imgId: "prod-cat-4"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Toys & Baby Products",
      description: "Educational toys, baby gear, plush toys, outdoor play sets.",
      image: "toy factory production line china",
      imgId: "prod-cat-5"
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Office Supplies",
      description: "Stationery, office gadgets, ergonomic chairs, presentation tools.",
      image: "office supplies stationery production china",
      imgId: "prod-cat-6"
    }
  ];

  return (
    <div className="bg-slate-50">
      {/* Header */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Products We Source</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">While we can source almost any product, we have specialized expertise in these core categories.</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-56 relative overflow-hidden">
                  <img 
                    data-strk-img-id={cat.imgId}
                    data-strk-img={cat.image}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md text-blue-900">
                    {cat.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                  <p className="text-slate-600 mb-6">{cat.description}</p>
                  <button className="text-blue-900 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                    Inquire for Sourcing <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-900 rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Don't see your product category here?</h2>
              <p className="text-blue-100 text-lg">Our network spans across thousands of manufacturers in various industries. We handle complex custom OEM/ODM projects as well.</p>
            </div>
            <NavLink to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg">
              Check Product Availability
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
