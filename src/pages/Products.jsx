import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Box, Lamp, Camera, Monitor, Utensils, Scissors, Watch, Car, HardHat } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Layout from '@/Layout';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const categories = [
    { title: 'Consumer Electronics', icon: Monitor, products: ['Smart home devices', 'Portable chargers', 'Bluetooth headphones', 'Kitchen appliances'] },
    { title: 'Furniture & Home Decor', icon: Lamp, products: ['Office chairs', 'Outdoor patio sets', 'LED lighting', 'Storage solutions'] },
    { title: 'Industrial & Tools', icon: HardHat, products: ['Hand tools', 'Safety equipment', 'CNC parts', 'Packaging machinery'] },
    { title: 'Apparel & Textiles', icon: Scissors, products: ['Activewear', 'Eco-friendly fabrics', 'Home linens', 'Custom uniforms'] },
    { title: 'Outdoor & Sports', icon: Box, products: ['Camping gear', 'Fitness equipment', 'Bicycles', 'Yoga accessories'] },
    { title: 'Automotive Parts', icon: Car, products: ['Aftermarket accessories', 'Car electronics', 'Replacement parts', 'Cleaning tools'] }
  ];

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="bg-primary py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Products We Source</h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              With 12 years of experience, we have developed a deep supplier network across a wide range of industries in China.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white text-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, idx) => (
                <div key={idx} className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all group">
                  <div className="w-16 h-16 bg-blue-50 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                    <cat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>
                  <ul className="space-y-3 mb-8">
                    {cat.products.map((p, pIdx) => (
                      <li key={pIdx} className="flex gap-2 text-gray-600">
                        <span className="text-accent font-bold">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <NavLink to="/contact" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Inquiry for {cat.title} <ArrowRight className="h-4 w-4" />
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold mb-8">Don't see your product category?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Our sourcing capability isn't limited to the above. Tell us what you're looking for, and we'll perform a custom supplier search for you.
            </p>
            <NavLink to="/contact" className="bg-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all inline-flex items-center gap-2">
              Start a Custom Search <ArrowRight className="h-6 w-6" />
            </NavLink>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;
