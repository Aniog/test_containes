import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Package, 
  Cpu, 
  Home, 
  Shirt, 
  Wrench, 
  Box, 
  Heart,
  ChevronRight
} from 'lucide-react';

const ProductsPage = () => {
  const categories = [
    {
      icon: Cpu,
      name: 'Electronics & Technology',
      description: 'Consumer electronics, smart devices, and tech accessories from verified manufacturers.',
      products: [
        'Smartphones & Tablets',
        'Laptop & Computer Accessories',
        'Smart Home Devices',
        'Audio & Video Equipment',
        'Wearable Technology',
        'Gaming Accessories',
        'Mobile Phone Accessories',
        'LED & Lighting Products',
      ],
      color: 'bg-blue-500',
    },
    {
      icon: Home,
      name: 'Home & Garden',
      description: 'Quality home products, furniture, and garden equipment from established factories.',
      products: [
        'Furniture (Indoor & Outdoor)',
        'Kitchenware & Cookware',
        'Home Decor & Artifacts',
        'Bedding & Linens',
        'Garden Tools & Equipment',
        'Storage & Organization',
        'Home Textiles',
        'Pet Supplies',
      ],
      color: 'bg-green-500',
    },
    {
      icon: Shirt,
      name: 'Apparel & Textiles',
      description: 'Garments, fabrics, and fashion accessories with reliable quality control.',
      products: [
        'Casual & Formal Wear',
        'Sports & Activewear',
        'Children\'s Clothing',
        'Fabrics & Raw Materials',
        'Fashion Accessories',
        'Footwear',
        'Bags & Luggage',
        'Scarves & Handkerchiefs',
      ],
      color: 'bg-purple-500',
    },
    {
      icon: Wrench,
      name: 'Industrial & Manufacturing',
      description: 'Machinery, tools, and industrial components for various sectors.',
      products: [
        'Power Tools',
        'Industrial Machinery',
        'Mechanical Parts',
        'Electrical Components',
        'Safety Equipment',
        'Hydraulic Components',
        'Fasteners & Hardware',
        'Industrial Automation',
      ],
      color: 'bg-orange-500',
    },
    {
      icon: Box,
      name: 'Packaging & Printing',
      description: 'Custom packaging solutions and printing services for brand requirements.',
      products: [
        'Paper & Cardboard Packaging',
        'Plastic Packaging',
        'Custom Printed Boxes',
        'Labels & Stickers',
        'Shopping Bags',
        'Flexible Packaging',
        'Gift Boxes & Cases',
        'Corrugated Packaging',
      ],
      color: 'bg-teal-500',
    },
    {
      icon: Heart,
      name: 'Health & Beauty',
      description: 'Cosmetics, personal care products, and wellness items from certified suppliers.',
      products: [
        'Skincare Products',
        'Makeup & Cosmetics',
        'Hair Care Products',
        'Body Care & Spa',
        'Health Supplements',
        'Medical Supplies',
        'Fitness Equipment',
        'Baby Care Products',
      ],
      color: 'bg-pink-500',
    },
  ];

  const capabilities = [
    {
      title: 'Custom Manufacturing',
      description: 'We can help you find factories that accept custom orders and OEM/ODM arrangements.',
    },
    {
      title: 'Private Label',
      description: 'Source products and add your own brand with custom packaging and labeling.',
    },
    {
      title: 'Bulk Orders',
      description: 'Handle large volume orders with competitive pricing and consistent quality.',
    },
    {
      title: 'Sample Development',
      description: 'Work with factories to develop samples that match your exact specifications.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We have established relationships with manufacturers across various industries in China. From electronics to textiles, we can help you find the right suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-12">
                  {/* Icon & Title */}
                  <div className="lg:col-span-4 p-8 bg-primary/5 lg:border-r border-border">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-dark mb-2">{category.name}</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Products List */}
                  <div className="lg:col-span-8 p-8">
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.products.map((product, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-primary/5 transition-colors">
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-text-dark text-sm">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Sourcing Capabilities
            </h2>
            <p className="text-text-muted text-lg">
              Beyond product categories, we offer these sourcing capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-text-dark mb-3">{cap.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Finding What You Need */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Product?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We source across many industries and product categories. Contact us to discuss your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Discuss Your Needs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;