import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Cpu, Home, Shirt, Settings, 
  Package, Sparkles, Car, Gift
} from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Cpu,
      title: 'Electronics & Gadgets',
      description: 'Consumer electronics, smart devices, audio equipment, and electronic components from verified manufacturers.',
      moq: '500-5,000 units',
      leadTime: '4-8 weeks',
      examples: ['Smartphones', 'Wireless Earbuds', 'Smart Home Devices', 'LED Lighting', 'Power Banks']
    },
    {
      icon: Home,
      title: 'Home & Garden',
      description: 'Furniture, home decor, kitchenware, and garden equipment from established factories.',
      moq: '200-2,000 units',
      leadTime: '4-10 weeks',
      examples: ['Furniture', 'Kitchenware', 'Home Decor', 'Bedding', 'Garden Tools']
    },
    {
      icon: Shirt,
      title: 'Apparel & Textiles',
      description: 'Garments, fabrics, and textile products with options for custom manufacturing.',
      moq: '500-10,000 units',
      leadTime: '4-12 weeks',
      examples: ['T-Shirts', 'Jackets', 'Sportswear', 'Fabrics', 'Accessories']
    },
    {
      icon: Settings,
      title: 'Industrial Equipment',
      description: 'Machinery parts, tools, and industrial components for various applications.',
      moq: '100-1,000 units',
      leadTime: '6-16 weeks',
      examples: ['Machinery Parts', 'Power Tools', 'Industrial Sensors', 'Motors', 'Pumps']
    },
    {
      icon: Package,
      title: 'Packaging & Printing',
      description: 'Custom packaging solutions, printed materials, and promotional products.',
      moq: '1,000-50,000 units',
      leadTime: '2-6 weeks',
      examples: ['Paper Boxes', 'Plastic Packaging', 'Labels', 'Bags', 'Printed Materials']
    },
    {
      icon: Sparkles,
      title: 'Beauty & Personal Care',
      description: 'Cosmetics, skincare products, and personal care items from certified factories.',
      moq: '1,000-5,000 units',
      leadTime: '4-10 weeks',
      examples: ['Skincare', 'Makeup', 'Hair Care', 'Body Care', 'Fragrances']
    },
    {
      icon: Gift,
      title: 'Toys & Gifts',
      description: 'Educational toys, promotional items, and gift products from creative manufacturers.',
      moq: '500-5,000 units',
      leadTime: '4-8 weeks',
      examples: ['Educational Toys', 'Plush Toys', 'Puzzles', 'Promotional Gifts', 'Party Supplies']
    },
    {
      icon: Car,
      title: 'Automotive Parts',
      description: 'Vehicle parts, accessories, and components meeting international standards.',
      moq: '200-2,000 units',
      leadTime: '6-14 weeks',
      examples: ['Auto Parts', 'Car Accessories', 'Electronics', 'Interior Parts', 'Tires']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wide Range of Products from China
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              We source diverse product categories from verified Chinese manufacturers. Find your perfect supplier for any product need.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-card shadow-card p-8 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-text-primary mb-3">{product.title}</h2>
                    <p className="text-text-secondary mb-4">{product.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">MOQ</span>
                        <p className="text-sm text-text-primary">{product.moq}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Lead Time</span>
                        <p className="text-sm text-text-primary">{product.leadTime}</p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Examples</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {product.examples.map((example, eIndex) => (
                          <span 
                            key={eIndex}
                            className="px-3 py-1 bg-surface-alt text-text-secondary text-xs rounded-full"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-card p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Don't See Your Product?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We can source virtually any product from China. Contact us with your specific requirements and we'll find the right supplier.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-button hover:bg-accent-hover transition-colors"
            >
              Request Custom Sourcing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Info */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">How Product Sourcing Works</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our process ensures you find the right supplier for your specific product needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-card shadow-card p-8 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Submit Requirements</h3>
              <p className="text-text-secondary">Share your product specifications, quantity, and target pricing.</p>
            </div>
            <div className="bg-white rounded-card shadow-card p-8 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Get Supplier Matches</h3>
              <p className="text-text-secondary">We match you with 3-5 verified suppliers for your product.</p>
            </div>
            <div className="bg-white rounded-card shadow-card p-8 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Start Production</h3>
              <p className="text-text-secondary">Begin manufacturing with full quality monitoring and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Source Your Products?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your product sourcing needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-button hover:bg-gray-100 transition-colors"
          >
            Request Product Sourcing
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;