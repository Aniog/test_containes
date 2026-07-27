import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Components',
      description: 'Consumer electronics, electronic components, circuit boards, connectors, and related products.',
      examples: ['Smartphones & Accessories', 'LED Lighting', 'Power Banks', 'Audio Equipment', 'Electronic Components']
    },
    {
      name: 'Textiles & Apparel',
      description: 'Fabrics, garments, home textiles, and fashion accessories from experienced manufacturers.',
      examples: ['Cotton Fabrics', 'Garments', 'Home Textiles', 'Sportswear', 'Fashion Accessories']
    },
    {
      name: 'Home & Garden',
      description: 'Furniture, decor, kitchenware, and outdoor products for homes and gardens.',
      examples: ['Furniture', 'Kitchenware', 'Home Decor', 'Garden Tools', 'Storage Solutions']
    },
    {
      name: 'Toys & Gifts',
      description: 'Toys, games, promotional items, and gift products with safety certifications.',
      examples: ['Educational Toys', 'Action Figures', 'Promotional Gifts', 'Party Supplies', 'Craft Kits']
    },
    {
      name: 'Auto Parts',
      description: 'Automotive components, spare parts, and accessories for various vehicle types.',
      examples: ['Engine Parts', 'Brake Systems', 'Electrical Components', 'Body Parts', 'Accessories']
    },
    {
      name: 'Industrial Equipment',
      description: 'Machinery, tools, and equipment for industrial and commercial applications.',
      examples: ['Power Tools', 'Construction Equipment', 'Manufacturing Machinery', 'Safety Equipment', 'Measuring Tools']
    },
    {
      name: 'Packaging Materials',
      description: 'Packaging solutions, materials, and containers for various industries.',
      examples: ['Plastic Packaging', 'Paper & Cardboard', 'Metal Containers', 'Packaging Machines', 'Eco-friendly Materials']
    },
    {
      name: 'Health & Beauty',
      description: 'Personal care, cosmetics, and health products from certified manufacturers.',
      examples: ['Skincare Products', 'Hair Care', 'Makeup', 'Health Supplements', 'Personal Care Devices']
    },
    {
      name: 'Sports & Outdoors',
      description: 'Sports equipment, outdoor gear, and fitness products for active lifestyles.',
      examples: ['Fitness Equipment', 'Camping Gear', 'Sports Apparel', 'Outdoor Accessories', 'Exercise Machines']
    },
    {
      name: 'Jewelry & Accessories',
      description: 'Fashion jewelry, watches, sunglasses, and other fashion accessories.',
      examples: ['Fashion Jewelry', 'Watches', 'Sunglasses', 'Bags & Wallets', 'Belts & Ties']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We source a wide range of products across multiple industries. Our extensive network of verified suppliers means we can find exactly what you need.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Request a Product Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Click on any category to learn more about the products we source in that area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-slate-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="w-full">
                      Inquire About This Category <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We source many more products than what is listed here. Contact us with your specific product requirements and we will find the right suppliers for you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Us for Custom Sourcing
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
