import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plug, Tv, Sofa, Shirt, Package, Hammer, Cpu, Coffee, ArrowRight } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: "electronics",
      title: "Consumer Electronics",
      icon: <Tv className="w-8 h-8 flex-shrink-0" />,
      desc: "Smart home devices, audio equipment, wearables, and electronic accessories.",
    },
    {
      id: "home-garden",
      title: "Home & Garden",
      icon: <Sofa className="w-8 h-8 flex-shrink-0" />,
      desc: "Furniture, home decor, kitchenware, and outdoor living products.",
    },
    {
      id: "apparel",
      title: "Apparel & Textiles",
      icon: <Shirt className="w-8 h-8 flex-shrink-0" />,
      desc: "Clothing, activewear, fabrics, and fashion accessories.",
    },
    {
      id: "packaging",
      title: "Custom Packaging",
      icon: <Package className="w-8 h-8 flex-shrink-0" />,
      desc: "Eco-friendly packaging, branded boxes, and retail display materials.",
    },
    {
      id: "hardware",
      title: "Tools & Hardware",
      icon: <Hammer className="w-8 h-8 flex-shrink-0" />,
      desc: "Hand tools, power tools, building materials, and industrial components.",
    },
    {
      id: "components",
      title: "Electronic Components",
      icon: <Cpu className="w-8 h-8 flex-shrink-0" />,
      desc: "PCBs, sensors, connectors, and custom electronic parts.",
    },
    {
      id: "daily",
      title: "Daily Necessities",
      icon: <Coffee className="w-8 h-8 flex-shrink-0" />,
      desc: "Stationery, personal care items, pet supplies, and household goods.",
    },
    {
      id: "custom",
      title: "OEM / ODM Manufacturing",
      icon: <Plug className="w-8 h-8 flex-shrink-0" />,
      desc: "Have a unique invention? We connect you with factories capable of custom tooling and R&D.",
    }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen" ref={containerRef}>
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h1 id="products-title" className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Products We Source</h1>
          <p id="products-subtitle" className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            With our extensive network across China's major manufacturing hubs, we can source almost any product. Here are our strongest categories.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden group">
                <div className="h-48 overflow-hidden bg-slate-100">
                   <img 
                      data-strk-img-id={`cat-img-${category.id}`}
                      data-strk-img={`[cat-title-${category.id}] [cat-desc-${category.id}] factory production`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-blue-600">
                    {category.icon}
                    <h3 id={`cat-title-${category.id}`} className="text-lg font-bold text-slate-900">{category.title}</h3>
                  </div>
                  <p id={`cat-desc-${category.id}`} className="text-slate-600 text-sm leading-relaxed">
                    {category.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* OEM / Private Label Section */}
      <section className="py-16 bg-white w-full border-t border-slate-200">
         <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100">
               <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Looking for Custom Manufacturing?</h2>
                  <p className="text-lg text-slate-600 mb-6">
                     We specialize in OEM (Original Equipment Manufacturer) and ODM (Original Design Manufacturer) projects. Whether you need private labeling on existing products or a completely new mold created from CAD drawings, we find the right partners who respect IP and deliver on spec.
                  </p>
                  <ul className="space-y-2 mb-8">
                     <li className="flex items-center gap-2 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Private Labeling & Custom Packaging
                     </li>
                     <li className="flex items-center gap-2 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Prototyping & Sampling
                     </li>
                     <li className="flex items-center gap-2 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Strict NDA and IP Protection Enforcement
                     </li>
                  </ul>
                  <Button asChild>
                     <Link to="/contact">Discuss Custom Manufacturing</Link>
                  </Button>
               </div>
               <div className="w-full md:w-1/3 flex justify-center">
                  {/* Decorative element */}
                  <div className="relative w-48 h-48">
                     <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse opacity-50"></div>
                     <div className="absolute inset-4 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-xl">
                        <Package className="w-20 h-20" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}