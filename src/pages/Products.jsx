import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Cpu, Shirt, Home, Package, ShoppingBag, Settings } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const categories = [
    { id: 'all', name: 'All Categories', icon: <Package className="w-5 h-5" /> },
    { id: 'electronics', name: 'Electronics', icon: <Cpu className="w-5 h-5" /> },
    { id: 'machinery', name: 'Machinery', icon: <Settings className="w-5 h-5" /> },
    { id: 'textiles', name: 'Textiles', icon: <Shirt className="w-5 h-5" /> },
    { id: 'home', name: 'Home & Garden', icon: <Home className="w-5 h-5" /> },
    { id: 'consumer', name: 'Consumer Products', icon: <ShoppingBag className="w-5 h-5" /> },
  ];

  const products = [
    {
      category: 'electronics',
      name: 'Consumer Electronics',
      items: ['Smartphones & Accessories', 'Laptops & Tablets', 'Audio Equipment', 'Cameras & Photography', 'Gaming Consoles', 'Wearable Devices'],
      image: 'electronics manufacturing circuit boards assembly'
    },
    {
      category: 'electronics',
      name: 'Electronic Components',
      items: ['PCBs & Circuit Boards', 'Semiconductors', 'Connectors & Cables', 'Batteries & Power Banks', 'LEDs & Displays', 'Sensors & Modules'],
      image: 'electronic components manufacturing pcb'
    },
    {
      category: 'machinery',
      name: 'Industrial Machinery',
      items: ['CNC Machines', 'Packaging Equipment', 'Textile Machinery', 'Food Processing Equipment', 'Agricultural Machinery', 'Construction Equipment'],
      image: 'industrial machinery manufacturing factory'
    },
    {
      category: 'machinery',
      name: 'Tools & Hardware',
      items: ['Power Tools', 'Hand Tools', 'Fasteners & Hardware', 'Cutting Tools', 'Measuring Instruments', 'Safety Equipment'],
      image: 'tools hardware manufacturing metal'
    },
    {
      category: 'textiles',
      name: 'Apparel & Clothing',
      items: ['Casual Wear', 'Sportswear & Activewear', 'Formal Wear', 'Underwear & Sleepwear', 'Children\'s Clothing', 'Workwear & Uniforms'],
      image: 'garment factory textile manufacturing'
    },
    {
      category: 'textiles',
      name: 'Home Textiles',
      items: ['Bedding & Linens', 'Curtains & Drapes', 'Towels & Bathrobes', 'Carpets & Rugs', 'Cushions & Pillows', 'Table Linens'],
      image: 'home textiles manufacturing factory'
    },
    {
      category: 'home',
      name: 'Kitchen & Dining',
      items: ['Cookware & Bakeware', 'Kitchen Utensils', 'Tableware & Dishes', 'Storage Containers', 'Small Appliances', 'Cleaning Supplies'],
      image: 'kitchenware manufacturing factory'
    },
    {
      category: 'home',
      name: 'Furniture & Decor',
      items: ['Indoor Furniture', 'Outdoor Furniture', 'Lighting & Lamps', 'Home Decor', 'Mirrors & Frames', 'Storage & Organization'],
      image: 'furniture manufacturing factory wood'
    },
    {
      category: 'consumer',
      name: 'Personal Care',
      items: ['Skincare Products', 'Hair Care Items', 'Cosmetics & Makeup', 'Fragrances', 'Oral Care', 'Bath & Body Products'],
      image: 'personal care products manufacturing'
    },
    {
      category: 'consumer',
      name: 'Toys & Games',
      items: ['Educational Toys', 'Action Figures', 'Board Games', 'Outdoor Toys', 'Electronic Toys', 'Puzzles & Crafts'],
      image: 'toys manufacturing factory production'
    },
    {
      category: 'consumer',
      name: 'Sports & Outdoors',
      items: ['Sports Equipment', 'Camping & Hiking Gear', 'Fitness Equipment', 'Cycling Accessories', 'Water Sports Equipment', 'Outdoor Furniture'],
      image: 'sports equipment manufacturing factory'
    },
    {
      category: 'consumer',
      name: 'Bags & Luggage',
      items: ['Backpacks', 'Travel Bags', 'Handbags & Purses', 'Wallet & Accessories', 'Luggage Sets', 'Business Bags'],
      image: 'bags luggage manufacturing factory'
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const whySource = [
    {
      title: 'Cost Efficiency',
      description: 'Significant cost savings compared to domestic manufacturing, often 30-60% lower production costs.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Manufacturing Expertise',
      description: 'Access to world-class manufacturing capabilities and specialized production facilities.',
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: 'Scalability',
      description: 'Easily scale production volumes up or down based on market demand.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Speed to Market',
      description: 'Fast production turnaround times to meet tight market deadlines.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Product Variety',
      description: 'Access to wide range of materials, components, and customization options.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Supply Chain Hub',
      description: 'Well-established supply chains for components and raw materials.',
      icon: <CheckCircle className="w-6 h-6" />
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A7B] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge badge-accent mb-4">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-white/80 mb-8">
              We have established networks across major product categories with verified 
              manufacturers ready to work with international buyers.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Start Your Sourcing Search
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#1E3A5F] text-white'
                    : 'bg-[#EFF3F8] text-[#1F2937] hover:bg-[#CBD5E1]'
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={index} className="card overflow-hidden p-0 group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-strk-img-id={`product-${product.category}-${index}`}
                    data-strk-img={`[product-${product.category}-${index}-title] manufacturing`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="badge badge-primary bg-white/90 backdrop-blur-sm">
                      {categories.find(c => c.id === product.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={`product-${product.category}-${index}-title`} className="text-xl font-bold mb-4">{product.name}</h3>
                  <ul className="space-y-2">
                    {product.items.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-[#6B7280]">
                        <CheckCircle className="w-4 h-4 text-[#059669] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Source from China */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="badge badge-accent mb-4">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Source from China?
            </h2>
            <p className="text-lg text-[#6B7280]">
              China remains the world's manufacturing hub for good reasons. 
              Here are the key advantages of China sourcing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whySource.map((item, index) => (
              <div key={index} className="bg-[#F8FAFC] rounded-xl p-6">
                <div className="w-12 h-12 bg-[#EFF3F8] rounded-xl flex items-center justify-center text-[#1E3A5F] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[#6B7280]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-16 lg:py-24 bg-[#EFF3F8]">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Not Sure What You Need?
                </h2>
                <p className="text-lg text-[#6B7280] mb-6">
                  If your product category isn't listed or you need help defining your requirements, 
                  we're here to help. Contact us for a free consultation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#059669]" />
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#059669]" />
                    <span>Custom sourcing recommendations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#059669]" />
                    <span>Supplier matching based on your needs</span>
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Get Custom Sourcing Help
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Suppliers for Your Products?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Tell us what you're looking for and we'll match you with verified manufacturers.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Start Your Search
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
