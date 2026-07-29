import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Package } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button, SectionHeader, Card, Badge, PageHero } from '@/components/ui/index.jsx';

const categories = [
  {
    id: 'electronics',
    label: 'Electronics & Tech',
    products: [
      { id: 'prod-led', titleId: 'prod-led-title', descId: 'prod-led-desc', imgId: 'prod-led-img-3a7b1c', name: 'LED Lighting', desc: 'Indoor/outdoor LED fixtures, smart lighting, strip lights, and commercial lighting solutions.' },
      { id: 'prod-audio', titleId: 'prod-audio-title', descId: 'prod-audio-desc', imgId: 'prod-audio-img-9c4d2e', name: 'Audio Equipment', desc: 'Bluetooth speakers, headphones, earbuds, and professional audio accessories.' },
      { id: 'prod-power', titleId: 'prod-power-title', descId: 'prod-power-desc', imgId: 'prod-power-img-5e8f3a', name: 'Power Banks & Chargers', desc: 'Portable chargers, wireless charging pads, multi-port USB hubs, and adapters.' },
      { id: 'prod-smart', titleId: 'prod-smart-title', descId: 'prod-smart-desc', imgId: 'prod-smart-img-2b6c4d', name: 'Smart Home Devices', desc: 'Smart plugs, cameras, doorbells, sensors, and home automation accessories.' },
    ],
  },
  {
    id: 'furniture',
    label: 'Furniture & Home',
    products: [
      { id: 'prod-office', titleId: 'prod-office-title', descId: 'prod-office-desc', imgId: 'prod-office-img-7f1a9b', name: 'Office Furniture', desc: 'Desks, chairs, shelving, storage units, and ergonomic office accessories.' },
      { id: 'prod-outdoor', titleId: 'prod-outdoor-title', descId: 'prod-outdoor-desc', imgId: 'prod-outdoor-img-4d2e8f', name: 'Outdoor Furniture', desc: 'Garden sets, patio chairs, sun loungers, and weather-resistant outdoor pieces.' },
      { id: 'prod-decor', titleId: 'prod-decor-title', descId: 'prod-decor-desc', imgId: 'prod-decor-img-1a5b3c', name: 'Home Décor', desc: 'Decorative items, wall art, candles, vases, and seasonal home accessories.' },
      { id: 'prod-kitchen', titleId: 'prod-kitchen-title', descId: 'prod-kitchen-desc', imgId: 'prod-kitchen-img-8e3f6a', name: 'Kitchen & Cookware', desc: 'Cookware sets, utensils, storage containers, and kitchen gadgets.' },
    ],
  },
  {
    id: 'textiles',
    label: 'Textiles & Apparel',
    products: [
      { id: 'prod-clothing', titleId: 'prod-clothing-title', descId: 'prod-clothing-desc', imgId: 'prod-clothing-img-6c9d1e', name: 'Clothing & Apparel', desc: 'T-shirts, hoodies, activewear, workwear, and custom branded clothing.' },
      { id: 'prod-bags', titleId: 'prod-bags-title', descId: 'prod-bags-desc', imgId: 'prod-bags-img-3b7a4f', name: 'Bags & Accessories', desc: 'Backpacks, tote bags, luggage, wallets, and custom promotional bags.' },
      { id: 'prod-home-textile', titleId: 'prod-home-textile-title', descId: 'prod-home-textile-desc', imgId: 'prod-home-textile-img-5d2c8b', name: 'Home Textiles', desc: 'Bedding sets, towels, curtains, cushion covers, and table linens.' },
      { id: 'prod-sports', titleId: 'prod-sports-title', descId: 'prod-sports-desc', imgId: 'prod-sports-img-9a1e4c', name: 'Sports & Fitness', desc: 'Gym equipment, yoga mats, resistance bands, and sports apparel.' },
    ],
  },
  {
    id: 'industrial',
    label: 'Hardware & Industrial',
    products: [
      { id: 'prod-tools', titleId: 'prod-tools-title', descId: 'prod-tools-desc', imgId: 'prod-tools-img-2f8b5d', name: 'Hand & Power Tools', desc: 'Drills, saws, wrenches, screwdrivers, and professional tool sets.' },
      { id: 'prod-hardware', titleId: 'prod-hardware-title', descId: 'prod-hardware-desc', imgId: 'prod-hardware-img-7c3a9e', name: 'Construction Hardware', desc: 'Fasteners, brackets, hinges, locks, and building hardware components.' },
      { id: 'prod-safety', titleId: 'prod-safety-title', descId: 'prod-safety-desc', imgId: 'prod-safety-img-4e6f1b', name: 'Safety Equipment', desc: 'PPE, helmets, gloves, safety vests, and industrial protective gear.' },
      { id: 'prod-packaging', titleId: 'prod-packaging-title', descId: 'prod-packaging-desc', imgId: 'prod-packaging-img-1b9c7d', name: 'Packaging Materials', desc: 'Custom boxes, bags, labels, tape, and branded packaging solutions.' },
    ],
  },
  {
    id: 'toys',
    label: 'Toys & Baby',
    products: [
      { id: 'prod-toys', titleId: 'prod-toys-title', descId: 'prod-toys-desc', imgId: 'prod-toys-img-8d4a2f', name: 'Toys & Games', desc: 'Educational toys, board games, outdoor play equipment, and novelty items.' },
      { id: 'prod-baby', titleId: 'prod-baby-title', descId: 'prod-baby-desc', imgId: 'prod-baby-img-5f1c6e', name: 'Baby Products', desc: 'Baby gear, feeding accessories, nursery items, and child safety products.' },
      { id: 'prod-pet', titleId: 'prod-pet-title', descId: 'prod-pet-desc', imgId: 'prod-pet-img-3a8b4d', name: 'Pet Products', desc: 'Pet toys, beds, feeding bowls, grooming tools, and pet accessories.' },
      { id: 'prod-seasonal', titleId: 'prod-seasonal-title', descId: 'prod-seasonal-desc', imgId: 'prod-seasonal-img-6c2e9a', name: 'Seasonal & Holiday', desc: 'Christmas decorations, Halloween items, party supplies, and seasonal gifts.' },
    ],
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Products We Source"
        title="We Source Across All Major Product Categories"
        subtitle="From electronics to textiles, furniture to industrial hardware — if it's manufactured in China, we can source it."
      />

      {/* Category Tabs */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-navy text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-navy hover:text-navy'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentCategory.products.map((product) => (
              <Card key={product.id} className="overflow-hidden p-0">
                <div className="h-44 overflow-hidden">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 id={product.titleId} className="font-semibold text-navy text-sm mb-1">{product.name}</h3>
                  <p id={product.descId} className="text-gray-500 text-xs leading-relaxed">{product.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Products Note */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We source a wide range of products beyond the categories listed here. If it's manufactured in China,
            we can likely help you source it. Contact us with your specific requirements.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Submit a Custom Sourcing Request <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
