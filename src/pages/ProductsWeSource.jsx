import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Cpu, Home, Shirt, Wrench, Heart, Baby, Car, Building2, Gem, Sparkles, Box, Truck } from 'lucide-react';

const categories = [
  {
    icon: Cpu,
    title: 'Consumer Electronics',
    desc: 'Phone accessories, Bluetooth speakers, earphones, power banks, smart watches, LED lights, chargers, cables, and electronics components.',
    items: ['Phone cases & screen protectors', 'Bluetooth audio devices', 'LED lighting products', 'Smart home devices', 'Power banks & chargers'],
  },
  {
    icon: Home,
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, bathroom accessories, garden tools, storage solutions, decorative items, and household essentials.',
    items: ['Kitchen utensils & cookware', 'Bathroom fixtures & accessories', 'Indoor & outdoor furniture', 'Garden tools & planters', 'Storage & organization'],
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    desc: 'Clothing, bags, shoes, fabrics, sportswear, work uniforms, promotional textiles, and fashion accessories.',
    items: ['Casual & formal clothing', 'Bags & luggage', 'Shoes & footwear', 'Sportswear & activewear', 'Promotional textiles'],
  },
  {
    icon: Wrench,
    title: 'Industrial & Machinery',
    desc: 'CNC machined parts, metal fabrication, packaging machines, construction materials, and custom industrial equipment.',
    items: ['CNC & precision parts', 'Metal stamping & fabrication', 'Packaging machinery', 'Construction materials', 'Custom tooling'],
  },
  {
    icon: Heart,
    title: 'Health & Beauty',
    desc: 'Cosmetics packaging, wellness devices, personal care tools, fitness equipment, and supplement packaging.',
    items: ['Cosmetics & makeup tools', 'Personal care devices', 'Fitness & wellness equipment', 'Supplement packaging', 'Hair care accessories'],
  },
  {
    icon: Baby,
    title: 'Toys & Gifts',
    desc: 'Educational toys, promotional products, seasonal gifts, custom merchandise, and holiday decorations.',
    items: ['Educational & learning toys', 'Promotional products', 'Seasonal decorations', 'Custom branded merchandise', 'Gift sets & packaging'],
  },
  {
    icon: Car,
    title: 'Automotive Parts',
    desc: 'Car accessories, replacement parts, lighting components, tools, and aftermarket automotive products.',
    items: ['Car interior accessories', 'LED automotive lighting', 'Replacement parts', 'Car care products', 'EV components'],
  },
  {
    icon: Building2,
    title: 'Building & Hardware',
    desc: 'Doors, windows, flooring, plumbing fixtures, electrical components, and construction hardware.',
    items: ['Doors & windows', 'Flooring & tiles', 'Plumbing fixtures', 'Electrical components', 'Fasteners & hardware'],
  },
  {
    icon: Box,
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, bags, paper products, stickers, branded packaging, and printing services.',
    items: ['Custom gift boxes', 'Product labels & stickers', 'Paper bags & pouches', 'Branded packaging', 'Promotional printing'],
  },
];

const ProductsWeSource = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-white/10 text-white/90 text-sm font-semibold rounded-full mb-4">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Products We Source</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">We source across 50+ product categories from China's leading manufacturing regions. If it's manufactured in China, we can find it.</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-surface-alt border border-border rounded-2xl p-7 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                <div className="w-13 h-13 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">{cat.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{cat.desc}</p>
                <ul className="space-y-1.5 list-none p-0 m-0">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-text-secondary">
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Sparkles className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">Don't See Your Product?</h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">We source custom and niche products every day. Share your specifications and we'll find the right supplier for you.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-colors no-underline shadow-lg">
            Request Custom Sourcing <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Sourcing Regions */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text text-center mb-10">China's Major Manufacturing Hubs We Cover</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { city: 'Guangdong', speciality: 'Electronics, toys, apparel, furniture' },
              { city: 'Zhejiang', speciality: 'Textiles, hardware, small commodities' },
              { city: 'Jiangsu', speciality: 'Machinery, chemicals, electronics' },
              { city: 'Fujian', speciality: 'Shoes, stone, tea, garments' },
              { city: 'Shandong', speciality: 'Food processing, automotive, textiles' },
              { city: 'Hebei', speciality: 'Steel, glass, ceramics' },
              { city: 'Shanghai', speciality: 'High-tech, automotive, fashion' },
              { city: 'Sichuan', speciality: 'Electronics, aerospace, agriculture' },
            ].map((region) => (
              <div key={region.city} className="bg-surface-alt border border-border rounded-xl p-5">
                <h4 className="text-sm font-bold text-text mb-1">{region.city}</h4>
                <p className="text-xs text-text-muted">{region.speciality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsWeSource;
