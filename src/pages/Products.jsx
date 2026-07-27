import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const productCategories = [
  {
    name: 'Electronics & Components',
    description: 'Consumer electronics, components, PCBs, and electronic accessories.',
    examples: ['Smartphones & tablets', 'Audio equipment', 'PCBs & components', 'LED lighting', 'Power banks', 'Cables & connectors'],
    icon: '💻',
  },
  {
    name: 'Home Goods & Furniture',
    description: 'A wide range of home products and furniture for residential and commercial use.',
    examples: ['Kitchen appliances', 'Home decor', 'Furniture sets', 'Bedding & textiles', 'Storage solutions', 'Bathroom fixtures'],
    icon: '🏠',
  },
  {
    name: 'Textiles & Apparel',
    description: 'Clothing, fabrics, and textile products for various industries.',
    examples: ['Casual wear', 'Sportswear', 'Outdoor gear', 'Fashion accessories', 'Industrial textiles', 'Custom printing'],
    icon: '👕',
  },
  {
    name: 'Machinery & Equipment',
    description: 'Industrial machinery, equipment, and mechanical components.',
    examples: ['Manufacturing equipment', 'Agricultural machinery', 'Construction tools', 'CNC machines', 'Packaging equipment', 'Testing instruments'],
    icon: '⚙️',
  },
  {
    name: 'Packaging Materials',
    description: 'All types of packaging solutions for various industries.',
    examples: ['Paper packaging', 'Plastic containers', 'Metal containers', 'Eco-friendly options', 'Custom designs', 'Labeling solutions'],
    icon: '📦',
  },
  {
    name: 'Industrial Parts',
    description: 'Precision parts and components for industrial applications.',
    examples: ['Metal fabrication', 'Plastic molding', 'Rubber parts', 'Fasteners', 'Springs & shafts', 'Custom components'],
    icon: '🔩',
  },
  {
    name: 'Automotive Parts',
    description: 'Parts and accessories for automotive industry.',
    examples: ['Engine components', 'Body parts', 'Electrical systems', 'Interior accessories', 'Aftermarket parts', 'EV components'],
    icon: '🚗',
  },
  {
    name: 'Medical Devices',
    description: 'Medical equipment and devices meeting international standards.',
    examples: ['Diagnostic equipment', 'Surgical instruments', 'Wearable devices', 'Medical supplies', 'Laboratory equipment', 'Rehabilitation devices'],
    icon: '🏥',
  },
  {
    name: 'Sports & Outdoor',
    description: 'Equipment and gear for sports and outdoor activities.',
    examples: ['Fitness equipment', 'Camping gear', 'Water sports', 'Cycling accessories', 'Team sports', 'Outdoor recreation'],
    icon: '⚽',
  },
  {
    name: 'Toys & Games',
    description: 'Children\'s toys, games, and educational products.',
    examples: ['Educational toys', 'Board games', 'Action figures', 'Remote control vehicles', 'Outdoor toys', 'Puzzles & crafts'],
    icon: '🧸',
  },
  {
    name: 'Beauty & Personal Care',
    description: 'Cosmetics, skincare, and personal care products.',
    examples: ['Skincare products', 'Hair care', 'Makeup', 'Fragrances', 'Personal care tools', 'OEM/ODM services'],
    icon: '💄',
  },
  {
    name: 'Pet Supplies',
    description: 'Products for pets of all kinds.',
    examples: ['Pet food containers', 'Pet toys', 'Pet beds', 'Grooming supplies', 'Aquarium equipment', 'Pet carriers'],
    icon: '🐕',
  },
];

const capabilities = [
  {
    title: 'OEM & ODM Services',
    description: 'Original equipment manufacturing and original design manufacturing services for custom products.',
  },
  {
    title: 'Customization',
    description: 'Logo printing, packaging customization, and product modifications to meet your brand requirements.',
  },
  {
    title: 'Certification Support',
    description: 'Assistance with CE, FCC, UL, ISO, and other international certifications and compliance requirements.',
  },
  {
    title: 'Quality Standards',
    description: 'Products manufactured to meet international quality standards and your specific requirements.',
  },
];

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-secondary py-20 lg:py-28">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Products We Source
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              We have established relationships with manufacturers across a wide range of industries. 
              From electronics to furniture, machinery to medical devices — if you need it sourced from 
              China, we can help.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Request Product Sourcing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-background-light">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Browse by Category</h2>
            <p className="text-body">
              Click on any category to learn more about the types of products we source and the 
              suppliers we work with.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <div key={category.name} className="card-base card-hover">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">{category.name}</h3>
                    <p className="text-sm text-text-secondary">{category.description}</p>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-xs text-text-secondary mb-2 font-medium">Examples:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example) => (
                      <span
                        key={example}
                        className="text-xs bg-primary-50 text-primary px-2 py-1 rounded"
                      >
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

      {/* Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Capabilities</span>
            <h2 className="heading-2 mt-3 mb-4">What We Can Do</h2>
            <p className="text-body">
              Beyond simply finding suppliers, we offer comprehensive support to ensure your 
              products meet your exact specifications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability) => (
              <div key={capability.title} className="text-center">
                <div className="w-16 h-16 bg-accent-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-bold text-text-primary mb-2">{capability.title}</h3>
                <p className="text-sm text-text-secondary">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-4">Don't See Your Product?</h2>
            <p className="text-body mb-8">
              We source a wide variety of products beyond these categories. If you have a specific 
              product in mind, contact us and we'll let you know if we can help.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us About Your Product
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Source Your Products?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Tell us what you need and receive quotes from verified suppliers within 48 hours.
          </p>
          <Link to="/contact" className="btn-accent text-lg px-10 py-4">
            Get a Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
