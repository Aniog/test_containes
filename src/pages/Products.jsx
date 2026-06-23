import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SectionHeader, Badge, Card } from '@/components/ui/SharedComponents';

const categories = [
  {
    id: 'electronics',
    label: 'Electronics',
    products: [
      { id: 'elec-pcb', name: 'PCB & Electronic Components', desc: 'Printed circuit boards, capacitors, resistors, connectors, and custom electronic assemblies.', imgId: 'prod-elec-pcb-img-a1b2', titleId: 'prod-elec-pcb-title', descId: 'prod-elec-pcb-desc' },
      { id: 'elec-led', name: 'LED Lighting', desc: 'LED strips, bulbs, panels, and commercial lighting solutions for retail and industrial use.', imgId: 'prod-elec-led-img-c3d4', titleId: 'prod-elec-led-title', descId: 'prod-elec-led-desc' },
      { id: 'elec-consumer', name: 'Consumer Electronics', desc: 'Smartphones accessories, tablets, wearables, smart home devices, and audio equipment.', imgId: 'prod-elec-consumer-img-e5f6', titleId: 'prod-elec-consumer-title', descId: 'prod-elec-consumer-desc' },
    ],
  },
  {
    id: 'furniture',
    label: 'Furniture & Home',
    products: [
      { id: 'furn-office', name: 'Office Furniture', desc: 'Desks, chairs, shelving, and modular office systems for commercial and home office use.', imgId: 'prod-furn-office-img-g7h8', titleId: 'prod-furn-office-title', descId: 'prod-furn-office-desc' },
      { id: 'furn-home', name: 'Home Furniture', desc: 'Sofas, beds, dining sets, and storage solutions in wood, metal, and upholstered finishes.', imgId: 'prod-furn-home-img-i9j0', titleId: 'prod-furn-home-title', descId: 'prod-furn-home-desc' },
      { id: 'furn-decor', name: 'Home Decor & Accessories', desc: 'Decorative items, candles, picture frames, vases, and seasonal home accessories.', imgId: 'prod-furn-decor-img-k1l2', titleId: 'prod-furn-decor-title', descId: 'prod-furn-decor-desc' },
    ],
  },
  {
    id: 'apparel',
    label: 'Clothing & Textiles',
    products: [
      { id: 'app-clothing', name: 'Apparel & Garments', desc: 'T-shirts, jackets, sportswear, workwear, and fashion garments with custom branding.', imgId: 'prod-app-clothing-img-m4n5', titleId: 'prod-app-clothing-title', descId: 'prod-app-clothing-desc' },
      { id: 'app-fabric', name: 'Fabrics & Textiles', desc: 'Cotton, polyester, linen, and technical fabrics for apparel and industrial applications.', imgId: 'prod-app-fabric-img-o6p7', titleId: 'prod-app-fabric-title', descId: 'prod-app-fabric-desc' },
      { id: 'app-bags', name: 'Bags & Accessories', desc: 'Backpacks, handbags, luggage, wallets, and promotional bags with custom logos.', imgId: 'prod-app-bags-img-q8r9', titleId: 'prod-app-bags-title', descId: 'prod-app-bags-desc' },
    ],
  },
  {
    id: 'machinery',
    label: 'Machinery & Industrial',
    products: [
      { id: 'mach-industrial', name: 'Industrial Machinery', desc: 'CNC machines, injection molding equipment, packaging machinery, and production lines.', imgId: 'prod-mach-industrial-img-s1t2', titleId: 'prod-mach-industrial-title', descId: 'prod-mach-industrial-desc' },
      { id: 'mach-tools', name: 'Hand & Power Tools', desc: 'Drills, grinders, saws, and hand tools for professional and consumer markets.', imgId: 'prod-mach-tools-img-u3v4', titleId: 'prod-mach-tools-title', descId: 'prod-mach-tools-desc' },
      { id: 'mach-hardware', name: 'Hardware & Fasteners', desc: 'Bolts, screws, hinges, brackets, and custom metal hardware components.', imgId: 'prod-mach-hardware-img-w5x6', titleId: 'prod-mach-hardware-title', descId: 'prod-mach-hardware-desc' },
    ],
  },
  {
    id: 'toys',
    label: 'Toys & Baby',
    products: [
      { id: 'toys-plastic', name: 'Plastic Toys', desc: 'Action figures, building blocks, educational toys, and outdoor play equipment.', imgId: 'prod-toys-plastic-img-y7z8', titleId: 'prod-toys-plastic-title', descId: 'prod-toys-plastic-desc' },
      { id: 'toys-baby', name: 'Baby Products', desc: 'Strollers, car seats, feeding accessories, and nursery furniture with safety certifications.', imgId: 'prod-toys-baby-img-a9b0', titleId: 'prod-toys-baby-title', descId: 'prod-toys-baby-desc' },
      { id: 'toys-plush', name: 'Plush & Stuffed Toys', desc: 'Custom plush toys, stuffed animals, and promotional mascots with CE and ASTM compliance.', imgId: 'prod-toys-plush-img-c1d2', titleId: 'prod-toys-plush-title', descId: 'prod-toys-plush-desc' },
    ],
  },
  {
    id: 'health',
    label: 'Health & Beauty',
    products: [
      { id: 'health-beauty', name: 'Beauty & Skincare', desc: 'Cosmetics, skincare, hair care, and personal care products with OEM/ODM options.', imgId: 'prod-health-beauty-img-e3f4', titleId: 'prod-health-beauty-title', descId: 'prod-health-beauty-desc' },
      { id: 'health-medical', name: 'Medical Supplies', desc: 'Disposable medical supplies, PPE, diagnostic equipment, and rehabilitation products.', imgId: 'prod-health-medical-img-g5h6', titleId: 'prod-health-medical-title', descId: 'prod-health-medical-desc' },
      { id: 'health-fitness', name: 'Fitness Equipment', desc: 'Gym equipment, yoga accessories, resistance bands, and home fitness solutions.', imgId: 'prod-health-fitness-img-i7j8', titleId: 'prod-health-fitness-title', descId: 'prod-health-fitness-desc' },
    ],
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="gold" className="mb-4">Product Categories</Badge>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
              Products We Source from China
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We source across a wide range of product categories. If your product is manufactured in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs + Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Browse by Category"
            title="What We Source"
            subtitle="Select a category to explore the types of products we regularly source for global buyers."
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-light text-gray-700 hover:bg-brand-blue/10 hover:text-brand-blue'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentCategory.products.map((product) => (
              <Card key={product.id} className="overflow-hidden p-0">
                <div className="overflow-hidden">
                  <img
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5">
                  <h3 id={product.titleId} className="text-brand-navy font-semibold text-base mb-2">{product.name}</h3>
                  <p id={product.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                  <Link
                    to="/contact"
                    className="text-brand-blue text-sm font-medium hover:text-brand-sky flex items-center gap-1"
                  >
                    Source This Product <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-brand-navy text-3xl font-bold mb-4">Don't see your product category?</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our sourcing network covers most manufacturing categories in China. Contact us with your product details and we will assess whether we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-sky text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Ask About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
