import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { LayoutGrid, Smartphone, Home, Shirt, Car, Briefcase } from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { title: "Consumer Electronics", desc: "Smart home devices, mobile accessories, and electronic components.", icon: <Smartphone />, id: "cat-1" },
    { title: "Home & Garden", desc: "Kitchenware, furniture, outdoor decor, and household tools.", icon: <Home />, id: "cat-2" },
    { title: "Textiles & Apparel", desc: "Fashion garments, industrial fabrics, and home textiles.", icon: <Shirt />, id: "cat-3" },
    { title: "Automotive Parts", desc: "Replacement parts, car accessories, and specialized tools.", icon: <Car />, id: "cat-4" },
    { title: "Industrial Equipment", desc: "Machinery parts, hardware, and raw materials for production.", icon: <LayoutGrid />, id: "cat-5" },
    { title: "Office & Business", desc: "Stationery, office furniture, and promotional merchandise.", icon: <Briefcase />, id: "cat-6" },
  ];

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 id="prod-hero-title" className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Products We Source</h1>
          <p id="prod-hero-subtitle" className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Our network covers thousands of factories across diverse industries. If it's made in China, we can help you source it.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="group overflow-hidden rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    data-strk-img-id={`cat-img-${cat.id}`}
                    data-strk-img={`[cat-desc-${cat.id}] [cat-title-${cat.id}] products category`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                    <div className="p-2 bg-blue-600 rounded-lg">{cat.icon}</div>
                    <h3 id={`cat-title-${cat.id}`} className="text-2xl font-black underline decoration-blue-500 decoration-4 underline-offset-4">{cat.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p id={`cat-desc-${cat.id}`} className="text-slate-600 font-medium leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                  <Button variant="outline" className="w-full font-bold group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    Inquire About This Category
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-8 text-slate-900 uppercase">Don't See Your Product?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Our expertise goes beyond these categories. Send us your specs, and our sourcing team will conduct a custom search.
          </p>
          <Link to="/contact">
            <Button size="lg" className="h-16 px-10 text-xl font-bold uppercase transition-all hover:tracking-widest">
              Request a Custom Search
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
