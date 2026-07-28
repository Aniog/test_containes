import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle,
  Cpu,
  Shirt,
  Wrench,
  ShoppingBag,
  Box,
  Sofa,
  Zap,
  Car,
  Heart,
  Baby,
  Palette
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const PageHero = ({ title, subtitle }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-primary py-16 lg:py-24">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg text-white/80">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ name, description, icon: Icon, examples, minOrder, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-surface rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] bg-primary/5 relative overflow-hidden">
        <img
          data-strk-img-id={`product-card-${name.toLowerCase().replace(/\s+/g, '-')}`}
          data-strk-img={`[product-name-${name.toLowerCase().replace(/\s+/g, '-')}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 id={`product-name-${name.toLowerCase().replace(/\s+/g, '-')}`} className="text-xl font-semibold text-white">
            {name}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-text-secondary text-sm mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-text-muted mb-4">
          <span>Min. Order: {minOrder}</span>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary text-sm font-medium flex items-center gap-1 hover:underline w-full"
        >
          {isExpanded ? 'Show less' : 'View examples'}
          <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </button>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs font-medium text-text-muted mb-2">Common products:</p>
            <div className="flex flex-wrap gap-2">
              {examples.map((example, index) => (
                <span key={index} className="px-2 py-1 bg-background text-text-secondary text-xs rounded">
                  {example}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const products = [
    {
      name: 'Electronics',
      description: 'Consumer electronics, smart devices, and electronic components from verified manufacturers.',
      icon: Cpu,
      examples: ['Smartphones', 'Tablets', 'Wireless Earbuds', 'Smart Home Devices', 'LED Lights', 'Power Banks', 'USB Cables', 'Chargers'],
      minOrder: '500 units',
    },
    {
      name: 'Textiles & Apparel',
      description: 'Garments, fabrics, and fashion accessories from experienced textile manufacturers.',
      icon: Shirt,
      examples: ['T-Shirts', 'Jackets', 'Jeans', 'Dresses', 'Sportswear', 'Scarves', 'Hats', 'Socks'],
      minOrder: '300 units',
    },
    {
      name: 'Machinery & Parts',
      description: 'Industrial machinery, mechanical parts, and custom manufacturing equipment.',
      icon: Wrench,
      examples: ['CNC Parts', 'Motors', 'Pumps', 'Valves', 'Bearings', 'Gears', 'Fasteners', 'Tools'],
      minOrder: '100 units',
    },
    {
      name: 'Consumer Goods',
      description: 'Daily use products, kitchenware, and household items for retail and wholesale.',
      icon: ShoppingBag,
      examples: ['Kitchenware', 'Home Decor', 'Cleaning Supplies', 'Bags', 'Umbrellas', 'Watch Accessories', 'Sunglasses'],
      minOrder: '500 units',
    },
    {
      name: 'Packaging',
      description: 'Custom packaging solutions including boxes, bags, labels, and promotional materials.',
      icon: Box,
      examples: ['Cardboard Boxes', 'Paper Bags', 'Plastic Bags', 'Gift Boxes', 'Labels', 'Pouches', 'Tubes'],
      minOrder: '1,000 units',
    },
    {
      name: 'Furniture',
      description: 'Indoor and outdoor furniture, office furniture, and custom woodwork.',
      icon: Sofa,
      examples: ['Office Chairs', 'Tables', 'Sofas', 'Cabinets', 'Shelves', 'Outdoor Furniture', 'Kids Furniture'],
      minOrder: '50 units',
    },
    {
      name: 'Automotive Parts',
      description: 'Vehicle parts, accessories, and components for automotive aftermarket.',
      icon: Car,
      examples: ['Car Electronics', 'Interior Parts', 'Exterior Accessories', 'Tires', 'Batteries', 'Lights', 'Mirrors'],
      minOrder: '200 units',
    },
    {
      name: 'Beauty & Personal Care',
      description: 'Cosmetics, skincare products, and personal care items for global markets.',
      icon: Heart,
      examples: ['Skincare', 'Makeup', 'Hair Care', 'Body Care', 'Fragrances', 'Manicure Tools', 'Beauty Devices'],
      minOrder: '1,000 units',
    },
    {
      name: 'Toys & Games',
      description: 'Children toys, educational products, and recreational items.',
      icon: Baby,
      examples: ['Educational Toys', 'Action Figures', 'Puzzles', 'Board Games', 'Outdoor Toys', 'Plush Toys', 'Electronic Toys'],
      minOrder: '500 units',
    },
    {
      name: 'Sports & Outdoors',
      description: 'Sports equipment, fitness products, and outdoor recreation items.',
      icon: Zap,
      examples: ['Fitness Equipment', 'Camping Gear', 'Bicycles', 'Sportswear', 'Water Sports', 'Hiking Equipment'],
      minOrder: '200 units',
    },
    {
      name: 'Jewelry & Accessories',
      description: 'Fashion jewelry, watches, and accessory items for retail and wholesale.',
      icon: Palette,
      examples: ['Necklaces', 'Bracelets', 'Rings', 'Earrings', 'Watches', 'Fashion Accessories'],
      minOrder: '300 units',
    },
    {
      name: 'LED & Lighting',
      description: 'Commercial and residential lighting solutions and LED products.',
      icon: Zap,
      examples: ['LED Bulbs', 'LED Strips', 'Downlights', 'Spotlights', 'Chandeliers', 'Outdoor Lighting'],
      minOrder: '200 units',
    },
  ];

  const capabilities = [
    'Factory verification and qualification',
    'Quality control inspections',
    'Sample management',
    'Custom manufacturing',
    'Private labeling',
    'Packaging design',
    'Shipping coordination',
    'Multi-product sourcing',
  ];

  return (
    <>
      <PageHero 
        title="Products We Source" 
        subtitle="We have expertise sourcing a wide range of products from verified Chinese manufacturers"
      />

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Product Categories
            </h2>
            <p className="text-text-secondary text-lg">
              From electronics to textiles, we have sourcing expertise across diverse product categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Sourcing Capabilities
              </h2>
              <p className="text-text-secondary text-lg mb-6">
                Beyond product sourcing, we offer comprehensive services to support your entire supply chain
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-primary/5 rounded-lg">
              <img
                data-strk-img-id="sourcing-capabilities-img"
                data-strk-img="[sourcing-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Sourcing capabilities"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Don't See Your Product?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              We have access to thousands of manufacturers across various industries. Contact us with your specific requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
            >
              Discuss Your Requirements
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;