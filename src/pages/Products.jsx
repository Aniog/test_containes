import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Package,
  ArrowRight,
  CheckCircle,
  Search,
  Factory,
  FileCheck,
  Truck,
  Zap,
  Cpu,
  Shirt,
  Home,
  Wrench,
  Car,
  Gamepad2,
  Heart,
  Dumbbell,
} from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: <Cpu className="h-10 w-10" />,
      title: 'Electronics & Components',
      description: 'Consumer electronics, electronic components, circuit boards, sensors, and related products.',
      examples: ['Smartphones & Accessories', 'LED Lighting', 'Power Banks', 'Electronic Components', 'Consumer Electronics'],
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: <Shirt className="h-10 w-10" />,
      title: 'Textiles & Apparel',
      description: 'Clothing, fabrics, home textiles, and fashion accessories from leading textile manufacturers.',
      examples: ['Garments', 'Fabrics & Textiles', 'Home Textiles', 'Fashion Accessories', 'Sportswear'],
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: <Home className="h-10 w-10" />,
      title: 'Home & Garden',
      description: 'Home decor, furniture, kitchenware, and garden supplies from quality manufacturers.',
      examples: ['Furniture', 'Home Decor', 'Kitchenware', 'Garden Supplies', 'Storage Solutions'],
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: 'Industrial Equipment',
      description: 'Machinery, tools, industrial components, and equipment for various industries.',
      examples: ['Manufacturing Equipment', 'Tools & Hardware', 'Industrial Components', 'Safety Equipment', 'Material Handling'],
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: <Car className="h-10 w-10" />,
      title: 'Auto Parts',
      description: 'Automotive components, spare parts, and accessories from certified manufacturers.',
      examples: ['Engine Parts', 'Body Parts', 'Electrical Components', 'Accessories', 'Replacement Parts'],
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: <Gamepad2 className="h-10 w-10" />,
      title: 'Toys & Gifts',
      description: 'Toys, games, promotional items, and gift products with safety certifications.',
      examples: ['Educational Toys', 'Electronic Toys', 'Promotional Items', 'Gift Items', 'Party Supplies'],
      color: 'bg-yellow-50 text-yellow-600',
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: 'Health & Beauty',
      description: 'Beauty products, personal care items, and health supplements from reliable suppliers.',
      examples: ['Skincare Products', 'Hair Care', 'Personal Care', 'Health Supplements', 'Beauty Tools'],
      color: 'bg-pink-50 text-pink-600',
    },
    {
      icon: <Dumbbell className="h-10 w-10" />,
      title: 'Sports & Outdoors',
      description: 'Sports equipment, outdoor gear, fitness products, and recreational items.',
      examples: ['Fitness Equipment', 'Outdoor Gear', 'Sports Apparel', 'Camping Equipment', 'Recreation Products'],
      color: 'bg-teal-50 text-teal-600',
    },
  ];

  const capabilities = [
    {
      icon: <Search className="h-6 w-6" />,
      title: 'Product Sourcing',
      description: 'We find the right manufacturers for your specific product requirements.',
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: 'Factory Verification',
      description: 'We verify factories to ensure they meet quality and capacity requirements.',
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'Quality Control',
      description: 'Professional inspections to ensure products meet your standards.',
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Logistics',
      description: 'End-to-end shipping coordination from factory to your door.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              We source a wide range of products across multiple industries. From electronics to textiles, home goods to industrial equipment, we have the expertise and network to help you find the right products from reliable Chinese suppliers.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Tell Us What You Need
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start gap-4 p-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0">
                  {capability.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{capability.title}</h3>
                  <p className="text-sm text-slate-600">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Click on a category to learn more about the specific products we can help you source.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-900">Examples:</p>
                    <ul className="space-y-1">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              How we help you source products from China, from initial inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Requirements', desc: 'Tell us what you need' },
              { step: '2', title: 'Sourcing', desc: 'We find suppliers' },
              { step: '3', title: 'Verification', desc: 'We verify quality' },
              { step: '4', title: 'Delivery', desc: 'We ship to you' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            We source many more products than what's listed here. Contact us with your specific requirements and we'll let you know if we can help.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
