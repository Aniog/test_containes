import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Package } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      category: 'Electronics & Gadgets',
      description: 'Consumer electronics, electronic components, smart home devices, and tech accessories.',
      examples: ['Smartphones & accessories', 'LED lighting', 'Power banks', 'Cables & adapters', 'Wearables'],
      image: 'electronics-gadgets'
    },
    {
      category: 'Home & Garden',
      description: 'Home decor, furniture, kitchenware, gardening tools, and outdoor living products.',
      examples: ['Furniture', 'Kitchen gadgets', 'Home decor', 'Garden tools', 'Storage solutions'],
      image: 'home-garden'
    },
    {
      category: 'Fashion & Accessories',
      description: 'Clothing, shoes, bags, jewelry, and fashion accessories for all demographics.',
      examples: ['Apparel', 'Footwear', 'Bags & luggage', 'Jewelry', 'Watches'],
      image: 'fashion-accessories'
    },
    {
      category: 'Toys & Gifts',
      description: 'Toys, games, promotional gifts, and seasonal products for all occasions.',
      examples: ['Toys & games', 'Promotional gifts', 'Holiday decorations', 'Party supplies', 'Novelty items'],
      image: 'toys-gifts'
    },
    {
      category: 'Automotive & Motorcycle',
      description: 'Auto parts, motorcycle accessories, car electronics, and garage equipment.',
      examples: ['Replacement parts', 'Car accessories', 'Motorcycle parts', 'Garage tools', 'Car electronics'],
      image: 'automotive-parts'
    },
    {
      category: 'Industrial & Commercial',
      description: 'Machinery, equipment, tools, and supplies for industrial and commercial use.',
      examples: ['Machinery', 'Power tools', 'Safety equipment', 'Packaging materials', 'Office supplies'],
      image: 'industrial-equipment'
    },
    {
      category: 'Beauty & Personal Care',
      description: 'Cosmetics, skincare, haircare, personal care products, and beauty tools.',
      examples: ['Cosmetics', 'Skincare', 'Haircare', 'Beauty tools', 'Personal care'],
      image: 'beauty-personal-care'
    },
    {
      category: 'Sports & Outdoor',
      description: 'Fitness equipment, outdoor gear, sports accessories, and recreational products.',
      examples: ['Fitness equipment', 'Outdoor gear', 'Sports accessories', 'Camping equipment', 'Yoga & pilates'],
      image: 'sports-outdoor'
    },
    {
      category: 'Packaging & Printing',
      description: 'Custom packaging, labels, printed materials, and branding solutions.',
      examples: ['Custom boxes', 'Labels & stickers', 'Business cards', 'Brochures', 'Bags & pouches'],
      image: 'packaging-printing'
    },
    {
      category: 'Textiles & Fabrics',
      description: 'Fabrics, textiles, yarns, and related materials for manufacturing and crafts.',
      examples: ['Fabrics', 'Yarns', 'Textile raw materials', 'Upholstery', 'Technical textiles'],
      image: 'textiles-fabrics'
    },
    {
      category: 'Food & Beverage',
      description: 'Food products, beverages, supplements, and related packaging (with proper certifications).',
      examples: ['Packaged foods', 'Tea & coffee', 'Supplements', 'Food packaging', 'Kitchen tools'],
      image: 'food-beverage'
    },
    {
      category: 'Pet Supplies',
      description: 'Pet toys, accessories, grooming tools, and pet care products.',
      examples: ['Pet toys', 'Grooming tools', 'Pet accessories', 'Aquarium supplies', 'Pet furniture'],
      image: 'pet-supplies'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We have extensive experience sourcing a wide range of products across various industries.
              Our expertise helps you find the right suppliers and ensure quality for your specific product category.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories We Specialize In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Click on any category to learn more about our sourcing experience and capabilities in that area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Package className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{product.category}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.examples.map((example, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process for Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Source Your Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Category Expertise',
                description: 'We assign a sourcing specialist with experience in your product category.'
              },
              {
                step: '2',
                title: 'Supplier Matching',
                description: 'We identify suppliers with proven track record in your product type and quality requirements.'
              },
              {
                step: '3',
                title: 'Sample Validation',
                description: 'We help you evaluate samples and verify they meet your specifications before ordering.'
              },
              {
                step: '4',
                title: 'Quality Assurance',
                description: 'We conduct category-specific quality checks tailored to your product\'s requirements.'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Standards We Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help you source products that meet international quality and safety standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['ISO 9001', 'CE Certification', 'FDA Approval', 'RoHS Compliance', 'REACH Compliance', 'FCC Certification'].map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors">
                <div className="font-semibold text-gray-900">{cert}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Not sure what certifications your product needs? We can advise you based on your target market and product type.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get Certification Advice
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Product Category?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            We source many other products not listed here. Contact us with your specific requirements -
            chances are we have experience sourcing similar products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8">
                Discuss Your Product
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
