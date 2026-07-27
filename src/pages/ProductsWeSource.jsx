import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function ProductsWeSource() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: 'electronics',
      name: 'Consumer Electronics & Accessories',
      items: ['Smartphones & Accessories', 'Smart Home Devices', 'Audio Equipment', 'Wearables', 'Computer Peripherals'],
    },
    {
      id: 'home',
      name: 'Home & Kitchen',
      items: ['Furniture', 'Kitchen Appliances', 'Home Decor', 'Bedding & Textiles', 'Storage & Organization'],
    },
    {
      id: 'apparel',
      name: 'Apparel, Shoes & Accessories',
      items: ['Men & Women Clothing', 'Sportswear', 'Footwear', 'Bags & Luggage', 'Jewelry & Watches'],
    },
    {
      id: 'outdoor',
      name: 'Sports & Outdoors',
      items: ['Fitness Equipment', 'Camping & Hiking Gear', 'Cycling Accessories', 'Water Sports', 'Team Sports'],
    },
    {
      id: 'toys',
      name: 'Toys, Kids & Babies',
      items: ['Educational Toys', 'Action Figures', 'Baby Care Products', 'Strollers & Gear', 'Kids Clothing'],
    },
    {
      id: 'beauty',
      name: 'Beauty & Personal Care',
      items: ['Skincare & Makeup', 'Hair Care Tools', 'Personal Care Appliances', 'Bath & Body', 'Fragrances'],
    },
    {
      id: 'hardware',
      name: 'Tools & Hardware',
      items: ['Hand Tools', 'Power Tools', 'Building Materials', 'Plumbing Supplies', 'Electrical Equipment'],
    },
    {
      id: 'custom',
      name: 'Custom OEM/ODM Manufacturing',
      items: ['Custom Product Development', 'Private Labeling', 'Prototyping', 'Custom Packaging', 'Molding & Tooling'],
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-20 relative">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          data-strk-bg-id="products-header-bg"
          data-strk-bg="[products-header-title] wholesale manufacturing products"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 id="products-header-title" className="text-4xl md:text-5xl font-bold mb-4">Products We Source</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Access our vast network of verified factories across every major industry.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6">Can't find what you are looking for?</h2>
          <p className="text-lg text-gray-600 mb-8">
            The categories below represent just a fraction of what we can source. With our extensive connections in major manufacturing hubs (Shenzhen, Guangzhou, Yiwu, Ningbo, etc.), we can find reliable suppliers for almost any product you need, including highly customized and novel items.
          </p>
          <Button size="lg" className="bg-blue-600 text-white" asChild>
            <Link to="/contact">Tell Us Your Product Requirements</Link>
          </Button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.name}
                    data-strk-img-id={`cat-full-${category.id}-img`}
                    data-strk-img={`[cat-full-${category.id}-name] wholesale`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 id={`cat-full-${category.id}-name`} className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <span className="text-blue-500 mr-2">•</span>
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

      {/* Custom Manufacturing Modal/CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-blue-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10 bg-cover bg-center"
              data-strk-bg-id="custom-mfg-bg"
              data-strk-bg="custom manufacturing prototype blueprint engineering"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1200"
            />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Manufacturing?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We specialize in completely custom OEM/ODM projects. From taking your blueprints and 3D models to prototyping and mass production, our engineering sourcing team ensures your intellectual property is protected while your vision comes to life.
              </p>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6" asChild>
                <Link to="/contact">Discuss Your Custom Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
