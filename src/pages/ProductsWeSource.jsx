import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, Cpu, Home, Shirt, Wrench, Zap, Gift, Car,
  ArrowRight, CheckCircle, Search
} from 'lucide-react';

const categories = [
  {
    icon: Package,
    title: 'Consumer Electronics',
    subcategories: ['Smartphones & Tablets', 'Audio Equipment', 'Wearable Devices', 'Chargers & Accessories', 'Smart Home Devices'],
    description: 'We source a wide range of consumer electronics from certified manufacturers in Shenzhen and Guangzhou.',
  },
  {
    icon: Home,
    title: 'Home & Garden',
    subcategories: ['Furniture', 'Lighting', 'Kitchenware', 'Outdoor Equipment', 'Home Decor'],
    description: 'Quality home products from established manufacturers with export experience and international certifications.',
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    subcategories: ['Casual Wear', 'Workwear', 'Sportswear', 'Fabrics', 'Fashion Accessories'],
    description: 'Custom apparel manufacturing with flexible MOQs and full customization capabilities.',
  },
  {
    icon: Wrench,
    title: 'Industrial Equipment',
    subcategories: ['Manufacturing Machinery', 'Industrial Tools', 'Safety Equipment', 'Hydraulic Systems', 'Automation Components'],
    description: 'Heavy-duty industrial equipment from specialized manufacturers with technical expertise.',
  },
  {
    icon: Cpu,
    title: 'Hardware & Tools',
    subcategories: ['Hand Tools', 'Power Tools', 'Fasteners', 'Plumbing Supplies', 'Electrical Components'],
    description: 'Professional-grade hardware and tools for construction, maintenance, and industrial applications.',
  },
  {
    icon: Zap,
    title: 'Auto Parts',
    subcategories: ['Engine Components', 'Brake Systems', 'Electrical Parts', 'Body Panels', 'Interior Accessories'],
    description: 'OEM and aftermarket auto parts with quality testing and certification support.',
  },
  {
    icon: Gift,
    title: 'Promotional Items',
    subcategories: ['Custom Merchandise', 'Corporate Gifts', 'Event Giveaways', 'Branded Products', 'Packaging'],
    description: 'Custom branded merchandise with full logo printing and packaging customization.',
  },
  {
    icon: Car,
    title: 'Beauty & Health',
    subcategories: ['Cosmetics', 'Skincare', 'Supplements', 'Wellness Products', 'Personal Care'],
    description: 'FDA-compliant beauty and health products from GMP-certified facilities.',
  },
];

const whyChooseUs = [
  'Access to 500+ verified suppliers across all major industrial regions',
  'Minimum order quantities as low as 100 units for select categories',
  'Full product customization including packaging and branding',
  'International quality certifications (CE, FCC, UL, FDA)',
  'Competitive pricing through direct manufacturer relationships',
  'Sample production within 7-14 days',
];

const ProductsWeSourcePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Products We Source
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We source products across multiple industries with a focus on quality, competitive pricing, and reliable delivery.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="bg-bg-light rounded-xl p-8 border border-border-light hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">{category.title}</h3>
                    <p className="text-text-secondary text-sm">{category.description}</p>
                  </div>
                </div>
                
                <div className="ml-18">
                  <h4 className="text-sm font-semibold text-text-primary mb-3">Subcategories:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.map((sub) => (
                      <span key={sub} className="bg-white text-text-secondary text-sm px-3 py-1 rounded-full border border-border-light">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Why Source Products Through Us?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                We combine local expertise with international standards to ensure you get quality products at competitive prices.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border-light">
              <div className="aspect-square bg-bg-light rounded-xl flex items-center justify-center">
                <Search className="w-32 h-32 text-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Don't See Your Product Category?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            We work with manufacturers across all industries. Contact us with your specific requirements and we'll find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg"
          >
            Request Custom Sourcing
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsWeSourcePage;
