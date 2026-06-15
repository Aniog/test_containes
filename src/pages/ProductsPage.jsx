import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  Smartphone, 
  Home, 
  Shirt, 
  Car, 
  Wrench, 
  Gamepad2, 
  Armchair,
  Dumbbell,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ProductsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-blue-100">
              Extensive experience across diverse industries and product categories
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have successfully sourced products across these categories for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-8 h-8" />,
                category: 'Electronics & Gadgets',
                description: 'Consumer electronics, smart devices, accessories, and electronic components',
                examples: ['Smartphones & Tablets', 'Wearables & Smart Home', 'Audio & Video Equipment', 'Electronic Components']
              },
              {
                icon: <Home className="w-8 h-8" />,
                category: 'Home & Garden',
                description: 'Home decor, furniture, kitchenware, and outdoor living products',
                examples: ['Home Decor & Wall Art', 'Kitchen & Dining', 'Garden Tools & Furniture', 'Lighting & Lamps']
              },
              {
                icon: <Shirt className="w-8 h-8" />,
                category: 'Fashion & Apparel',
                description: 'Clothing, footwear, accessories, and textile products',
                examples: ['Men\'s & Women\'s Clothing', 'Sportswear & Activewear', 'Bags & Luggage', 'Hats & Accessories']
              },
              {
                icon: <Car className="w-8 h-8" />,
                category: 'Automotive Parts',
                description: 'Auto parts, accessories, tools, and aftermarket components',
                examples: ['Engine Parts & Components', 'Body Parts & Panels', 'Electrical & Lighting', 'Tools & Garage Equipment']
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                category: 'Industrial Equipment',
                description: 'Machinery, tools, equipment, and industrial supplies',
                examples: ['Manufacturing Equipment', 'Power Tools & Hand Tools', 'Safety Equipment', 'Warehouse & Storage']
              },
              {
                icon: <Gamepad2 className="w-8 h-8" />,
                category: 'Toys & Gifts',
                description: 'Toys, games, promotional items, and gift products',
                examples: ['Children\'s Toys & Games', 'Promotional Products', 'Gift Sets & Packaging', 'Seasonal & Holiday Items']
              },
              {
                icon: <Armchair className="w-8 h-8" />,
                category: 'Furniture & Decor',
                description: 'Residential and commercial furniture, fixtures, and decorative items',
                examples: ['Living Room Furniture', 'Office Furniture', 'Outdoor & Patio', 'Mirrors & Wall Decor']
              },
              {
                icon: <Dumbbell className="w-8 h-8" />,
                category: 'Sports & Outdoor',
                description: 'Sports equipment, outdoor gear, fitness products, and recreational items',
                examples: ['Fitness & Gym Equipment', 'Outdoor & Camping Gear', 'Cycling & Skating', 'Water Sports & Swimming']
              },
              {
                icon: <Package className="w-8 h-8" />,
                category: 'And Many More...',
                description: 'We continuously expand our sourcing capabilities to meet client needs',
                examples: ['Pet Supplies & Accessories', 'Beauty & Personal Care', 'Office & School Supplies', 'Food & Beverage Packaging']
              }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center mb-4">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.category}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-2">
                  {product.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Retail & E-commerce',
              'Wholesale & Distribution',
              'Manufacturing',
              'Construction',
              'Healthcare',
              'Hospitality'
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:bg-blue-50 hover:border-blue-200 border-2 border-transparent transition-all">
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What we can do for your product sourcing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Low Minimum Order Quantities (MOQ)',
                description: 'We negotiate with suppliers to achieve MOQs as low as 100-500 units for suitable products.'
              },
              {
                title: 'Customization & OEM/ODM',
                description: 'We help you customize products with your branding, packaging, and specifications.'
              },
              {
                title: 'Quality Certifications',
                description: 'We source products with CE, FCC, RoHS, FDA, and other required certifications.'
              },
              {
                title: 'Packaging & Labeling',
                description: 'We coordinate custom packaging, private labeling, and barcode printing.'
              },
              {
                title: 'Sample Coordination',
                description: 'We facilitate sample production and shipping for your evaluation before bulk orders.'
              },
              {
                title: 'Compliance & Testing',
                description: 'We arrange third-party testing (SGS, Intertek, TUV) to ensure compliance.'
              }
            ].map((capability, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-padding bg-blue-700 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sourcing Success Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2000+', label: 'Products Sourced' },
              { number: '500+', label: 'Clients Served' },
              { number: '98%', label: 'Quality Pass Rate' },
              { number: '25+', label: 'Countries Shipped To' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Don't See Your Product Category?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're constantly expanding our sourcing capabilities. Contact us with your specific 
            product requirements - we'll find the right supplier for you.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
            Discuss Your Product Needs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
