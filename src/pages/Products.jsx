import React, { useEffect, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: "df-9000",
    name: "Artitect DF-9000 Pro",
    type: "Double Folding Machine",
    description: "Our flagship double folder, capable of positive and negative bends in a single sequence without turning the material. Ideal for complex profiles and long workpieces.",
    imgId: "prod-img-df9000",
    features: ["Up to 3mm folding capacity", "Fully automated handling", "Precision servo drives", "Touchscreen CNC programming"]
  },
  {
    id: "sf-450",
    name: "Artitect SF-450 Heavy Duty",
    type: "Sheet Metal Folder",
    description: "Robust single-action metal folder designed for heavy gauge materials. Features hydraulic clamping and a heavily reinforced folding beam for consistent bends over its entire length.",
    imgId: "prod-img-sf450",
    features: ["Up to 6mm folding capacity", "Hydraulic clamping system", "Adjustable crowning", "User-friendly interface"]
  },
  {
    id: "df-compact",
    name: "Artitect DF-Compact",
    type: "Double Folder",
    description: "A space-saving double folding machine perfect for smaller workshops that still demand the speed and versatility of bi-directional bending. Great for roofing and architectural trims.",
    imgId: "prod-img-dfcompact",
    features: ["Compact footprint", "High-speed folding cycles", "Energy-efficient operation", "Quick tool changing system"]
  },
  {
    id: "smf-light",
    name: "Artitect FlexFold 2000",
    type: "Metal Folding Machine",
    description: "A highly versatile machine for light to medium gauge sheet metal. Its segmented tooling on clamping, folding, and bottom beams allows for complex box and pan work.",
    imgId: "prod-img-flexfold",
    features: ["Segmented tooling", "Ergonomic operation", "Low maintenance design", "Integrated backgauge"]
  }
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="py-12 bg-slate-50 min-h-[calc(100vh-theme(spacing.16))]" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h1 id="products-heading" className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4 uppercase">
            Machinery Lineup
          </h1>
          <p className="text-lg text-slate-600">
            Discover our comprehensive range of metal folding solutions. From nimble flex folders to heavy-duty double folding industrial lines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="aspect-[16/9] relative bg-slate-100 overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[prod-type-${product.id}] [prod-name-${product.id}] industrial machinery`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                  {product.type}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6 flex-grow">
                  <h2 id={`prod-name-${product.id}`} className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h2>
                  <p id={`prod-type-${product.id}`} className="sr-only">{product.type}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-700">
                        <Check className="w-5 h-5 text-slate-400 mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-slate-100 mt-auto flex justify-between items-center">
                  <Button variant="outline" className="border-slate-300 text-slate-700 font-medium">Download Specs</Button>
                  <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white font-medium">
                     <Link to="/contact">Request Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
