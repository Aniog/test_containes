import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Sofa, 
  Shirt, 
  Settings, 
  Package, 
  ShoppingBag, 
  Car, 
  Wrench,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const ProductsPage = () => {
  const categories = [
    {
      icon: Laptop,
      name: 'Electronics & Gadgets',
      examples: ['Smartphones & Tablets', 'Laptops & Computers', 'Consumer Electronics', 'LED Lighting', 'Power Banks', 'Audio Equipment'],
    },
    {
      icon: Sofa,
      name: 'Furniture & Home Goods',
      examples: ['Office Furniture', 'Home Furniture', 'Kitchenware', 'Bedding & Linens', 'Home Decor', 'Outdoor Furniture'],
    },
    {
      icon: Shirt,
      name: 'Textiles & Apparel',
      examples: ['Casual Wear', 'Sportswear', 'Formal Attire', 'Children\'s Clothing', 'Fashion Accessories', 'Industrial Textiles'],
    },
    {
      icon: Settings,
      name: 'Machinery & Equipment',
      examples: ['Industrial Machinery', 'Agricultural Equipment', 'Construction Tools', 'Medical Equipment', 'Packaging Machinery', 'CNC Machines'],
    },
    {
      icon: Package,
      name: 'Packaging Materials',
      examples: ['Paper Packaging', 'Plastic Packaging', 'Corrugated Boxes', 'Labels & Stickers', 'Flexible Packaging', 'Bottles & Containers'],
    },
    {
      icon: ShoppingBag,
      name: 'Consumer Products',
      examples: ['Kitchen Appliances', 'Cleaning Products', 'Health & Beauty', 'Toys & Games', 'Pet Supplies', 'Sports Equipment'],
    },
    {
      icon: Car,
      name: 'Automotive Parts',
      examples: ['Auto Parts', 'Motorcycle Accessories', 'Car Electronics', 'Tires & Wheels', 'Interior Parts', 'Engine Components'],
    },
    {
      icon: Wrench,
      name: 'Industrial Components',
      examples: ['Hardware & Fasteners', 'Plumbing Parts', 'Electrical Components', 'Rubber Parts', 'Metal Fabrication', 'Precision Parts'],
    },
  ];

  const capabilities = [
    'OEM & ODM Manufacturing',
    'Custom Design & Prototyping',
    'Small Batch Production',
    'Mass Production',
    'Private Labeling',
    'Drop Shipping',
  ];

  const testimonials = [
    {
      quote: "SSourcing China helped us find a reliable electronics manufacturer. Their verification process gave us confidence, and the QC inspections ensured quality.",
      author: "Michael Thompson",
      company: "TechDistributors Inc.",
      location: "USA",
    },
    {
      quote: "We've been working with SSourcing China for 3 years. Their sourcing expertise and quality control have been invaluable for our furniture business.",
      author: "Sarah Chen",
      company: "HomeStyle Furniture",
      location: "Australia",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-gray-200">
              We have expertise sourcing a wide range of products from verified Chinese manufacturers across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Manufacturing Capabilities</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {capabilities.map((cap, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-[#1E3A5F] border border-[#E5E7EB]"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Product Categories
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Browse our sourcing categories or contact us for products not listed here.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="card">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-7 h-7 text-[#1E3A5F]" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">
                      {category.name}
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-sm text-[#6B7280]">
                          <CheckCircle className="w-3 h-3 text-[#4CAF50] mr-1 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Feedback from businesses we've helped with product sourcing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F5A623] fill-current" />
                  ))}
                </div>
                <p className="text-[#6B7280] mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[#1E3A5F]">{testimonial.author}</p>
                  <p className="text-sm text-[#6B7280]">{testimonial.company}, {testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us with your specific product requirements. We have access to thousands of manufacturers and can likely help.
          </p>
          <Link to="/contact" className="btn-primary inline-block text-lg px-8 py-4">
            Discuss Your Needs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;