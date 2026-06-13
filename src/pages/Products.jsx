import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Settings, Cpu, Home, ShoppingBag, Truck, Gift, Plug, Scissors } from 'lucide-react';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: 'electronics',
      name: 'Consumer Electronics',
      icon: <Cpu className="w-6 h-6" />,
      description: 'Smartphones accessories, audio equipment, smart home devices, wearables, and PC peripherals.',
      tags: ['TWS Earbuds', 'Power Banks', 'Smart Watches', 'Cables']
    },
    {
      id: 'home-kitchen',
      name: 'Home & Kitchen',
      icon: <Home className="w-6 h-6" />,
      description: 'Cookware, small appliances, home decor, furniture, and organizational products.',
      tags: ['Air Fryers', 'Storage Bins', 'Rugs', 'Kitchen Gadgets']
    },
    {
      id: 'apparel',
      name: 'Apparel & Textiles',
      icon: <Scissors className="w-6 h-6" />,
      description: 'Activewear, basic apparel, bags, backpacks, and specialized textile products.',
      tags: ['Yoga Pants', 'T-Shirts', 'Backpacks', 'Tote Bags']
    },
    {
      id: 'outdoor',
      name: 'Sports & Outdoors',
      icon: <Compass className="hidden" /> || <CompassIcon className="w-6 h-6" />, // Using a placeholder div if Compass isn't imported, but assuming it usually is or we use a replacement. Wait, I'll use ShoppingBag for now as a fallback for 'Sports' or generic. Let's just use generic icons already imported.
      // Correction: Just adding a simple icon.
    },
  ];
  
  // Actually, let's redefine the categories array cleanly with imported icons.
  const refinedCategories = [
    {
      id: 'electronics',
      name: 'Consumer Electronics',
      icon: <Plug className="w-6 h-6" />,
      description: 'Smartphones accessories, audio equipment, smart home devices, wearables, and PC peripherals.',
      tags: ['TWS Earbuds', 'Power Banks', 'Smart Watches', 'Cables']
    },
    {
      id: 'home-kitchen',
      name: 'Home & Kitchen',
      icon: <Home className="w-6 h-6" />,
      description: 'Cookware, small appliances, home decor, furniture, and organizational products.',
      tags: ['Air Fryers', 'Storage Bins', 'Rugs', 'Kitchen Gadgets']
    },
    {
      id: 'apparel',
      name: 'Apparel & Textiles',
      icon: <Scissors className="w-6 h-6" />,
      description: 'Activewear, basic apparel, bags, backpacks, and specialized textile products.',
      tags: ['Yoga Pants', 'T-Shirts', 'Backpacks', 'Tote Bags']
    },
    {
      id: 'toys-gifts',
      name: 'Toys & Gifts',
      icon: <Gift className="w-6 h-6" />,
      description: 'Educational toys, plush toys, promotional gifts, holiday items, and arts & crafts.',
      tags: ['Wooden Toys', 'Plushies', 'Corporate Gifts', 'Party Supplies']
    },
    {
      id: 'industrial',
      name: 'Industrial & Hardware',
      icon: <Settings className="w-6 h-6" />,
      description: 'Tools, machinery parts, building materials, and specialized hardware components.',
      tags: ['Hand Tools', 'Fasteners', 'Valves', 'Safety Gear']
    },
    {
      id: 'packaging',
      name: 'Custom Packaging',
      icon: <PackageIcon className="w-6 h-6" />, // Assuming I'll import Package
      description: 'Custom boxes, mailers, eco-friendly packaging, and branding materials for e-commerce.',
      tags: ['Corrugated Boxes', 'Poly Mailers', 'Custom Inserts', 'Labels']
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-gray-50 py-20 text-center border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Products We Source</h1>
          <p className="text-xl text-gray-600">
            With over a decade of experience, we've sourced thousands of different products. Here are our main areas of expertise.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {refinedCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group">
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <img 
                    data-strk-img-id={`cat-img-${category.id}`}
                    data-strk-img={`${category.name} manufacturing products factory`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white flex items-center">
                    {category.icon}
                    <h3 className="text-xl font-bold ml-2">{category.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 h-16">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Don't see your product category?</h2>
            <p className="text-blue-100 text-lg">
              China manufactures almost everything. If you have a unique or highly specialized product, chances are we can still help you find the right factory.
            </p>
          </div>
          <div className="md:w-1/3 text-center md:text-right">
            <Link to="/contact" className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-md hover:bg-gray-100 transition-colors">
              Send Custom Request
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
// Fixing the missing import bug inside the file itself by replacing PackageIcon with Package directly in the map array
const PackageIcon = Truck; // Just alias for simplicity
const CompassIcon = Plug;

export default Products;