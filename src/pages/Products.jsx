import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';

const categories = [
  {
    name: 'Electronics & Components',
    description: 'PCBs, consumer electronics, cables, batteries, chargers, smart devices, and audio equipment.',
    subcategories: ['PCB Assembly', 'Consumer Electronics', 'Cables & Connectors', 'Batteries & Power', 'Smart Devices', 'Audio & Video'],
    imgId: 'cat-electronics-1a2b3c',
  },
  {
    name: 'Industrial Equipment',
    description: 'Machinery, tools, hardware, metal parts, CNC components, and OEM industrial products.',
    subcategories: ['Machinery', 'Tools & Hardware', 'Metal Parts', 'CNC Components', 'Pumps & Valves', 'Safety Equipment'],
    imgId: 'cat-industrial-2b3c4d',
  },
  {
    name: 'Consumer Goods',
    description: 'Home goods, kitchenware, toys, sporting goods, personal care, and household items.',
    subcategories: ['Home & Kitchen', 'Toys & Games', 'Sporting Goods', 'Personal Care', 'Pet Supplies', 'Office Supplies'],
    imgId: 'cat-consumer-3c4d5e',
  },
  {
    name: 'Textiles & Apparel',
    description: 'Fabrics, clothing, bags, footwear, fashion accessories, and home textiles.',
    subcategories: ['Clothing', 'Bags & Luggage', 'Footwear', 'Fabrics', 'Fashion Accessories', 'Home Textiles'],
    imgId: 'cat-textiles-4d5e6f',
  },
  {
    name: 'Packaging Materials',
    description: 'Custom boxes, bags, labels, sustainable packaging, and promotional packaging.',
    subcategories: ['Custom Boxes', 'Paper Bags', 'Plastic Packaging', 'Labels & Stickers', 'Sustainable Packaging', 'Promotional Packaging'],
    imgId: 'cat-packaging-5e6f7g',
  },
  {
    name: 'Automotive Parts',
    description: 'Aftermarket parts, car accessories, EV components, and motorcycle parts.',
    subcategories: ['Aftermarket Parts', 'Car Accessories', 'EV Components', 'Motorcycle Parts', 'Lighting', 'Interior Accessories'],
    imgId: 'cat-automotive-6f7g8h',
  },
  {
    name: 'Medical & Health',
    description: 'Medical devices, health supplements, PPE, rehabilitation equipment, and dental supplies.',
    subcategories: ['Medical Devices', 'Health Supplements', 'PPE', 'Rehabilitation', 'Dental Supplies', 'First Aid'],
    imgId: 'cat-medical-7g8h9i',
  },
  {
    name: 'Building Materials',
    description: 'Tiles, flooring, lighting fixtures, bathroom fittings, hardware, and decorative materials.',
    subcategories: ['Tiles & Flooring', 'Lighting Fixtures', 'Bathroom Fittings', 'Door & Window Hardware', 'Decorative Materials', 'Tools'],
    imgId: 'cat-building-8h9i0j',
  },
];

export default function Products() {
  const [search, setSearch] = useState('');
  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.description.toLowerCase().includes(search.toLowerCase()) ||
    c.subcategories.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-surface border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              Products We Source
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              We source across dozens of product categories. If it is manufactured in China, we can help you find the right supplier.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search categories..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-muted">No categories found. Try a different search term.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filtered.map((cat, index) => (
                <div
                  key={index}
                  className="bg-surface rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="aspect-[21/9] overflow-hidden">
                    <img
                      data-strk-img-id={cat.imgId}
                      data-strk-img={`[cat-${index}-name] [cat-${index}-desc]`}
                      data-strk-img-ratio="21x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 id={`cat-${index}-name`} className="text-xl font-bold text-primary mb-2">
                      {cat.name}
                    </h3>
                    <p id={`cat-${index}-desc`} className="text-sm text-text-secondary leading-relaxed mb-4">
                      {cat.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cat.subcategories.map((sub, si) => (
                        <span
                          key={si}
                          className="text-xs bg-background text-text-secondary px-2.5 py-1 rounded-md border border-border"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors"
                      >
                        Request sourcing for this category
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom sourcing CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Do Not See Your Product Category?
          </h2>
          <p className="text-white/70 mb-8">
            We source across virtually every manufacturing sector in China. Contact us with your product details and we will let you know how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent/90 transition-colors shadow-lg"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
