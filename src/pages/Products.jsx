import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics & Accessories',
      examples: ['Wireless earbuds and headphones', 'Power banks and chargers', 'Bluetooth speakers', 'Phone cases and accessories', 'Smart home devices', 'Cables and connectors'],
      notes: 'We work with factories that have experience exporting to regulated markets and can support relevant certifications.',
    },
    {
      name: 'Home & Kitchen Products',
      examples: ['Cookware and bakeware', 'Small kitchen appliances', 'Storage and organization', 'Tableware and drinkware', 'Cleaning tools', 'Home textiles'],
      notes: 'Common requirements include food-contact compliance, packaging specifications, and retail-ready presentation.',
    },
    {
      name: 'Fashion & Apparel',
      examples: ['Casual clothing and basics', 'Outerwear and jackets', 'Activewear and sportswear', 'Bags, backpacks, and luggage', 'Hats, scarves, and accessories', 'Workwear and uniforms'],
      notes: 'We coordinate with factories experienced in private label, custom labeling, and size grading for specific markets.',
    },
    {
      name: 'Beauty & Personal Care',
      examples: ['Skincare and cosmetics tools', 'Hair care accessories', 'Personal care devices', 'Travel kits and organizers', 'Bath and body products', 'Packaging and applicators'],
      notes: 'We can support documentation for ingredient lists and market-specific labeling requirements.',
    },
    {
      name: 'Industrial & Hardware',
      examples: ['Fasteners and fittings', 'Hand tools and power tool accessories', 'Safety equipment', 'Material handling products', 'Construction supplies', 'OEM components'],
      notes: 'We verify production capability and quality systems for industrial-grade specifications.',
    },
    {
      name: 'Automotive Parts & Accessories',
      examples: ['Interior accessories', 'Exterior trim and styling', 'Maintenance and detailing products', 'Lighting and electrical', 'Storage and organization', 'Aftermarket components'],
      notes: 'We focus on aftermarket and accessory products. We do not source critical safety components.',
    },
    {
      name: 'Toys, Games & Gifts',
      examples: ['Plush and soft toys', 'Board games and puzzles', 'Outdoor play equipment', 'Educational toys', 'Party supplies', 'Promotional products'],
      notes: 'We coordinate with factories familiar with CPSIA, EN71, and other toy safety standards.',
    },
    {
      name: 'Sports & Outdoor',
      examples: ['Fitness equipment and accessories', 'Camping and hiking gear', 'Cycling accessories', 'Water sports equipment', 'Team sports supplies', 'Outdoor furniture'],
      notes: 'We verify material specifications and durability testing capabilities for outdoor-use products.',
    },
    {
      name: 'Furniture & Home Decor',
      examples: ['Indoor furniture', 'Outdoor and patio furniture', 'Lighting fixtures', 'Wall decor and mirrors', 'Rugs and textiles', 'Storage furniture'],
      notes: 'We coordinate with factories experienced in flat-pack, assembly requirements, and material compliance.',
    },
    {
      name: 'Packaging & Materials',
      examples: ['Retail packaging and boxes', 'Protective packaging', 'Labels and tags', 'Bags and pouches', 'Display and point-of-sale', 'Custom molded packaging'],
      notes: 'We can source both finished packaging and raw materials depending on your requirements.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-slate-500 mb-3">PRODUCT CATEGORIES</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Products We Source</h1>
            <p className="text-lg text-slate-600">
              We work across a wide range of product categories. Below are the areas where we have the most experience and established supplier relationships.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-10">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{cat.name}</h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-5">
                {cat.examples.map((ex, i) => (
                  <div key={i} className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span> {ex}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 border-t border-slate-100 pt-4">{cat.notes}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border-y border-slate-200 py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">Don't see your product listed?</h2>
          <p className="text-slate-600 mb-6">We evaluate new categories on a case-by-case basis. If you have a specific product in mind, let us know.</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800">Discuss Your Product</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
