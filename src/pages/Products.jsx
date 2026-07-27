import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Package, Smartphone, Home, Shirt, Car, Cpu } from 'lucide-react';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      title: "Consumer Electronics",
      icon: <Smartphone className="w-8 h-8 text-blue-600 mb-4" />,
      desc: "Smartphones accessories, audio devices, smart home gadgets, and wearables.",
      imgId: "prod-electronics-01"
    },
    {
      title: "Home & Garden",
      icon: <Home className="w-8 h-8 text-blue-600 mb-4" />,
      desc: "Furniture, decor, kitchenware, and outdoor living products.",
      imgId: "prod-home-02"
    },
    {
      title: "Apparel & Accessories",
      icon: <Shirt className="w-8 h-8 text-blue-600 mb-4" />,
      desc: "Clothing, bags, shoes, and fashion accessories (OEM/ODM).",
      imgId: "prod-apparel-03"
    },
    {
      title: "Auto Parts",
      icon: <Car className="w-8 h-8 text-blue-600 mb-4" />,
      desc: "Aftermarket parts, car accessories, and vehicle electronics.",
      imgId: "prod-auto-04"
    },
    {
      title: "Industrial Components",
      icon: <Cpu className="w-8 h-8 text-blue-600 mb-4" />,
      desc: "Machinery parts, hardware, tools, and industrial materials.",
      imgId: "prod-industrial-05"
    },
    {
      title: "Packaging & Printing",
      icon: <Package className="w-8 h-8 text-blue-600 mb-4" />,
      desc: "Custom boxes, bags, labels, and eco-friendly packaging solutions.",
      imgId: "prod-packaging-06"
    }
  ];

  return (
    <div ref={containerRef}>
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" id="prod-page-title">Products We Source</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" id="prod-page-subtitle">
            Our extensive supplier network spans across multiple industries in China's major manufacturing hubs.
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group">
              <div className="aspect-[16/9] relative bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[prod-cat-title-${i}] product manufacturing`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                {cat.icon}
                <h3 className="text-xl font-bold text-slate-900 mb-2" id={`prod-cat-title-${i}`}>{cat.title}</h3>
                <p className="text-slate-600">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Don't see your category?</h3>
            <p className="text-slate-300 text-lg max-w-2xl">
              We can source almost any legal product. Our sourcing specialists are adept at finding niche manufacturers.
            </p>
          </div>
          <a
            href="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-slate-100 transition whitespace-nowrap"
          >
            Ask Us About Your Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;