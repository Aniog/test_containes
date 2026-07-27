import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Package } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      name: 'Electronics & Components',
      description: 'Consumer electronics, PCBs, connectors, sensors, and components for various applications.',
      items: ['Smart home devices', 'Consumer electronics', 'PCBs & components', 'LED products', 'Batteries & power banks', 'Audio equipment'],
      image: 'electronics-circuit-manufacturing',
    },
    {
      name: 'Home & Garden',
      description: 'Furniture, decor, kitchenware, and outdoor products for residential and commercial use.',
      items: ['Furniture', 'Home decor', 'Kitchenware', 'Bedding & textiles', 'Garden tools', 'Lighting'],
      image: 'furniture-factory-manufacturing',
    },
    {
      name: 'Textiles & Apparel',
      description: 'Fabrics, garments, accessories, and sporting goods with flexible MOQ options.',
      items: ['Casual wear', 'Sportswear', 'Outdoor apparel', 'Fabrics & materials', 'Bags & luggage', 'Footwear'],
      image: 'textile-fabric-production',
    },
    {
      name: 'Machinery & Industrial',
      description: 'Industrial equipment, tools, and mechanical components for manufacturing and construction.',
      items: ['Power tools', 'Industrial machinery', 'Mechanical parts', 'Hardware & fasteners', 'Pumps & valves', 'Construction equipment'],
      image: 'industrial-machinery-factory',
    },
    {
      name: 'Packaging & Printing',
      description: 'Custom packaging solutions, labels, and printed materials for product presentation.',
      items: ['Paper packaging', 'Plastic containers', 'Metal packaging', 'Labels & stickers', 'Printing materials', 'Eco-friendly options'],
      image: 'packaging-boxes-manufacturing',
    },
    {
      name: 'Promotional & Gifts',
      description: 'Custom merchandise, corporate gifts, and promotional items with logo customization.',
      items: ['Custom mugs', 'Keychains & USB', 'Bags & backpacks', 'Drinkware', 'Stationery', 'Novelty items'],
      image: 'promotional-products-wholesale',
    },
    {
      name: 'Sports & Outdoor',
      description: 'Equipment and gear for fitness, camping, and outdoor recreation activities.',
      items: ['Fitness equipment', 'Camping gear', 'Cycling accessories', 'Water sports gear', 'Hiking equipment', 'Sports apparel'],
      image: 'sports-outdoor-equipment',
    },
    {
      name: 'Beauty & Personal Care',
      description: 'Cosmetics, skincare, hair care, and personal grooming products.',
      items: ['Skincare products', 'Hair care', 'Makeup & cosmetics', 'Beauty tools', 'Fragrances', 'Organic options'],
      image: 'cosmetics-manufacturing-factory',
    },
  ];

  const capabilities = [
    { icon: Package, text: 'Flexible MOQ from 100 units' },
    { icon: CheckCircle, text: 'Custom branding and packaging' },
    { icon: CheckCircle, text: 'OEM and ODM services' },
    { icon: CheckCircle, text: 'Quality certifications (CE, FCC, ISO)' },
    { icon: CheckCircle, text: 'Sample development support' },
    { icon: CheckCircle, text: 'Dropshipping capabilities' },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              From electronics to textiles, we have extensive experience sourcing a wide range of products from verified Chinese manufacturers. Whatever you need, we can find it.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {capabilities.map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="card overflow-hidden">
                <div className="relative h-48">
                  <img
                    alt={category.name}
                    data-strk-img-id={`product-${category.name.replace(/\s+/g, '-').toLowerCase()}-001`}
                    data-strk-img={`${category.name} [product-${category.name.replace(/\s+/g, '-').toLowerCase()}-title] manufacturing factory`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <h2 id={`product-${category.name.replace(/\s+/g, '-').toLowerCase()}-title`} className="absolute bottom-4 left-4 text-xl font-bold text-white">
                    {category.name}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.items.slice(0, 4).map((item) => (
                      <span key={item} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        {item}
                      </span>
                    ))}
                    {category.items.length > 4 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded">
                        +{category.items.length - 4} more
                      </span>
                    )}
                  </div>
                  <Link 
                    to="/contact" 
                    className="text-primary-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Request Quote for {category.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't Find Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-4">Don't See Your Product?</h2>
            <p className="text-body mb-8">
              We have access to thousands of manufacturers across all industries. If you don't see your product category, just ask us. There's a good chance we can help.
            </p>
            <Link to="/contact" className="btn-primary">
              Tell Us What You Need
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Source Your Products?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Send us your requirements and we'll find the right suppliers for you.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
