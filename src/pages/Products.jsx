import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Sofa, 
  Shirt, 
  Cog, 
  Box, 
  Gamepad2, 
  Car, 
  Home,
  Dumbbell,
  Stethoscope,
  Sparkles,
  Wrench,
  ArrowRight
} from 'lucide-react';

const ProductsPage = () => {
  const products = [
    {
      icon: Laptop,
      name: 'Electronics',
      description: 'Consumer electronics, smart devices, circuit boards, and electronic components.',
      examples: ['Smart home devices', 'Consumer electronics', 'Electronic components', 'LED lighting']
    },
    {
      icon: Sofa,
      name: 'Furniture',
      description: 'Indoor, outdoor, and office furniture including custom manufacturing.',
      examples: ['Outdoor furniture', 'Office furniture', 'Upholstered furniture', 'Metal furniture']
    },
    {
      icon: Shirt,
      name: 'Textiles & Apparel',
      description: 'Fabrics, garments, and textile products for various industries.',
      examples: ['Ready-made garments', 'Fabrics and textiles', 'Sportswear', 'Fashion accessories']
    },
    {
      icon: Cog,
      name: 'Machinery',
      description: 'Industrial machinery, equipment, and mechanical components.',
      examples: ['Industrial equipment', 'Machinery parts', 'Agricultural machinery', 'Construction equipment']
    },
    {
      icon: Box,
      name: 'Packaging',
      description: 'All types of packaging solutions for various industries.',
      examples: ['Paper packaging', 'Plastic packaging', 'Gift boxes', 'Industrial packaging']
    },
    {
      icon: Gamepad2,
      name: 'Toys & Games',
      description: 'Children\'s toys, games, and recreational products.',
      examples: ['Educational toys', 'Electronic toys', 'Board games', 'Outdoor play equipment']
    },
    {
      icon: Car,
      name: 'Automotive Parts',
      description: 'Vehicle parts, components, and accessories.',
      examples: ['Auto parts', 'Motorcycle accessories', 'Car electronics', 'Replacement parts']
    },
    {
      icon: Home,
      name: 'Home Goods',
      description: 'Daily use household items and home improvement products.',
      examples: ['Kitchenware', 'Home decor', 'Bathroom products', 'Cleaning supplies']
    },
    {
      icon: Dumbbell,
      name: 'Sports Equipment',
      description: 'Fitness equipment, sporting goods, and outdoor gear.',
      examples: ['Fitness equipment', 'Sports gear', 'Camping equipment', 'Outdoor accessories']
    },
    {
      icon: Stethoscope,
      name: 'Medical Supplies',
      description: 'Medical devices, equipment, and healthcare products.',
      examples: ['Medical devices', 'Healthcare equipment', 'Medical consumables', 'Personal protective equipment']
    },
    {
      icon: Sparkles,
      name: 'Beauty & Personal Care',
      description: 'Cosmetics, skincare, and personal care products.',
      examples: ['Skincare products', 'Cosmetics', 'Hair care', 'Personal care items']
    },
    {
      icon: Wrench,
      name: 'Industrial Components',
      description: 'Hardware, fasteners, and industrial parts.',
      examples: ['Fasteners', 'Hardware parts', 'Industrial tools', 'Mechanical components']
    }
  ];

  const capabilities = [
    'Factory direct sourcing',
    'Custom manufacturing',
    'Private labeling',
    'Quality control inspections',
    'Sample development',
    'Bulk order management'
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Products We Source</h1>
            <p className="text-xl text-gray-200">
              Extensive experience across multiple industries and product categories. Find the right suppliers for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card">
                <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                  <product.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h3 className="mb-2">{product.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{product.description}</p>
                <div className="pt-4 border-t border-[var(--border)]">
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">Examples</p>
                  <div className="flex flex-wrap gap-2">
                    {product.examples.map((example, idx) => (
                      <span key={idx} className="text-xs bg-[var(--background)] px-2 py-1 rounded">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Our Sourcing Capabilities</h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Regardless of your product category, we offer comprehensive sourcing services to meet your needs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="card py-4 text-center">
                  <p className="text-sm font-medium">{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary)]">
        <div className="container text-center">
          <h2 className="text-white mb-4">Don\'t See Your Product?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            We have connections across virtually all manufacturing industries in China. Contact us to discuss your specific sourcing needs.
          </p>
          <Link to="/contact" className="btn btn-cta text-lg px-8 py-4">
            Discuss Your Needs
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;