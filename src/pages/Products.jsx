import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Settings, Shirt, Home, Package, Dumbbell, ArrowRight,
  CheckCircle, Phone, Mail, MessageSquare
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const productCategories = [
  {
    icon: Cpu,
    name: 'Electronics & Components',
    description: 'From consumer electronics to industrial components, we connect you with manufacturers who meet international quality standards.',
    examples: [
      'PCB boards and components',
      'LED displays and lighting',
      'Consumer electronics',
      'Computer accessories',
      'Audio equipment',
      'Industrial sensors',
    ],
    color: 'blue',
  },
  {
    icon: Settings,
    name: 'Machinery & Equipment',
    description: 'Access verified manufacturers of industrial machinery, tools, and equipment for various applications.',
    examples: [
      'Industrial machinery',
      'Power tools',
      'Agricultural equipment',
      'Construction tools',
      'Spare parts',
      'Manufacturing equipment',
    ],
    color: 'purple',
  },
  {
    icon: Shirt,
    name: 'Textiles & Apparel',
    description: 'Connect with factories producing everything from raw fabrics to finished garments and fashion accessories.',
    examples: [
      'Fabrics and textiles',
      'Garments and clothing',
      'Bags and luggage',
      'Shoes and footwear',
      'Fashion accessories',
      'Sportswear',
    ],
    color: 'pink',
  },
  {
    icon: Home,
    name: 'Home & Garden',
    description: 'Source quality products for home improvement, furniture, and outdoor living from experienced manufacturers.',
    examples: [
      'Furniture and furnishings',
      'Home decor',
      'Kitchenware',
      'Outdoor equipment',
      'Garden tools',
      'Storage solutions',
    ],
    color: 'green',
  },
  {
    icon: Package,
    name: 'Packaging & Printing',
    description: 'Find reliable suppliers for packaging materials, printing services, and promotional products.',
    examples: [
      'Paper packaging',
      'Plastic packaging',
      'Custom printing',
      'Labels and stickers',
      'Promotional materials',
      'Eco-friendly packaging',
    ],
    color: 'amber',
  },
  {
    icon: Dumbbell,
    name: 'Sports & Recreation',
    description: 'Partner with manufacturers specializing in fitness equipment, outdoor gear, and sporting goods.',
    examples: [
      'Fitness equipment',
      'Outdoor recreation gear',
      'Camping equipment',
      'Bicycle accessories',
      'Sporting goods',
      'Yoga and wellness products',
    ],
    color: 'red',
  },
];

const otherCategories = [
  'Toys & Hobbies',
  'Automotive Parts',
  'Health & Beauty',
  'Jewelry & Watches',
  'Office Supplies',
  'Pet Products',
  'Cleaning Supplies',
  'Chemical Products',
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-slate-300">
              With established relationships across diverse industries, we can help you source virtually any product category from China.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  category.color === 'blue' ? 'bg-blue-100' :
                  category.color === 'purple' ? 'bg-purple-100' :
                  category.color === 'pink' ? 'bg-pink-100' :
                  category.color === 'green' ? 'bg-green-100' :
                  category.color === 'amber' ? 'bg-amber-100' :
                  'bg-red-100'
                }`}>
                  <category.icon className={`w-8 h-8 ${
                    category.color === 'blue' ? 'text-blue-700' :
                    category.color === 'purple' ? 'text-purple-700' :
                    category.color === 'pink' ? 'text-pink-700' :
                    category.color === 'green' ? 'text-green-700' :
                    category.color === 'amber' ? 'text-amber-700' :
                    'text-red-700'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{category.name}</h3>
                <p className="text-slate-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Also Available
            </h2>
            <p className="text-slate-600">
              Don't see your product category? We likely have supplier contacts for these as well.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCategories.map((category, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Reminder */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              Can't Find Your Product Category?
            </h2>
            <p className="text-slate-600 text-center mb-8">
              Our supplier network is extensive and constantly growing. If you have a specific product in mind, reach out and we'll do our best to find suitable manufacturers.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email Us</span>
              </a>
              <Link to="/contact" className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">Contact Form</span>
              </Link>
              <a href="tel:+8675512345678" className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-medium">Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Source Your Products?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us what you're looking for and we'll find the right suppliers for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
