import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cpu, Sofa, Shirt, Wrench, Box, Gift } from 'lucide-react';

const productCategories = [
  {
    icon: <Cpu className="w-10 h-10" />,
    name: 'Electronics & Components',
    description: 'A wide range of electronic products and components for various industries.',
    examples: [
      'Consumer electronics (headphones, speakers, chargers)',
      'PCB assemblies and electronic components',
      'LED lighting products',
      'Smart home devices',
      'Computer accessories',
      'Wiring harnesses and cables',
    ],
  },
  {
    icon: <Sofa className="w-10 h-10" />,
    name: 'Home & Garden',
    description: 'Quality home products and garden equipment from verified manufacturers.',
    examples: [
      'Indoor and outdoor furniture',
      'Home decor and accessories',
      'Kitchenware and appliances',
      'Garden tools and equipment',
      'Bedding and textiles',
      'Storage and organization',
    ],
  },
  {
    icon: <Shirt className="w-10 h-10" />,
    name: 'Apparel & Textiles',
    description: 'Garments and textile products with various customization options.',
    examples: [
      'Casual and formal wear',
      'Sportswear and activewear',
      'Workwear and uniforms',
      'bags and accessories',
      'Home textiles and fabrics',
      'Promotional apparel',
    ],
  },
  {
    icon: <Wrench className="w-10 h-10" />,
    name: 'Industrial Parts',
    description: 'Precision-manufactured industrial components and machinery parts.',
    examples: [
      'Metal stamping and machining parts',
      'Plastic injection molding',
      'Fasteners and hardware',
      'Tools and equipment',
      'Rubber and silicone parts',
      'Industrial machinery',
    ],
  },
  {
    icon: <Box className="w-10 h-10" />,
    name: 'Packaging Materials',
    description: 'Custom packaging solutions for various product types.',
    examples: [
      'Paper and cardboard packaging',
      'Plastic containers and bottles',
      'Metal packaging',
      'Eco-friendly packaging',
      'Labels and stickers',
      'Custom printing',
    ],
  },
  {
    icon: <Gift className="w-10 h-10" />,
    name: 'Promotional Products',
    description: 'Branded merchandise and promotional items for marketing.',
    examples: [
      'Custom drinkware',
      'Stationery and office supplies',
      'Tech accessories',
      'Outdoor and travel items',
      'Eco-friendly products',
      'Trade show giveaways',
    ],
  },
];

const sourcingBenefits = [
  'Access to thousands of verified manufacturers',
  'Competitive pricing through bulk ordering',
  'Flexible MOQ options available',
  'Quality control at every stage',
  'Full customization support',
  'Complete documentation handling',
];

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From electronics to textiles, we help you find reliable manufacturers 
              for a wide range of product categories.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Request a Product Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="section-title">Our Product Categories</h2>
          <p className="section-subtitle">
            We have experience sourcing products across diverse industries
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-50 text-[var(--color-primary)] rounded-xl flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-text)]">
                  {category.name}
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4 text-sm">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-text-secondary)]">
                        {example}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[var(--color-text)]">
                Benefits of Sourcing With Us
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8">
                We leverage our network and expertise to provide you with the best sourcing experience.
              </p>
              <div className="grid gap-4">
                {sourcingBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-[var(--color-text)]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6 text-[var(--color-text)]">
                Don't See Your Product?
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                We have extensive networks and can source products beyond the listed categories. 
                Contact us with your specific requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Tell Us What You Need
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-primary)] text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Source Your Products?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Get a free consultation and quote for your product sourcing needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
