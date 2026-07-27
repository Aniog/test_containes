import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Cpu, Shirt, Wrench, Lightbulb, Car, Home, Watch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { icon: Cpu, title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, sensors, and electronic parts.' },
  { icon: Shirt, title: 'Apparel & Textiles', desc: 'Clothing, fabrics, accessories, and custom manufacturing.' },
  { icon: Home, title: 'Home & Garden', desc: 'Furniture, decor, kitchenware, and outdoor products.' },
  { icon: Package, title: 'Packaging & Printing', desc: 'Custom packaging, labels, boxes, and printed materials.' },
  { icon: Wrench, title: 'Industrial & Machinery', desc: 'Tools, equipment, machine parts, and industrial supplies.' },
  { icon: Lightbulb, title: 'Lighting & Electrical', desc: 'LED lights, fixtures, wiring, and electrical components.' },
  { icon: Car, title: 'Auto Parts & Accessories', desc: 'Vehicle components, aftermarket parts, and accessories.' },
  { icon: Watch, title: 'Consumer Goods', desc: 'Toys, sports equipment, beauty products, and more.' },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 id="products-title" className="section-title">Products We Source</h2>
          <p id="products-subtitle" className="section-subtitle">
            From electronics to textiles, we source virtually any product manufactured in China.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to="/products"
              className="group p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">{cat.title}</h3>
              <p className="text-xs text-muted-foreground hidden md:block">{cat.desc}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button size="lg" variant="outline">
              View All Product Categories
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
