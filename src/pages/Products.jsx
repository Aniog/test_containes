import { Link } from 'react-router-dom';
import { Cpu, Home, Wrench, Shirt, Package, Heart, Phone, Monitor, Car, Gift, ArrowRight } from 'lucide-react';

const productCategories = [
  {
    id: 'electronics',
    icon: Cpu,
    title: 'Electronics & Technology',
    description: 'From consumer electronics to industrial components, we connect you with verified manufacturers for all your tech product needs.',
    examples: [
      'Consumer electronics (headphones, speakers, chargers)',
      'Smart devices and IoT products',
      'PCBs and electronic components',
      'LED lighting and displays',
      'Computer peripherals and accessories',
      'Mobile phone accessories',
    ],
    imageId: 'products-electronics-img-abc123',
  },
  {
    id: 'home',
    icon: Home,
    title: 'Home & Garden',
    description: 'Source quality furniture, home decor, and outdoor products from established manufacturers.',
    examples: [
      'Furniture (indoor and outdoor)',
      'Home decor and artwork',
      'Kitchenware and cookware',
      'Bedding and linens',
      'Garden tools and outdoor equipment',
      'Storage and organization',
    ],
    imageId: 'products-home-img-def456',
  },
  {
    id: 'industrial',
    icon: Wrench,
    title: 'Industrial & Hardware',
    description: 'Find reliable suppliers for machinery, tools, and industrial components.',
    examples: [
      'Power tools and hand tools',
      'Hardware (fasteners, hinges, locks)',
      'Industrial machinery parts',
      'Automotive parts and accessories',
      'Electrical components',
      'Safety equipment',
    ],
    imageId: 'products-industrial-img-ghi789',
  },
  {
    id: 'textiles',
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Connect with garment manufacturers and fabric suppliers for your fashion brand.',
    examples: [
      'Clothing (casual, sports, formal)',
      'Footwear and accessories',
      'Fabrics and raw materials',
      'Bags and luggage',
      'Hats and scarves',
      'Home textiles (curtains, carpets)',
    ],
    imageId: 'products-textiles-img-jkl012',
  },
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging Materials',
    description: 'Sustainable and cost-effective packaging solutions for your products.',
    examples: [
      'Corrugated boxes and cartons',
      'Paper bags and kraft packaging',
      'Eco-friendly materials',
      'Labels and stickers',
      'Bubble wrap and protective materials',
      'Retail packaging',
    ],
    imageId: 'products-packaging-img-mno345',
  },
  {
    id: 'beauty',
    icon: Heart,
    title: 'Health & Beauty',
    description: 'Partner with GMP-certified manufacturers for cosmetics and personal care products.',
    examples: [
      'Skincare products',
      'Hair care items',
      'Makeup and cosmetics',
      'Personal care devices',
      'Health supplements',
      'Organic and natural products',
    ],
    imageId: 'products-beauty-img-pqr678',
  },
  {
    id: 'toys',
    icon: Gift,
    title: 'Toys & Games',
    description: 'Find safe, certified toy manufacturers meeting international safety standards.',
    examples: [
      'Educational toys',
      'Electronic toys',
      'Plush toys and dolls',
      'Board games and puzzles',
      'Outdoor play equipment',
      'Arts and crafts supplies',
    ],
    imageId: 'products-toys-img-stu901',
  },
  {
    id: 'automotive',
    icon: Car,
    title: 'Automotive Parts',
    description: 'Source quality auto parts and accessories from verified manufacturers.',
    examples: [
      'Car accessories',
      'Replacement parts',
      'Electronics and GPS',
      'Cleaning and maintenance',
      'Safety equipment',
      'Performance parts',
    ],
    imageId: 'products-automotive-img-vwx234',
  },
];

const ProductCard = ({ category }) => {
  const Icon = category.icon;
  
  return (
    <div id={category.id} className="scroll-mt-24 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 h-48 flex items-center justify-center">
        <Icon className="w-20 h-20 text-neutral-400" />
      </div>
      <div className="p-6">
        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 -mt-12 relative z-10 border-4 border-white">
          <Icon className="w-6 h-6 text-primary-700" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          {category.title}
        </h3>
        <p className="text-neutral-500 mb-4">
          {category.description}
        </p>
        <ul className="space-y-2">
          {category.examples.slice(0, 4).map((example) => (
            <li key={example} className="flex items-start gap-2 text-sm text-neutral-600">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 shrink-0" />
              {example}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="inline-flex items-center text-primary-700 font-medium text-sm mt-4 hover:gap-2 transition-all"
        >
          Request Quote for {category.title}
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              Product Categories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source from China
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              We have established relationships with verified manufacturers across diverse product categories. If you need it, we'll find the right supplier.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Request Custom Sourcing
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <ProductCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Product */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-primary-700" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Don't See Your Product Category?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              We source a wide variety of products beyond these categories. Whether you need custom manufacturing, OEM/ODM services, or unique products, contact us with your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-accent text-lg px-8 py-4">
                Request Custom Sourcing
              </Link>
              <Link to="/how-it-works" className="btn-secondary text-lg px-8 py-4">
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your product sourcing needs.
          </p>
          <Link to="/contact" className="btn-accent text-lg px-8 py-4">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
