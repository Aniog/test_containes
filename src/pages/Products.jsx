import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Badge } from '@/components/ui/badge';

const categories = [
  {
    title: 'Consumer Electronics',
    items: ['Smart Home Devices', 'Audio Equipment', 'Mobile Accessories', 'Kitchen Appliances'],
    id: 'cat-electronics'
  },
  {
    title: 'Furniture & Decor',
    items: ['Outdoor Furniture', 'Office Chairs', 'Lighting Fixtures', 'Home Textiles'],
    id: 'cat-furniture'
  },
  {
    title: 'Industrial Equipment',
    items: ['Packaging Machinery', 'CNC Parts', 'Molds & Tooling', 'Safety Equipment'],
    id: 'cat-industrial'
  },
  {
    title: 'Fashion & Apparel',
    items: ['Sustainable Textiles', 'Activewear', 'Footwear', 'Bags & Accessories'],
    id: 'cat-fashion'
  },
  {
    title: 'Building Materials',
    items: ['Ceramic Tiles', 'Sanitary Ware', 'Solar Panels', 'Hardware Tools'],
    id: 'cat-building'
  },
  {
    title: 'Health & Beauty',
    items: ['Skincare Packaging', 'Personal Care Devices', 'Fitness Equipment', 'Beauty Tools'],
    id: 'cat-beauty'
  }
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 id="products-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Products We Source</h1>
          <p id="products-subtitle" className="mt-4 text-lg text-slate-600">
            Our expertise spans multiple industries. If it's made in China, we can find it, verify it, and ship it for you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                 <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.title}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`prod-cat-img-${category.id}`}
                  data-strk-img={`[prod-cat-title-${category.id}] China manufacturing product`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                />
              </div>
              <div className="p-8">
                <h3 id={`prod-cat-title-${category.id}`} className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item} variant="outline" className="text-slate-600 border-slate-200">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-blue-50 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Don't see your product category?</h2>
              <p className="text-slate-600 leading-relaxed">
                China's manufacturing landscape is vast. Even if your specific product isn't listed here, our sourcing experts have the capability to research and find reliable suppliers across virtually any category.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Custom Sourcing</p>
                <p className="text-slate-900 font-bold mt-1">Get a free feasibility report</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Ask Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
