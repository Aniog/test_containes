import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SectionHeader, Badge } from '@/components/ui/index.jsx';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Tech',
    items: ['Consumer electronics', 'LED lighting', 'Smart home devices', 'PCBs and components', 'Cables and accessories', 'Power banks', 'Surveillance equipment'],
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    desc: 'Consumer electronics, LED lighting, smart home devices, PCBs and components',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home',
    items: ['Solid wood furniture', 'Office furniture', 'Outdoor furniture', 'Home décor', 'Kitchenware', 'Bedding and textiles', 'Storage solutions'],
    imgId: 'prod-furniture-img-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    desc: 'Solid wood furniture, office furniture, outdoor furniture, home décor and kitchenware',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    items: ['Clothing and fashion', 'Sportswear', 'Workwear and uniforms', 'Bags and accessories', 'Footwear', 'Fabric and yarn', 'Sustainable/organic textiles'],
    imgId: 'prod-apparel-img-g7h8i9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
    desc: 'Clothing, sportswear, workwear, bags, footwear and sustainable textiles',
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    items: ['Industrial machinery', 'Machine parts and components', 'Tools and hardware', 'Agricultural equipment', 'Construction materials', 'Safety equipment', 'Packaging machinery'],
    imgId: 'prod-machinery-img-j1k2l3',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
    desc: 'Industrial machinery, machine parts, tools, hardware and construction materials',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    items: ['Personal care products', 'Cosmetics and skincare', 'Medical devices (Class I)', 'Fitness equipment', 'Nutritional supplements packaging', 'Dental products', 'Wellness accessories'],
    imgId: 'prod-health-img-m4n5o6',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    desc: 'Personal care, cosmetics, medical devices, fitness equipment and wellness accessories',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    items: ['Plastic toys', 'Wooden toys', 'Educational toys', 'Baby clothing', 'Baby furniture', 'Outdoor play equipment', 'Board games'],
    imgId: 'prod-toys-img-p7q8r9',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    desc: 'Plastic toys, wooden toys, educational toys, baby clothing and furniture',
  },
  {
    id: 'automotive',
    name: 'Automotive Parts',
    items: ['Car accessories', 'Replacement parts', 'Motorcycle parts', 'EV components', 'Tires and wheels', 'Car care products', 'Lighting systems'],
    imgId: 'prod-auto-img-s1t2u3',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    desc: 'Car accessories, replacement parts, EV components, tires and automotive lighting',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    items: ['Gym equipment', 'Camping gear', 'Cycling accessories', 'Water sports equipment', 'Team sports gear', 'Outdoor furniture', 'Hiking equipment'],
    imgId: 'prod-sports-img-v4w5x6',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
    desc: 'Gym equipment, camping gear, cycling accessories and outdoor sports equipment',
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(categories[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-[#1a4f8a] py-16 md:py-20">
        <div className="section-container">
          <Badge variant="gold" className="mb-4">Product Categories</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Products We Source
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            We source across a wide range of product categories. If you don't see your product listed, contact us — we likely have relevant supplier contacts.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <SectionHeader
            eyebrow="What We Source"
            title="Browse by Category"
            subtitle="Click a category to explore the types of products we regularly source from China."
          />

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active === cat.id
                    ? 'bg-[#1a4f8a] text-white'
                    : 'bg-white text-brand-body border border-brand-border hover:border-[#1a4f8a] hover:text-[#1a4f8a]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/*
            All category panels are rendered in the DOM at once (display toggled via CSS).
            This lets the plugin statically resolve every cat.imgId from the top-level
            `categories` array — no computed `.find()` variable needed.
          */}
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl border border-brand-border overflow-hidden shadow-sm ${active === cat.id ? 'flex' : 'hidden'}`}
            >
              <div className="p-8 md:p-10">
                <h2 id={cat.titleId} className="text-2xl font-bold text-brand-dark mb-3">{cat.name}</h2>
                <p id={cat.descId} className="text-brand-body mb-6 leading-relaxed">{cat.desc}</p>
                <ul className="space-y-2 mb-8">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-brand-body text-sm">
                      <ChevronRight className="w-4 h-4 text-[#1a4f8a] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#1a4f8a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#163f6e] transition-colors text-sm"
                >
                  Source This Product <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="h-64 lg:h-full min-h-64">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="All Categories"
            title="Full Product Range"
            subtitle="We have supplier contacts across all major manufacturing categories in China."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActive(cat.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="p-5 bg-brand-bg rounded-xl border border-brand-border text-left hover:border-[#1a4f8a] hover:shadow-sm transition-all group"
              >
                <div className="font-semibold text-brand-dark text-sm group-hover:text-[#1a4f8a] transition-colors">{cat.name}</div>
                <div className="text-brand-muted text-xs mt-1">{cat.items.length} product types</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a4f8a]">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't see your product?</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">We source across hundreds of product types. Contact us with your requirements and we'll let you know if we can help.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#c0392b] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#a93226] transition-colors">
            Ask About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
