import React from 'react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: "electronics",
      title: "Consumer Electronics",
      desc: "Smart home devices, audio, wearables, and PC accessories from Shenzhen's vast electronics hub."
    },
    {
      id: "home-kitchen",
      title: "Home & Kitchen",
      desc: "Kitchenware, small appliances, storage solutions, and home decor from specialized manufacturing clusters."
    },
    {
      id: "apparel",
      title: "Apparel & Textiles",
      desc: "Garments, activewear, fabrics, and accessories with connections to premier textile factories."
    },
    {
      id: "hardware",
      title: "Hardware & Tools",
      desc: "Hand tools, power accessories, construction hardware, and precision machinery parts."
    },
    {
      id: "outdoor",
      title: "Outdoor & Sports",
      desc: "Camping gear, fitness equipment, sporting goods, and outdoor furniture."
    },
    {
      id: "packaging",
      title: "Custom Packaging",
      desc: "Retail boxes, eco-friendly mailers, labels, and customized branded packaging solutions."
    }
  ];

  return (
    <div className="bg-slate-50 py-16" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Products We Source</h1>
          <p className="text-xl text-slate-600">
            Backed by a network of over 2,000 verified factories across China's major industrial belts, 
            we can source nearly any consumer or commercial product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  data-strk-img-id={`prod-cat-${cat.id}`}
                  data-strk-img={`${cat.title} manufacturing products`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                <p className="text-slate-600 mb-4">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl mx-auto font-bold mb-4">Don't see your product category?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            We excel at custom manufacturing and complex, multi-component products. 
            Send us your tech pack or specifications and we'll find the right factory.
          </p>
          <Link to="/contact" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-block">
            Inquire About Your Product
          </Link>
        </div>
      </div>
    </div>
  );
}