import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

const Products = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      description: 'Consumer electronics, components, and accessories',
      products: [
        'Smartphones & Accessories',
        'Audio & Video Equipment',
        'Computer Peripherals',
        'LED Lighting',
        'Electronic Components',
        'Home Appliances',
        'Wearable Technology',
        'Charging Cables & Adapters',
      ],
      image: 'Electronics components and circuit boards',
    },
    {
      id: 'home-garden',
      name: 'Home & Garden',
      description: 'Home decor, furniture, and garden supplies',
      products: [
        'Home Decor Items',
        'Kitchenware & Tableware',
        'Bathroom Accessories',
        'Garden Tools & Equipment',
        'Outdoor Furniture',
        'Storage & Organization',
        'Candles & Home Fragrance',
        'Textiles & Rugs',
      ],
      image: 'Home decor and furniture products',
    },
    {
      id: 'apparel',
      name: 'Apparel & Textiles',
      description: 'Clothing, fabrics, and fashion accessories',
      products: [
        'Casual Wear',
        'Sportswear & Activewear',
        'Workwear & Uniforms',
        'Fabrics & Textiles',
        'Bags & Luggage',
        'Fashion Accessories',
        'Knitwear & Sweaters',
        'Children\'s Clothing',
      ],
      image: 'Apparel and textile products',
    },
    {
      id: 'auto-parts',
      name: 'Auto Parts',
      description: 'Vehicle components and accessories',
      products: [
        'Engine Components',
        'Brake Systems',
        'Electrical Parts',
        'Body & Exterior Parts',
        'Interior Accessories',
        'Lighting & Signals',
        'Filters & Fluids',
        'Tools & Equipment',
      ],
      image: 'Automotive parts and components',
    },
    {
      id: 'industrial',
      name: 'Industrial Equipment',
      description: 'Machinery, tools, and industrial supplies',
      products: [
        'Power Tools',
        'Hand Tools',
        'Safety Equipment',
        'Measuring Instruments',
        'Pumps & Valves',
        'Bearings & Seals',
        'Fasteners & Hardware',
        'Industrial Lighting',
      ],
      image: 'Industrial equipment and tools',
    },
    {
      id: 'gifts-promotional',
      name: 'Gifts & Promotional',
      description: 'Corporate gifts and promotional items',
      products: [
        'Custom Pens & Stationery',
        'Tech Gadgets',
        'Apparel & Headwear',
        'Drinkware',
        'Bags & Totes',
        'Awards & Trophies',
        'Calendars & Planners',
        'Keychains & Magnets',
      ],
      image: 'Promotional gifts and corporate items',
    },
    {
      id: 'toys-hobbies',
      name: 'Toys & Hobbies',
      description: 'Toys, games, and hobby supplies',
      products: [
        'Educational Toys',
        'Outdoor Play Equipment',
        'Board Games & Puzzles',
        'Arts & Crafts',
        'Model Kits',
        'Collectibles',
        'Party Supplies',
        'Seasonal Items',
      ],
      image: 'Toys and hobby products',
    },
    {
      id: 'health-beauty',
      name: 'Health & Beauty',
      description: 'Personal care and beauty products',
      products: [
        'Skincare Products',
        'Hair Care',
        'Makeup & Cosmetics',
        'Fragrances',
        'Health Supplements',
        'Personal Care Devices',
        'Bath & Body',
        'Beauty Tools',
      ],
      image: 'Health and beauty products',
    },
    {
      id: 'sports-outdoors',
      name: 'Sports & Outdoors',
      description: 'Sports equipment and outdoor gear',
      products: [
        'Fitness Equipment',
        'Camping & Hiking',
        'Cycling Accessories',
        'Water Sports',
        'Team Sports',
        'Yoga & Pilates',
        'Running & Walking',
        'Outdoor Clothing',
      ],
      image: 'Sports and outdoor equipment',
    },
    {
      id: 'jewelry-accessories',
      name: 'Jewelry & Accessories',
      description: 'Fashion jewelry and accessories',
      products: [
        'Fashion Jewelry',
        'Fine Jewelry',
        'Watches & Clocks',
        'Sunglasses & Eyewear',
        'Belts & Wallets',
        'Scarves & Hats',
        'Brooches & Pins',
        'Hair Accessories',
      ],
      image: 'Jewelry and fashion accessories',
    },
    {
      id: 'packaging',
      name: 'Packaging Materials',
      description: 'Packaging solutions and materials',
      products: [
        'Corrugated Boxes',
        'Plastic Packaging',
        'Paper & Cardboard',
        'Bubble Wrap & Foam',
        'Strapping & Tape',
        'Shipping Labels',
        'E-commerce Packaging',
        'Custom Packaging',
      ],
      image: 'Packaging materials and boxes',
    },
    {
      id: 'office-supplies',
      name: 'Office Supplies',
      description: 'Office equipment and stationery',
      products: [
        'Writing Instruments',
        'Paper Products',
        'Desk Accessories',
        'Filing & Storage',
        'Presentation Supplies',
        'Printer Supplies',
        'Office Furniture',
        'Break Room Supplies',
      ],
      image: 'Office supplies and stationery',
    },
  ];

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              We source a wide range of products across multiple industries. From consumer goods to industrial equipment, we have the expertise and network to find the right suppliers for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Product Categories</h2>
            <p className="section-subtitle mx-auto">
              Click on a category to see the specific products we can source for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                      aria-label={expandedCategory === category.id ? 'Collapse' : 'Expand'}
                    >
                      {expandedCategory === category.id ? (
                        <ChevronUp className="h-5 w-5 text-slate-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-500" />
                      )}
                    </button>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{category.description}</p>
                  {expandedCategory === category.id && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-sm font-medium text-slate-900 mb-3">Products we source:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {category.products.map((product, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-600">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See Your Product Category?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              We source many more products beyond what's listed here. Contact us with your specific requirements and we'll find the right suppliers for you.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Tell Us What You Need</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
