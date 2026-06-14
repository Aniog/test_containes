import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics & Accessories',
      examples: ['Bluetooth speakers and earbuds', 'Power banks and chargers', 'LED lighting and smart home devices', 'Cables, adapters, and peripherals', 'Wearables and fitness trackers'],
      notes: 'We work with factories that have experience with CE, FCC, and RoHS compliance documentation.',
    },
    {
      name: 'Home & Kitchen Products',
      examples: ['Cookware and bakeware', 'Small kitchen appliances', 'Storage and organization solutions', 'Tableware and drinkware', 'Cleaning tools and accessories'],
      notes: 'Common requirements include food-contact safety, heat resistance, and packaging durability.',
    },
    {
      name: 'Apparel, Textiles & Fashion',
      examples: ['Casual and workwear clothing', 'Home textiles (bedding, towels, curtains)', 'Bags, backpacks, and accessories', 'Footwear and socks', 'Promotional and corporate apparel'],
      notes: 'We can coordinate fabric testing, size grading, and labeling compliance for various markets.',
    },
    {
      name: 'Industrial Equipment & Tools',
      examples: ['Hand tools and power tool accessories', 'Fasteners, fittings, and hardware', 'Material handling equipment', 'Safety equipment and PPE', 'Workshop and maintenance supplies'],
      notes: 'We verify production capability for both standard and custom-engineered items.',
    },
    {
      name: 'Automotive Parts & Accessories',
      examples: ['Interior accessories and trim', 'Lighting and electrical components', 'Filters, wipers, and maintenance parts', 'Towing and cargo management', 'Aftermarket performance accessories'],
      notes: 'We help coordinate with suppliers experienced in IATF 16949 or ISO/TS quality systems when required.',
    },
    {
      name: 'Toys, Games & Sporting Goods',
      examples: ['Plastic and plush toys', 'Board games and puzzles', 'Outdoor and fitness equipment', 'Seasonal and promotional items', 'Educational and STEM products'],
      notes: 'We coordinate CPSIA and EN71 testing and can support age-grading and warning label requirements.',
    },
    {
      name: 'Beauty, Health & Personal Care',
      examples: ['Cosmetic tools and applicators', 'Personal care devices', 'Packaging for beauty products', 'Wellness and spa accessories', 'Grooming and hygiene products'],
      notes: 'We work with facilities that understand GMP expectations and can coordinate relevant safety testing.',
    },
    {
      name: 'Furniture & Home Furnishings',
      examples: ['Indoor and outdoor furniture', 'Mattresses and bedding components', 'Lighting fixtures', 'Decorative accessories', 'Rugs and floor coverings'],
      notes: 'We assess production scale, finishing capability, and packaging for damage prevention during transit.',
    },
    {
      name: 'Packaging Materials & Supplies',
      examples: ['Custom corrugated boxes and displays', 'Flexible packaging and pouches', 'Labels, tags, and stickers', 'Protective packaging solutions', 'Retail and e-commerce packaging'],
      notes: 'We can help evaluate material specifications, print quality, and structural performance.',
    },
    {
      name: 'Garden, Outdoor & Seasonal',
      examples: ['Garden tools and accessories', 'Outdoor furniture and shade', 'Holiday and seasonal decor', 'BBQ and outdoor cooking', 'Pet products and accessories'],
      notes: 'Weather resistance, UV stability, and packaging for retail display are common focus areas.',
    },
  ];

  const otherCategories = [
    'Medical and laboratory consumables',
    'Promotional products and giveaways',
    'Office and school supplies',
    'Pet products and accessories',
    'Food and beverage packaging',
    'Building materials and hardware',
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Products We Source</h1>
            <p className="text-lg text-slate-600">
              We have experience across a wide range of product categories. The lists below are not exhaustive — if your product is not shown, contact us and we will let you know whether we can assist.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section container">
        <div className="space-y-10">
          {categories.map((category, idx) => (
            <div key={idx} className="border-b border-slate-200 pb-8 last:border-b-0 last:pb-0">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                {category.examples.map((example, eIdx) => (
                  <div key={eIdx} className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>{example}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 italic">{category.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Categories */}
      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Other Categories</h2>
          <p className="text-slate-600 mb-4">We have also supported sourcing in the following areas:</p>
          <div className="flex flex-wrap gap-2">
            {otherCategories.map((cat, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-white border border-slate-200 rounded text-sm text-slate-700">{cat}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section container">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Approach to New Categories</h2>
          <div className="prose prose-slate text-sm text-slate-600 space-y-3">
            <p>When we encounter a product category that is new to us, we do not overstate our experience. Instead, we:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Research the relevant manufacturing regions and typical production processes</li>
              <li>Identify suppliers through trade directories, industry networks, and referrals</li>
              <li>Apply the same verification and quality control discipline we use for familiar categories</li>
              <li>Communicate clearly about what we know and what we are learning</li>
            </ul>
            <p className="pt-2">If we do not believe we can add value, we will say so.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-slate-900 text-white">
        <div className="container text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Looking for a Specific Product?</h2>
          <p className="text-slate-300 mb-6 max-w-md mx-auto">Tell us what you need to source. We will let you know whether we can help and what the next steps would be.</p>
          <Link to="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100 px-8">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;