import React from 'react';
import Layout from '../Layout';
import { Package, Smartphone, Sofa, Tv, Wrench, Sprout, ShoppingBag, Box } from 'lucide-react';

const ProductCard = ({ icon: Icon, title, desc, categories }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-600 mb-6 text-sm leading-relaxed">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {categories.map(c => (
        <span key={c} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded">
          {c}
        </span>
      ))}
    </div>
  </div>
);

const Products = () => {
  const productGroups = [
    {
      icon: Smartphone,
      title: 'Consumer Electronics',
      desc: 'Smart home devices, mobile accessories, kitchen appliances, and wearable technology.',
      categories: ['Smart Home', 'Accessories', 'IoT']
    },
    {
      icon: Sofa,
      title: 'Furniture & Decor',
      desc: 'Office furniture, residential sofas, outdoor sets, and professional lighting solutions.',
      categories: ['Office', 'Home', 'Outdoor']
    },
    {
      icon: Smartphone, // Reusing for industrial
      title: 'Industrial Equipment',
      icon: Wrench,
      desc: 'CNC machinery, manufacturing tools, construction hardware, and solar energy components.',
      categories: ['Machinery', 'Tools', 'Solar']
    },
    {
      icon: ShoppingBag,
      title: 'Fashion & Textiles',
      desc: 'Apparel production, fashion accessories, bags, footwear, and specialty fabrics.',
      categories: ['Apparel', 'Accessories', 'Textiles']
    },
    {
      icon: Sprout,
      title: 'Eco-Friendly Products',
      desc: 'Biodegradable packaging, sustainable materials, and renewable energy products.',
      categories: ['Packaging', 'Sustainable', 'Green']
    },
    {
      icon: Package,
      title: 'Custom Packaging',
      desc: 'Bespoke branding solutions, retail boxes, corrugated shipping cartons, and luxury gift sets.',
      categories: ['Retail', 'Shipping', 'Luxury']
    }
  ];

  return (
    <Layout>
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">From concept to delivery, we source across a vast range of industries through our extensive network of verified factories.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productGroups.map(group => (
              <ProductCard key={group.title} {...group} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Box className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Don't see your product category?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">We specialize in custom sourcing. Our team can find reliable manufacturers for almost any standard or custom product requirement.</p>
          <a href="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-md font-bold hover:bg-blue-700 transition-all shadow-lg inline-block">
            Inquire About Your Product
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
