import React, { useEffect, useRef } from 'react';
import { ShoppingBag, Shirt, Tv, MonitorPlay, Sofa, Package } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { Link } from 'react-router-dom';

const ProductsWeSource = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current);
  }, []);

  const categories = [
    {
      id: "electronics",
      title: "Consumer Electronics",
      description: "Smartphones, wearables, smart home devices, audio equipment, and computer accessories.",
      icon: <MonitorPlay className="w-8 h-8 text-primary" />
    },
    {
      id: "home-appliance",
      title: "Home Appliances",
      description: "Kitchen appliances, cleaning devices, environmental control, and personal care electronics.",
      icon: <Tv className="w-8 h-8 text-primary" />
    },
    {
      id: "apparel",
      title: "Apparel & Textiles",
      description: "Clothing, sportswear, uniforms, fabrics, and accessories with custom OEM/ODM options.",
      icon: <Shirt className="w-8 h-8 text-primary" />
    },
    {
      id: "furniture",
      title: "Furniture & Decor",
      description: "Indoor/outdoor furniture, home decor items, lighting fixtures, and office furniture.",
      icon: <Sofa className="w-8 h-8 text-primary" />
    },
    {
      id: "toys",
      title: "Toys & Baby Products",
      description: "Educational toys, plush toys, baby care items, and strollers meeting international safety standards.",
      icon: <Package className="w-8 h-8 text-primary" />
    },
    {
      id: "bags",
      title: "Bags & Luggage",
      description: "Backpacks, handbags, travel luggage, and eco-friendly packaging materials.",
      icon: <ShoppingBag className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div ref={containerRef} className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 id="products-header" className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
          <p id="products-subheader" className="text-xl text-slate-300">
            With over 10 years of experience, we've built strong relationships with top-tier manufacturers across various industries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group">
                <div className="relative h-48 bg-slate-200 overflow-hidden">
                  <img 
                    data-strk-img-id={`cat-img-${category.id}`}
                    data-strk-img={`[cat-title-${category.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
                    {category.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={`cat-title-${category.id}`} className="text-2xl font-bold mb-3">{category.title}</h3>
                  <p id={`cat-desc-${category.id}`} className="text-slate-600">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-xl border border-primary/20 text-center max-w-3xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Don't see your product category?</h3>
            <p className="text-slate-600 mb-6">
              Our sourcing capability is not limited to the categories above. We can source custom OEM/ODM products across almost any industry in China.
            </p>
            <Link to="/contact" className="text-primary font-bold hover:underline inline-flex items-center">
              Send us your product specs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsWeSource;