import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { Zap, Factory, Globe, Home, User, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      title: "Consumer Electronics",
      icon: <Zap className="w-8 h-8" />,
      items: ["Smartphone Accessories", "Bluetooth Audio", "Home Appliances", "Wearable Tech"],
      imgId: "prod-cat-1"
    },
    {
      title: "Industrial Machinery",
      icon: <Factory className="w-8 h-8" />,
      items: ["CNC Machines", "Injection Molds", "Packaging Equipment", "Spare Parts"],
      imgId: "prod-cat-2"
    },
    {
      title: "Home & Furniture",
      icon: <Home className="w-8 h-8" />,
      items: ["Office Furniture", "Modern Lighting", "Kitchenware", "Textiles"],
      imgId: "prod-cat-3"
    },
    {
      title: "Health & Personal Care",
      icon: <User className="w-8 h-8" />,
      items: ["Beauty Equipment", "Oral Care", "Fitness Gear", "Wellness Products"],
      imgId: "prod-cat-4"
    },
    {
      title: "Apparel & Fashion",
      icon: <ShoppingBag className="w-8 h-8" />,
      items: ["Sportswear", "Bags & Accessories", "Footwear", "Sustainable Fabric"],
      imgId: "prod-cat-5"
    },
    {
      title: "Outdoor & Sports",
      icon: <Globe className="w-8 h-8" />,
      items: ["Camping Gear", "E-bikes & Scooters", "Fishing Equipment", "Water Sports"],
      imgId: "prod-cat-6"
    }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 italic underline decoration-secondary decoration-2 underline-offset-8">What We Source</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">Our network covers thousands of verified manufacturers across various industries in China.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((cat, index) => (
              <div key={index} className="flex flex-col border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-secondary/20 transition-all group">
                <div className="h-60 relative overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`${cat.title} manufacturing China`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white flex items-center gap-3">
                    <div className="bg-secondary/80 p-2 rounded-lg backdrop-blur-sm">{cat.icon}</div>
                    <h3 className="text-2xl font-bold">{cat.title}</h3>
                  </div>
                </div>
                <div className="p-8 bg-slate-50 flex-grow">
                  <ul className="space-y-4 mb-8">
                    {cat.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center gap-3 text-slate-600 font-medium pb-3 border-b border-slate-200 last:border-0 hover:text-secondary transition-colors">
                        <ArrowRight className="w-4 h-4 text-secondary/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="p-0 h-auto font-bold text-secondary hover:text-secondary/80 group-hover:translate-x-2 transition-transform">
                    Inquire for {cat.title} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 italic">Don't see your category here?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">We source almost any physical product made in China. From raw materials to complex assemblies, we have the expertise to help you.</p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 py-7 text-xl font-bold rounded-2xl shadow-xl">
            <Link to="/contact">Ask Us Anything</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
