import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cpu, Wrench, Shirt, Sofa, Box, ShoppingBag, Zap, Bike, Watch, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const productCategories = [
  {
    id: 'electronics',
    icon: Cpu,
    name: 'Electronics',
    description: 'Consumer electronics, components, and high-tech products',
    products: [
      'Smartphones & Tablets',
      'Laptops & Computers',
      'Audio & Video Equipment',
      'Smart Home Devices',
      'Electronic Components',
      'Wearable Technology',
    ],
    capabilities: ['PCB Assembly', 'OEM/ODM', 'Certifications (CE, FCC, RoHS)'],
  },
  {
    id: 'machinery',
    icon: Wrench,
    name: 'Machinery',
    description: 'Industrial equipment, mechanical parts, and tools',
    products: [
      'Industrial Machinery',
      'Power Tools',
      'Mechanical Parts',
      'Agricultural Equipment',
      'Construction Machinery',
      'Food Processing Equipment',
    ],
    capabilities: ['CNC Machining', 'Precision Engineering', 'ISO Certification'],
  },
  {
    id: 'textiles',
    icon: Shirt,
    name: 'Textiles',
    description: 'Fabrics, garments, and fashion accessories',
    products: [
      'Casual & Formal Wear',
      'Sports & Outdoor Apparel',
      'Technical Fabrics',
      'Home Textiles',
      'Fashion Accessories',
      'Workwear & Uniforms',
    ],
    capabilities: ['Fabric Sourcing', 'Private Label', 'Sustainable Materials'],
  },
  {
    id: 'furniture',
    icon: Sofa,
    name: 'Furniture',
    description: 'Home and office furniture, fixtures, and fittings',
    products: [
      'Office Furniture',
      'Home Furniture',
      'Outdoor Furniture',
      'Hotel Furniture',
      'Kitchen Cabinets',
      'Furniture Components',
    ],
    capabilities: ['Flat-Pack Assembly', 'Custom Designs', 'Bulk Orders'],
  },
  {
    id: 'packaging',
    icon: Box,
    name: 'Packaging',
    description: 'Custom packaging solutions and printing',
    products: [
      'Paper & Cardboard Boxes',
      'Plastic Packaging',
      'Labels & Stickers',
      'Gift Boxes',
      'Corrugated Packaging',
      'Flexible Packaging',
    ],
    capabilities: ['Custom Printing', 'Die-Cutting', 'Eco-Friendly Options'],
  },
  {
    id: 'consumer-goods',
    icon: ShoppingBag,
    name: 'Consumer Goods',
    description: 'Daily use products, gifts, and promotional items',
    products: [
      'Kitchenware',
      'Home Decor',
      'Beauty & Personal Care',
      'Toys & Games',
      'Sports Equipment',
      'Pet Supplies',
    ],
    capabilities: ['ODM Services', 'Gift & Promotional', 'Small Batch Orders'],
  },
  {
    id: 'lighting',
    icon: Zap,
    name: 'Lighting',
    description: 'Lighting fixtures and electrical products',
    products: [
      'LED Lighting',
      'Smart Lighting',
      'Commercial Lighting',
      'Home Lighting',
      'Automotive Lights',
      'Solar Lights',
    ],
    capabilities: ['LED Technology', 'Energy Efficiency', 'Smart Integration'],
  },
  {
    id: 'automotive',
    icon: Bike,
    name: 'Automotive',
    description: 'Vehicle parts and automotive accessories',
    products: [
      'Auto Parts',
      'Car Accessories',
      'Motorcycle Parts',
      'Electric Vehicle Components',
      'Car Electronics',
      'Safety Products',
    ],
    capabilities: ['IATF Certification', 'OEM Supply', 'Quality Control'],
  },
  {
    id: 'jewelry',
    icon: Watch,
    name: 'Jewelry & Watches',
    description: 'Fashion jewelry, watches, and accessories',
    products: [
      'Fashion Jewelry',
      'Watches',
      'Sunglasses',
      'Bags & Leather Goods',
      'Belts & Wallets',
      'Fashion Accessories',
    ],
    capabilities: ['Custom Designs', 'Brand Manufacturing', 'Packaging'],
  },
];

const capabilities = [
  {
    title: 'OEM/ODM Manufacturing',
    description: 'We can help you develop and manufacture products under your own brand.',
  },
  {
    title: 'Custom Product Development',
    description: 'From concept to production, we support your product development journey.',
  },
  {
    title: 'Small Batch Production',
    description: 'Flexible manufacturing options for startups and small orders.',
  },
  {
    title: 'Quality Certifications',
    description: 'Factories with ISO, CE, FCC, RoHS, and other relevant certifications.',
  },
  {
    title: 'Sustainable Sourcing',
    description: 'Access to eco-friendly materials and sustainable manufacturing options.',
  },
  {
    title: 'Competitive Pricing',
    description: 'Negotiate the best prices with our extensive supplier network.',
  },
];

const ProductsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8A] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Products We Source
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We have expertise across a wide range of product categories, connecting 
            you with verified manufacturers in China.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-[#F8FAFC] rounded-xl flex items-center justify-center mb-4">
                    <category.icon className="w-7 h-7 text-[#1E3A5F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                    {category.name}
                  </h3>
                  <p className="text-[#64748B] text-sm mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {category.products.slice(0, 3).map((product, idx) => (
                      <li key={idx} className="text-xs text-[#64748B] flex items-center gap-2">
                        <Package className="w-3 h-3 text-[#F7931E]" />
                        {product}
                      </li>
                    ))}
                    {category.products.length > 3 && (
                      <li className="text-xs text-[#F7931E]">
                        +{category.products.length - 3} more
                      </li>
                    )}
                  </ul>
                  <div className="pt-4 border-t border-[#E2E8F0]">
                    <p className="text-xs font-medium text-[#1E3A5F] mb-2">Capabilities:</p>
                    <div className="flex flex-wrap gap-1">
                      {category.capabilities.map((cap, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-[#F8FAFC] text-[#64748B] px-2 py-1 rounded"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Our Sourcing Capabilities
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Beyond product categories, we offer comprehensive capabilities to support your sourcing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-xl">
                <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#1E3A5F] mb-1">
                    {cap.title}
                  </h4>
                  <p className="text-sm text-[#64748B]">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Finding What You Need */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-[#64748B] mb-8">
            We have access to a vast network of suppliers across many industries. 
            Contact us to discuss your specific requirements.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Discuss Your Requirements
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#1E3A5F]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Sourcing Today
          </h2>
          <p className="text-white/70 mb-8">
            Get a free consultation and quote for your product requirements. 
            Our team is ready to help you find the right suppliers.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#F7931E] hover:bg-[#E0850D]">
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;