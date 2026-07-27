import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: 'electronics',
      title: 'Consumer Electronics',
      desc: 'Smartphones accessories, smart home devices, audio equipment, and wearables.',
      imgId: 'cat-elec-93h84'
    },
    {
      id: 'home',
      title: 'Home & Garden',
      desc: 'Furniture, home decor, kitchenware, and outdoor living products.',
      imgId: 'cat-home-28j49'
    },
    {
      id: 'apparel',
      title: 'Apparel & Accessories',
      desc: 'Clothing, footwear, bags, jewelry, and fashion accessories.',
      imgId: 'cat-apparel-k9f33'
    },
    {
      id: 'toys',
      title: 'Toys & Hobbies',
      desc: 'Educational toys, action figures, outdoor play, and hobby crafts.',
      imgId: 'cat-toys-m4p92'
    },
    {
      id: 'sports',
      title: 'Sports & Outdoors',
      desc: 'Fitness equipment, camping gear, cycling accessories, and water sports.',
      imgId: 'cat-sport-v7x11'
    },
    {
      id: 'industrial',
      title: 'Industrial & Machinary',
      desc: 'Tools, hardware, packaging materials, and manufacturing equipment.',
      imgId: 'cat-ind-b5n88'
    }
  ];

  return (
    <div ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 id="page-title" className="text-4xl font-bold font-['Montserrat'] tracking-tight text-slate-900 sm:text-5xl">Products We Source</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">We have extensive experience sourcing across a wide range of product categories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden group hover:shadow-lg transition-shadow border-none shadow-md">
              <div className="h-64 overflow-hidden relative">
                <img 
                  data-strk-img-id={category.imgId}
                  data-strk-img={`[cat-title-${category.id}] [page-title] product category manufacturing`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 bg-white">
                <h3 id={`cat-title-${category.id}`} className="text-xl font-bold font-['Montserrat'] text-slate-900 mb-2">{category.title}</h3>
                <p className="text-slate-600">{category.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold font-['Montserrat'] mb-4">Don't see your category?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">We can source almost any product manufactured in China. Let us know what you're looking for, and we'll find the right factory.</p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-50 font-semibold px-8">
              <Link to="/contact">Tell Us What You Need</Link>
            </Button>
          </div>
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
      </div>
    </div>
  );
}
