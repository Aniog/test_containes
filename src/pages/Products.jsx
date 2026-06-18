import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  Cpu,
  Shirt,
  Wrench,
  Sofa,
  Box,
  Home,
  Watch,
  Car,
  Coffee,
  ArrowDown
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      icon: Cpu,
      name: 'Electronics',
      description: 'Consumer electronics, smart devices, PC accessories, audio/video equipment',
      suppliers: '2,400+',
      examples: ['Smartphones', 'Laptop accessories', 'LED lights', 'Power banks', 'Wireless chargers'],
    },
    {
      icon: Shirt,
      name: 'Textiles & Apparel',
      description: 'Garments, fabrics, accessories, and fashion items',
      suppliers: '3,200+',
      examples: ['T-shirts', 'Jackets', 'Sportswear', 'Silk products', 'Custom embroidery'],
    },
    {
      icon: Wrench,
      name: 'Machinery & Parts',
      description: 'Industrial machinery, mechanical parts, tools',
      suppliers: '1,800+',
      examples: ['CNC machines', 'Auto parts', 'Industrial tools', 'Pumps', 'Motors'],
    },
    {
      icon: Sofa,
      name: 'Furniture',
      description: 'Home and office furniture, outdoor furniture',
      suppliers: '1,500+',
      examples: ['Sofas', 'Chairs', 'Tables', 'Storage cabinets', 'Outdoor sets'],
    },
    {
      icon: Box,
      name: 'Packaging',
      description: 'All types of packaging materials and solutions',
      suppliers: '900+',
      examples: ['Paper boxes', 'Plastic containers', 'Gift boxes', 'Bags', 'Labels'],
    },
    {
      icon: Home,
      name: 'Home & Garden',
      description: 'Home decor, garden items, kitchenware',
      suppliers: '2,100+',
      examples: ['Kitchenware', 'Bedding', 'Decor', 'Garden tools', 'Pet supplies'],
    },
    {
      icon: Watch,
      name: 'Jewelry & Watches',
      description: 'Fashion jewelry, watches, accessories',
      suppliers: '1,200+',
      examples: ['Fashion jewelry', 'Smart watches', 'Crystal items', 'Silver jewelry', 'Watch bands'],
    },
    {
      icon: Car,
      name: 'Automotive',
      description: 'Car accessories, parts, and maintenance products',
      suppliers: '1,600+',
      examples: ['Car electronics', 'Seat covers', 'Car care products', 'LED lights', 'Tools'],
    },
    {
      icon: Coffee,
      name: 'Food & Beverage',
      description: 'Food processing equipment, packaging, ingredients',
      suppliers: '800+',
      examples: ['Processing equipment', 'Packaging machinery', 'Food ingredients', 'Beverage equipment'],
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#E67E22] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Products We Source
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            We have established networks across various product categories in China. Find the right supplier for your needs.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#1E3A5F] rounded-2xl flex items-center justify-center mb-6">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">{category.name}</h3>
                <p className="text-[#64748B] mb-4">{category.description}</p>
                <div className="flex items-center text-sm text-[#E67E22] font-semibold mb-4">
                  <span>{category.suppliers} verified suppliers</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold text-[#64748B] mb-2">Popular products:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.slice(0, 3).map((example, eIndex) => (
                      <span 
                        key={eIndex} 
                        className="text-xs bg-[#F8FAFC] text-[#64748B] px-3 py-1 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                    {category.examples.length > 3 && (
                      <span className="text-xs text-[#E67E22] font-semibold">
                        +{category.examples.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-6">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-[#64748B] mb-8">
            We have connections across many more categories. Contact us with your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-10 py-4 inline-flex items-center justify-center">
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="btn-outline px-8 py-4 inline-flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;