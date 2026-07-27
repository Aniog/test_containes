import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Laptop, Home, Wrench, Shirt, Dog, HeartPulse, Sparkles, ShoppingBag } from 'lucide-react';

const categories = [
  { id: 'p-1', title: "Electronics & Smart Devices", desc: "Consumer electronics, IoT devices, phone accessories, and computer hardware.", icon: Laptop },
  { id: 'p-2', title: "Home, Garden & Kitchen", desc: "Kitchenware, smart home appliances, patio furniture, and interior decor.", icon: Home },
  { id: 'p-3', title: "Industrial Tools & Machinery", desc: "Specialized tools, spare parts, heavy machinery, and industrial equipment.", icon: Wrench },
  { id: 'p-4', title: "Fashion, Textiles & Apparel", desc: "OEM clothing, activewear, fabrics, yarns, and fashion accessories.", icon: Shirt },
  { id: 'p-5', title: "Pet Supplies & Accessories", desc: "Smart pet feeders, toys, grooming tools, and pet furniture.", icon: Dog },
  { id: 'p-6', title: "Health & Medical Supplies", desc: "Personal care equipment, medical consumables, and wellness products.", icon: HeartPulse },
  { id: 'p-7', title: "Beauty & Personal Care", desc: "Skincare devices, professional beauty equipment, and cosmetics packaging.", icon: Sparkles },
  { id: 'p-8', title: "Bags, Shoes & Accessories", desc: "Backpacks, luxury leather goods, athletic footwear, and jewelry.", icon: ShoppingBag }
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "Products We Source | Manufacturing & Procurement | SSourcing China";
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Industries & Products We Source</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our established network covers a wide range of categories. We find the right specialists for your specific product requirements.
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="flex flex-col group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div 
                    className="absolute inset-0 z-0 bg-slate-200 transition-transform duration-500 group-hover:scale-110"
                    data-strk-bg-id={`p-cat-bg-${cat.id}`}
                    data-strk-bg={`[p-cat-title-${cat.id}] manufacturing products quality`}
                    data-strk-bg-ratio="1x1"
                    data-strk-bg-width="400"
                  />
                  <div className="absolute top-4 left-4 z-10 w-10 h-10 bg-white shadow-md rounded-lg flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 id={`p-cat-title-${cat.id}`} className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                  <div className="mt-auto">
                    <Link to="/contact">
                      <Button variant="link" className="p-0 h-auto text-primary font-bold hover:no-underline">
                        Inquire Now <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM/ODM Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Need Custom Product Development (OEM/ODM)?</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                If you have a unique product idea or need modifications to existing designs, we can help. We work with R&D departments to ensure your IP is protected and the final product matches your blueprints.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-slate-800">Prototyping & Molding</span>
                </li>
                <li className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-slate-800">Component Sourcing</span>
                </li>
                <li className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-slate-800">Custom Packaging</span>
                </li>
                <li className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-slate-800">Brand Labeling</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link to="/contact">
                  <Button size="lg">Start Your Custom Project</Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                data-strk-img-id="oem-odm-img"
                data-strk-img="product design molding factory blue prints"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Product Development"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
