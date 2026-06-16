import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const products = [
    {
      id: "profold-x2",
      title: "ProFold Series X2",
      badge: "Flagship",
      subtitle: "Heavy-duty double folding machine",
      description: "Our most versatile double folder, designed for high-capacity continuous production. Ideal for complex architectural profiles and heavy gauge materials.",
      specs: [
        "Capacity: 3.0mm Mild Steel",
        "Working Length: up to 12m",
        "Control: 21\" 3D Touchscreen",
        "Operation: Fully Automatic"
      ]
    },
    {
      id: "agile-df4",
      title: "Agile DF-4",
      badge: "Best Value",
      subtitle: "Compact double folder",
      description: "Perfect for mid-sized shops looking to transition to double folding. Offers excellent speed and precision with a smaller footprint.",
      specs: [
        "Capacity: 2.0mm Mild Steel",
        "Working Length: up to 6m",
        "Control: 15\" 2D Touchscreen",
        "Operation: Semi-Automatic"
      ]
    },
    {
      id: "maxbend-3000",
      title: "MaxBend 3000",
      badge: "Heavy Duty",
      subtitle: "Industrial sheet metal folder",
      description: "A robust single-direction folding machine built for extreme longevity. Features unmatched clamping pressure and bending force.",
      specs: [
        "Capacity: 4.0mm Mild Steel",
        "Working Length: up to 4m",
        "Control: Digital CNC Controller",
        "Operation: Manual/Auto Cycle"
      ]
    },
    {
      id: "roof-master",
      title: "RoofMaster Pro",
      badge: "Specialized",
      subtitle: "Long-length metal folding machine",
      description: "Specifically engineered for the metal roofing industry. Features extended throat depth and specialized tooling for standing seam profiles.",
      specs: [
        "Capacity: 1.5mm Mild Steel",
        "Working Length: up to 10m",
        "Control: Dedicated Roofing CNC",
        "Operation: Automatic Slitting"
      ]
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 pt-10 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="text-center">
          <h1 id="products-page-title" className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
            Our Machinery Lineup
          </h1>
          <p id="products-page-desc" className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of premium double folders and sheet metal folding machines. Engineered for precision, built for profitability.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product) => {
            const titleId = `product-${product.id}-title`;
            const descId = `product-${product.id}-desc`;

            return (
              <Card key={product.id} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow border-gray-200">
                <div className="aspect-[16/9] relative bg-slate-200">
                  <img
                    alt={product.title}
                    data-strk-img-id={`img-${product.id}`}
                    data-strk-img={`[${descId}] [${titleId}] metal folder machine`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {product.badge}
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardDescription className="text-blue-600 font-medium uppercase tracking-wide">
                    {product.subtitle}
                  </CardDescription>
                  <CardTitle id={titleId} className="text-2xl text-slate-900">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p id={descId} className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2 text-sm uppercase">Key Specifications</h4>
                    <ul className="space-y-2">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-2 pb-6 px-6">
                  <Button asChild className="w-full bg-slate-900 hover:bg-black text-white">
                    <Link to="/contact">Request Information</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
      
      {/* Custom Solutions Promo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center shadow-xl border border-slate-800">
          <h2 id="custom-solutions-title" className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
          <p id="custom-solutions-desc" className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            We understand that every manufacturing facility has unique requirements. Our engineering team can modify existing designs or build custom folding machines tailored to your specific workflow.
          </p>
          <Button asChild variant="outline" className="border-gray-500 text-slate-800 hover:bg-white hover:text-slate-900 bg-white">
            <Link to="/contact">Consult with an Engineer</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;