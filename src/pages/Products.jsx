import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.tsx';
import { ArrowRight } from 'lucide-react';

export const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: 'electronics',
      title: 'Consumer Electronics',
      desc: 'Mobile accessories, smart home devices, audio equipment, and wearables.',
      imgQuery: 'consumer electronics gadgets headphones smart'
    },
    {
      id: 'home-garden',
      title: 'Home & Garden',
      desc: 'Furniture, home decor, kitchenware, outdoor tools, and lighting fixtures.',
      imgQuery: 'home garden furniture decor kitchen'
    },
    {
      id: 'apparel',
      title: 'Apparel & Textiles',
      desc: 'Clothing, activewear, fabrics, bags, and fashion accessories.',
      imgQuery: 'clothing fashion textiles garments bags'
    },
    {
      id: 'toys-hobbies',
      title: 'Toys & Hobbies',
      desc: 'Educational toys, board games, sports equipment, and outdoor gear.',
      imgQuery: 'toys games hobbies sports equipment'
    },
    {
      id: 'industrial',
      title: 'Industrial & Machinery',
      desc: 'Tools, machinery parts, hardware, and packaging materials.',
      imgQuery: 'industrial machinery tools hardware factory'
    },
    {
      id: 'beauty-health',
      title: 'Beauty & Health',
      desc: 'Skincare tools, cosmetics packaging, fitness accessories, and personal care products.',
      imgQuery: 'beauty health cosmetics skincare fitness'
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      <section className="bg-slate-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Products We Source</h1>
          <p id="page-subtitle" className="text-lg md:text-xl text-slate-600">
            We have strong relationships with manufacturers across various industries in China. If it's made in China, we can source it.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow bg-white flex flex-col h-full">
                <div className="relative h-64 w-full">
                    <img
                        data-strk-img-id={`category-img-${category.id}`}
                        data-strk-img={`[category-desc-${category.id}] [category-title-${category.id}] ${category.imgQuery}`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={category.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <CardHeader>
                  <CardTitle id={`category-title-${category.id}`} className="text-2xl text-slate-900">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p id={`category-desc-${category.id}`} className="text-slate-600 text-lg">
                    {category.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Didn't find your product category?</h2>
          <p className="text-lg text-slate-600 mb-8">
            The categories above are just a sample of what we source most frequently. We can handle almost any product request.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg h-14 px-8">
              Ask Us About Your Product <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};