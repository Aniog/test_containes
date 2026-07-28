import React, { useEffect, useRef } from 'react';
import { ArrowRight, Drill, Cpu, Shirt, Home as HomeIcon, HeartPulse, Puzzle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: 'consumer-electronics',
      name: 'Consumer Electronics',
      desc: 'Smartphones accessories, audio devices, smart home gadgets, and wearables.',
      icon: <Cpu className="w-8 h-8 text-blue-600 mb-4" />,
      imgId: 'cat-electronics-1',
      imgQuery: '[category-title-consumer-electronics] electronic devices'
    },
    {
      id: 'home-garden',
      name: 'Home & Garden',
      desc: 'Furniture, home decor, kitchenware, gardening tools, and outdoor living products.',
      icon: <HomeIcon className="w-8 h-8 text-blue-600 mb-4" />,
      imgId: 'cat-home-1',
      imgQuery: '[category-title-home-garden]'
    },
    {
      id: 'apparel-textiles',
      name: 'Apparel & Textiles',
      desc: 'Clothing, footwear, bags, accessories, and raw textile materials.',
      icon: <Shirt className="w-8 h-8 text-blue-600 mb-4" />,
      imgId: 'cat-apparel-1',
      imgQuery: '[category-title-apparel-textiles] clothing rack'
    },
    {
      id: 'tools-hardware',
      name: 'Tools & Hardware',
      desc: 'Hand tools, power tools, construction materials, and industrial hardware.',
      icon: <Drill className="w-8 h-8 text-blue-600 mb-4" />,
      imgId: 'cat-tools-1',
      imgQuery: '[category-title-tools-hardware]'
    },
    {
      id: 'health-beauty',
      name: 'Health & Beauty',
      desc: 'Skincare tools, cosmetics packaging, personal care devices, and fitness equipment.',
      icon: <HeartPulse className="w-8 h-8 text-blue-600 mb-4" />,
      imgId: 'cat-health-1',
      imgQuery: '[category-title-health-beauty]'
    },
    {
      id: 'toys-hobbies',
      name: 'Toys & Hobbies',
      desc: 'Educational toys, action figures, board games, and sporting goods.',
      icon: <Puzzle className="w-8 h-8 text-blue-600 mb-4" />,
      imgId: 'cat-toys-1',
      imgQuery: '[category-title-toys-hobbies]'
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Products We Source</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              With access to thousands of verified manufacturers across China's major industrial hubs, we can source almost any product you need.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Card key={cat.id} className="overflow-hidden border-slate-200 hover:shadow-xl transition-shadow group flex flex-col h-full bg-white">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={cat.imgId}
                    data-strk-img={cat.imgQuery}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  {cat.icon}
                  <h3 id={`category-title-${cat.id}`} className="text-2xl font-bold text-slate-900 mb-3">{cat.name}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{cat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Sourcing */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Looking for something specific?</h2>
              <p className="text-lg text-slate-600 mb-6">
                Our sourcing capabilities are not limited to the categories above. We specialize in custom manufacturing (OEM/ODM). If you have a unique prototype, blueprint, or a specific niche product, our engineering and sourcing teams can find the right factory to bring it to life.
              </p>
              <ul className="text-slate-700 space-y-2 mb-8 inline-block text-left">
                <li className="flex items-center"><ArrowRight className="w-4 h-4 text-blue-600 mr-2"/> Custom Packaging & White Labeling</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 text-blue-600 mr-2"/> Specialized Industrial Components</li>
                <li className="flex items-center"><ArrowRight className="w-4 h-4 text-blue-600 mr-2"/> Eco-friendly & Sustainable Products</li>
              </ul>
            </div>
            <div className="md:w-1/2 w-full flex justify-center md:justify-end">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 max-w-md w-full text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Send us your requirements</h3>
                <p className="text-slate-500 mb-6 font-medium">We'll let you know within 24 hours if we can source it and provide an estimated timeline.</p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                   <Link to="/contact">Submit Product Inquiry</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;