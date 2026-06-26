import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Home, 
  Package, 
  Settings,
  Shirt,
  Dumbbell,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Factory,
  Lightbulb,
  Wrench,
  Smartphone,
  Package as PackageIcon,
  ShoppingBag
} from 'lucide-react';

const productCategories = [
  {
    id: 'electronics',
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'From consumer electronics to industrial components, we connect you with reliable manufacturers.',
    examples: [
      'Smart home devices',
      'Consumer electronics',
      'PCBs and components',
      'LED lighting',
      'Power supplies',
      'Audio equipment',
      'Industrial electronics',
      'Electronic accessories'
    ],
    certifications: ['CE', 'UL', 'RoHS', 'FCC', 'CCC'],
    image: 'electronics manufacturing'
  },
  {
    id: 'home-goods',
    icon: Home,
    title: 'Home Goods & Furnishings',
    description: 'Quality home products manufactured to international standards and specifications.',
    examples: [
      'Furniture components',
      'Home decor',
      'Kitchenware',
      'Bathroom accessories',
      'Lighting fixtures',
      'Storage solutions',
      'Garden products',
      'Smart home products'
    ],
    certifications: ['CSA', 'ETL', 'BIFMA', 'EN'],
    image: 'furniture manufacturing'
  },
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging Materials',
    description: 'Comprehensive packaging solutions for retail, industrial, and e-commerce needs.',
    examples: [
      'Paper packaging',
      'Plastic containers',
      'Custom boxes',
      'Labels and stickers',
      'Protective packaging',
      'Eco-friendly options',
      'Retail packaging',
      'Industrial packaging'
    ],
    certifications: ['FSC', 'ISO', 'SGS'],
    image: 'packaging manufacturing'
  },
  {
    id: 'machinery',
    icon: Settings,
    title: 'Machinery & Industrial Parts',
    description: 'Precision-engineered components and machinery for various industries.',
    examples: [
      'Industrial equipment',
      'Mechanical components',
      'Hardware and fasteners',
      'Precision parts',
      'Molds and dies',
      'Hydraulic systems',
      'CNC parts',
      'Sheet metal fabrication'
    ],
    certifications: ['ISO 9001', 'CE', 'SGS'],
    image: 'machinery parts factory'
  },
  {
    id: 'textiles',
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'From fabrics to finished garments, quality textile manufacturing solutions.',
    examples: [
      'Fabrics and materials',
      'Garments',
      'Accessories',
      'Home textiles',
      'Sportswear',
      'Workwear',
      'Outdoor fabrics',
      'Technical textiles'
    ],
    certifications: ['OEKO-TEX', 'GOTS', 'BSCI', 'WRAP'],
    image: 'textile factory production'
  },
  {
    id: 'outdoor',
    icon: Dumbbell,
    title: 'Outdoor & Sporting Goods',
    description: 'Durable products for active lifestyles, manufactured to rigorous standards.',
    examples: [
      'Camping equipment',
      'Fitness equipment',
      'Sports gear',
      'Bicycle accessories',
      'Water sports equipment',
      'Hiking gear',
      'Yoga and fitness accessories',
      'Outdoor furniture'
    ],
    certifications: ['CE', 'CPSC', 'ASTM'],
    image: 'sports equipment manufacturing'
  }
];

const otherCategories = [
  { name: 'Toys & Games', icon: Dumbbell },
  { name: 'Automotive Parts', icon: Settings },
  { name: 'Beauty & Personal Care', icon: PackageIcon },
  { name: 'Pet Products', icon: ShoppingBag },
  { name: 'Office Supplies', icon: PackageIcon },
  { name: 'Jewelry & Accessories', icon: Lightbulb },
];

const ProductCategory = ({ category }) => {
  return (
    <div id={category.id} className="scroll-mt-24 bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="grid lg:grid-cols-2">
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
              <category.icon className="w-7 h-7 text-primary-800" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-neutral-900">{category.title}</h2>
              <p className="text-sm text-neutral-500">{category.description}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-neutral-900 mb-3">Products We Source</h3>
            <div className="grid grid-cols-2 gap-2">
              {category.examples.map((example) => (
                <div key={example} className="flex items-center gap-2 text-sm text-neutral-600">
                  <CheckCircle2 className="w-4 h-4 text-success-500 flex-shrink-0" />
                  {example}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900 mb-3">Common Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {category.certifications.map((cert) => (
                <span 
                  key={cert} 
                  className="text-xs font-medium text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-100"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div 
          className="aspect-video lg:aspect-auto bg-gradient-to-br from-neutral-100 to-neutral-200 relative"
          data-strk-bg-id={`product-${category.id}-img-j1k2l3`}
          data-strk-bg={`[product-${category.id}-title]`}
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="600"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <category.icon className="w-24 h-24 text-neutral-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Products We Source from China
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              We have established relationships with manufacturers across diverse product categories. Whether you need consumer goods, industrial components, or custom manufacturing, we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {productCategories.map((category) => (
              <ProductCategory key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">And More</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">Other Categories We Handle</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Don't see your product category? Contact us - we likely have suppliers for it or can find them.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherCategories.map((category) => (
              <div 
                key={category.name} 
                className="bg-white rounded-lg p-4 border border-neutral-200 text-center hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <category.icon className="w-6 h-6 text-neutral-600" />
                </div>
                <p className="text-sm font-medium text-neutral-900">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">How We Source Your Products</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Submit Request</h3>
              <p className="text-sm text-neutral-600">Tell us what you need</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">We Research</h3>
              <p className="text-sm text-neutral-600">Find suitable suppliers</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">We Verify</h3>
              <p className="text-sm text-neutral-600">Factory visits and audits</p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">We Manage</h3>
              <p className="text-sm text-neutral-600">QC, production, shipping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Inquiry */}
      <section className="py-16 lg:py-24 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Don't See Your Product?
              </h2>
              <p className="text-xl text-primary-200 mb-6">
                We likely have suppliers for it or can find them. Contact us with your requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-400" />
                  <span className="text-primary-100">We respond within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-400" />
                  <span className="text-primary-100">Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-400" />
                  <span className="text-primary-100">No obligation quote</span>
                </div>
              </div>
            </div>
            <div className="bg-primary-800 rounded-xl p-6 lg:p-8">
              <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:info@ssourcingchina.com" 
                  className="flex items-center gap-3 text-primary-100 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@ssourcingchina.com</span>
                </a>
                <a 
                  href="tel:+8675512345678" 
                  className="flex items-center gap-3 text-primary-100 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+86 755 1234 5678</span>
                </a>
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center"
                >
                  Get a Custom Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
