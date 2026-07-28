import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, Cpu, Factory, Shirt, Home, Box, Settings, 
  ArrowRight, CheckCircle, FileText
} from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      id: 'electronics',
      icon: Cpu,
      title: 'Electronics & Components',
      description: 'Wide range of electronic products and components from verified manufacturers.',
      products: [
        'Consumer electronics',
        'PCBs and components',
        'LED lighting',
        'Power supplies',
        'Sensors and controllers',
        'Connectors and cables',
        'Batteries and power banks',
        'Audio equipment',
      ],
      suppliers: 120,
      certifications: ['CE', 'FCC', 'RoHS', 'UL'],
    },
    {
      id: 'machinery',
      icon: Factory,
      title: 'Machinery & Equipment',
      description: 'Industrial machinery and equipment for various manufacturing needs.',
      products: [
        'CNC machines',
        'Packaging equipment',
        'Food processing machinery',
        'Textile machinery',
        'Printing equipment',
        'Welding machines',
        'Hydraulic equipment',
        'Construction machinery parts',
      ],
      suppliers: 85,
      certifications: ['ISO 9001', 'CE', 'SGS'],
    },
    {
      id: 'textiles',
      icon: Shirt,
      title: 'Textiles & Apparel',
      description: 'Complete textile and garment sourcing solutions for fashion and industrial use.',
      products: [
        'Casual and formal wear',
        'Sportswear and activewear',
        'Workwear and uniforms',
        'Home textiles',
        'Industrial fabrics',
        'Yarn and raw materials',
        'Accessories and trims',
        'Non-woven products',
      ],
      suppliers: 95,
      certifications: ['OEKO-TEX', 'GOTS', 'ISO 9001'],
    },
    {
      id: 'home',
      icon: Home,
      title: 'Home & Garden',
      description: 'Diverse range of home products and garden equipment.',
      products: [
        'Furniture and furnishings',
        'Kitchenware and cookware',
        'Home décor',
        'Garden tools and equipment',
        'Pet supplies',
        'Cleaning supplies',
        'Storage solutions',
        'DIY tools',
      ],
      suppliers: 110,
      certifications: ['REACH', 'LFGB', 'FDA'],
    },
    {
      id: 'packaging',
      icon: Box,
      title: 'Packaging Materials',
      description: 'Comprehensive packaging solutions for all industries.',
      products: [
        'Paper packaging',
        'Plastic packaging',
        'Metal containers',
        'Glass containers',
        'Eco-friendly packaging',
        'Labels and stickers',
        'Bags and sacks',
        'Industrial packaging',
      ],
      suppliers: 60,
      certifications: ['ISO 9001', 'FSC', 'SGS'],
    },
    {
      id: 'industrial',
      icon: Settings,
      title: 'Industrial Parts',
      description: 'Precision-engineered parts and components for industrial applications.',
      products: [
        'Metal parts and components',
        'Plastic parts',
        'Rubber components',
        'Fasteners and hardware',
        'Bearings and shafts',
        'Gears and pulleys',
        'Seals and gaskets',
        'Custom machined parts',
      ],
      suppliers: 150,
      certifications: ['ISO 9001', 'IATF 16949', 'SGS'],
    },
  ];

  const whySourceWithUs = [
    {
      title: 'Verified Suppliers',
      description: 'All suppliers in our network have been thoroughly vetted and verified.',
    },
    {
      title: 'Quality Assured',
      description: 'Professional QC at every stage ensures consistent quality.',
    },
    {
      title: 'Competitive Pricing',
      description: 'Our supplier relationships and volume purchasing power benefit you.',
    },
    {
      title: 'Full Support',
      description: 'End-to-end service from inquiry to delivery.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Products We Source
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              With experience across 15+ industries and a network of 500+ verified suppliers, 
              we can help you source virtually any product from China.
            </p>
            <Link to="/contact" className="btn-primary">
              Start Your Product Search
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="section-header">
            <h2>Product Categories</h2>
            <p>Explore the product categories we specialize in sourcing</p>
          </div>
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div 
                key={category.id} 
                id={category.id}
                className={`scroll-mt-20 ${
                  index % 2 === 0 ? '' : 'bg-gray-50 -mx-4 px-4 py-12 rounded-2xl md:-mx-12 md:px-12'
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                        <category.icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {category.title}
                        </h2>
                        <p className="text-gray-500">{category.suppliers}+ verified suppliers</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">
                      {category.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Products we source:</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {category.products.map((product, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{product}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-gray-500 mr-2">Certifications available:</span>
                      {category.certifications.map((cert, i) => (
                        <span key={i} className="badge-blue text-xs">{cert}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 flex items-center justify-center h-64 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}>
                    <category.icon className="w-24 h-24 text-blue-600/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Source With Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="section-header">
            <h2>Why Source With Us</h2>
            <p>Benefits of using SSourcing China for your product sourcing</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySourceWithUs.map((item, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Products */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Product?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              We have experience sourcing products across many additional categories. Contact us 
              with your specific requirements and we'll find the right suppliers for you.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              <FileText className="w-5 h-5 mr-2" />
              Submit Custom Request
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your product requirements. 
            Our team will respond within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
