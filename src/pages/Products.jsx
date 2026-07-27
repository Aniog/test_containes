import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Server, Zap, Shirt, Home as HomeIcon, MonitorSmartphone, Car, Dumbbell, Baby } from 'lucide-react';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: 'electronics',
      title: 'Consumer Electronics',
      icon: MonitorSmartphone,
      items: ['Smart home devices', 'Audio & headphones', 'Phone accessories', 'Wearables']
    },
    {
      id: 'home-garden',
      title: 'Home & Garden',
      icon: HomeIcon,
      items: ['Kitchenware', 'Furniture', 'Outdoor decor', 'Pet supplies']
    },
    {
      id: 'apparel',
      title: 'Apparel & Textiles',
      icon: Shirt,
      items: ['Activewear', 'Fashion accessories', 'Home textiles', 'Footwear']
    },
    {
      id: 'industrial',
      title: 'Industrial & Machining',
      icon: Server,
      items: ['CNC machining parts', 'Injection molding', 'Packaging materials', 'Tools & hardware']
    },
    {
      id: 'auto',
      title: 'Automotive Parts',
      icon: Car,
      items: ['Car accessories', 'Replacement parts', 'Tools & equipment', 'Motorcycle accessories']
    },
    {
      id: 'fitness',
      title: 'Sports & Fitness',
      icon: Dumbbell,
      items: ['Gym equipment', 'Yoga accessories', 'Outdoor sports gear', 'Camping equipment']
    },
    {
      id: 'toys',
      title: 'Toys & Baby Products',
      icon: Baby,
      items: ['Educational toys', 'Baby care items', 'Nursery furniture', 'Plush toys']
    },
    {
      id: 'custom',
      title: 'Custom OEM/ODM',
      icon: Zap,
      items: ['Prototyping', 'Private labeling', 'Custom packaging', 'New product development']
    }
  ];

  return (
    <div ref={containerRef} className="py-12 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 id="products-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Products We Source</h1>
          <p id="products-desc" className="text-xl text-slate-600">
            With over a decade of experience, we have built strong relationships with manufacturers across various industries in China.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Card key={cat.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 relative overflow-hidden">
                  <img
                     data-strk-img-id={`cat-img-${cat.id}`}
                     data-strk-img={`[cat-title-${cat.id}] manufacturing products in china`}
                     data-strk-img-ratio="4x3"
                     data-strk-img-width="400"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     alt={cat.title}
                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-4">
                     <h3 id={`cat-title-${cat.id}`} className="text-xl font-bold text-white flex items-center">
                        <Icon className="w-5 h-5 mr-2 opacity-80" />
                        {cat.title}
                     </h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-slate-600 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 bg-slate-100 rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Don't see your product category?</h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Our network covers almost every manufacturing sector in China. We can source custom products, specialized machinery, and niche items.
            </p>
          </div>
          <Link to="/contact" className="shrink-0">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold h-14 px-8">
              Send Product Request
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
