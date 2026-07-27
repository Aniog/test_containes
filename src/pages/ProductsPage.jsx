import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Shirt, Home, Package, Wrench, Lightbulb, Car, Watch, UtensilsCrossed, Baby, Dumbbell, Paintbrush, Plug, Gem, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { icon: Cpu, title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, sensors, cables, and electronic components.', id: 'electronics' },
  { icon: Shirt, title: 'Apparel & Textiles', desc: 'Clothing, fabrics, accessories, footwear, and custom manufacturing.', id: 'apparel' },
  { icon: Home, title: 'Home & Garden', desc: 'Furniture, decor, kitchenware, garden tools, and outdoor products.', id: 'home-garden' },
  { icon: Package, title: 'Packaging & Printing', desc: 'Custom packaging, labels, boxes, bags, and printed materials.', id: 'packaging' },
  { icon: Wrench, title: 'Industrial & Machinery', desc: 'Tools, equipment, machine parts, industrial supplies, and hardware.', id: 'industrial' },
  { icon: Lightbulb, title: 'Lighting & Electrical', desc: 'LED lights, fixtures, wiring, switches, and electrical components.', id: 'lighting' },
  { icon: Car, title: 'Auto Parts & Accessories', desc: 'Vehicle components, aftermarket parts, car accessories, and tools.', id: 'auto-parts' },
  { icon: Watch, title: 'Consumer Goods', desc: 'Toys, sports equipment, beauty products, jewelry, and gifts.', id: 'consumer-goods' },
  { icon: UtensilsCrossed, title: 'Food & Beverage', desc: 'Food processing equipment, packaging, ingredients, and beverages.', id: 'food-beverage' },
  { icon: Baby, title: 'Baby & Kids Products', desc: 'Baby clothing, toys, strollers, car seats, and nursery items.', id: 'baby-kids' },
  { icon: Dumbbell, title: 'Sports & Fitness', desc: 'Exercise equipment, sportswear, outdoor gear, and accessories.', id: 'sports-fitness' },
  { icon: Paintbrush, title: 'Arts & Crafts', desc: 'Art supplies, craft materials, stationery, and creative tools.', id: 'arts-crafts' },
  { icon: Plug, title: 'Energy & Solar', desc: 'Solar panels, batteries, inverters, and renewable energy products.', id: 'energy-solar' },
  { icon: Gem, title: 'Jewelry & Accessories', desc: 'Fashion jewelry, watches, bags, belts, and fashion accessories.', id: 'jewelry' },
  { icon: Camera, title: 'Photography & Video', desc: 'Camera accessories, lighting equipment, tripods, and studio gear.', id: 'photography' },
  { icon: Package, title: 'Custom Manufacturing', desc: 'OEM/ODM services, custom designs, and private label products.', id: 'custom-mfg' },
];

export default function ProductsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
            <p className="text-lg text-slate-300 mb-8">
              From electronics to textiles, we source virtually any product manufactured in China. If it can be made in China, we can help you find the right supplier.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                Request a Product Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section ref={containerRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 id="products-title" className="section-title">Product Categories</h2>
            <p id="products-subtitle" className="section-subtitle">
              Browse our most commonly sourced product categories. Not seeing your product? Contact us anyway — we likely have experience with it.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div
                  className="h-32 bg-secondary/50 flex items-center justify-center"
                  data-strk-bg-id={`product-bg-${cat.id}-a1b2c3`}
                  data-strk-bg={`[${cat.id}-desc] [${cat.id}-title] [products-subtitle] [products-title]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="400"
                >
                  <cat.icon className="w-10 h-10 text-primary/30" />
                </div>
                <div className="p-4">
                  <h3 id={`${cat.id}-title`} className="font-semibold text-foreground mb-1 text-sm">{cat.title}</h3>
                  <p id={`${cat.id}-desc`} className="text-xs text-muted-foreground">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Don't See Your Product?</h2>
            <p className="section-subtitle">
              We source products across all categories. If it is manufactured in China, we can help you find the right supplier.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Custom Designs</h3>
                <p className="text-sm text-muted-foreground">OEM and ODM services for your unique product designs.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Private Label</h3>
                <p className="text-sm text-muted-foreground">Branded products with your logo and packaging.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Bulk Orders</h3>
                <p className="text-sm text-muted-foreground">Large volume sourcing with competitive pricing.</p>
              </div>
            </div>
            <div className="mt-10">
              <Link to="/contact">
                <Button size="lg">
                  Tell Us What You Need
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source Your Products?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Share your product requirements and receive a free sourcing quote within 24 hours.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 px-8">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
