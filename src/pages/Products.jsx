import React from 'react';
import { Link } from 'react-router-dom';
import ProductCategory from '../components/ProductCategory';

const Products = ({ onQuoteClick }) => {
  const categories = [
    {
      title: 'Electronics & Components',
      examples: 'PCBs, power supplies, sensors, cables, enclosures, consumer electronics, smart home devices, LED lighting.',
      industries: ['Consumer Electronics', 'Industrial Automation', 'IoT', 'Lighting'],
    },
    {
      title: 'Machinery & Industrial Equipment',
      examples: 'CNC machines, pumps, compressors, conveyor systems, welding equipment, packaging machinery, tools.',
      industries: ['Manufacturing', 'Construction', 'Agriculture', 'Logistics'],
    },
    {
      title: 'Consumer Goods & Home Products',
      examples: 'Kitchenware, furniture, home textiles, storage solutions, cleaning products, garden tools, pet products.',
      industries: ['Retail', 'E-commerce', 'Home Improvement', 'Wholesale'],
    },
    {
      title: 'Apparel, Textiles & Accessories',
      examples: 'Garments, fabrics, bags, footwear, belts, hats, promotional textiles, workwear, uniforms.',
      industries: ['Fashion', 'Promotional Products', 'Corporate', 'Workwear'],
    },
    {
      title: 'Automotive Parts & Accessories',
      examples: 'Aftermarket parts, interior trim, lighting, electrical components, tools, maintenance equipment.',
      industries: ['Automotive Aftermarket', 'Fleet Maintenance', 'Specialty Vehicles'],
    },
    {
      title: 'Medical Devices & Supplies',
      examples: 'Diagnostic equipment, consumables, mobility aids, PPE, rehabilitation products (non-regulated and regulated).',
      industries: ['Healthcare', 'Aged Care', 'Occupational Health'],
    },
    {
      title: 'Building Materials & Hardware',
      examples: 'Fasteners, hand tools, power tools, plumbing fittings, electrical fittings, safety equipment, fixtures.',
      industries: ['Construction', 'Facilities Management', 'Hardware Retail'],
    },
    {
      title: 'Packaging & Printing',
      examples: 'Custom boxes, labels, bags, blister packs, instruction manuals, point-of-sale displays.',
      industries: ['Consumer Goods', 'Food & Beverage', 'E-commerce', 'Promotional'],
    },
    {
      title: 'Custom / OEM Projects',
      examples: 'Private label products, custom-engineered components, made-to-spec assemblies, and new product development support.',
      industries: ['Startups', 'Product Developers', 'Brands Expanding to China'],
    },
  ];

  return (
    <div>
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="text-sm font-medium text-blue-700 tracking-wider mb-2">PRODUCT EXPERTISE</div>
          <h1 className="text-4xl font-semibold text-slate-900 mb-4">Products We Source</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We have experience across a wide range of product categories. If your product is not listed, we can still help — many of our projects involve custom or less common items.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <ProductCategory key={index} {...cat} />
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Not Sure If We Can Help?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            We regularly take on projects outside our most common categories. If you have a specific product in mind, the best way to find out is to send us a brief description. We will let you know quickly whether we can assist and what the next steps would be.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {onQuoteClick ? (
              <button
                onClick={onQuoteClick}
                className="inline-block px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors"
              >
                Get a Free Sourcing Quote
              </button>
            ) : null}
            <Link to="/contact" className="inline-block px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/5 transition-colors">
              View Full Contact Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
