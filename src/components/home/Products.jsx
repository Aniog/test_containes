import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const products = [
    {
      id: "pro-double-fold",
      title: "Pro Double Folder Series",
      desc: "Our flagship double folding machine. Capable of bending parts simultaneously on both sides of the material, drastically reducing handling time.",
      specs: ["Max Bending length: 3200mm", "Max Thickness: 2.0mm", "Dual-Drive hydraulic system"]
    },
    {
      id: "compact-metal-fold",
      title: "Compact Metal Folder",
      desc: "An elegant, user-friendly sheet metal folder designed for smaller workshops requiring precision folding capability.",
      specs: ["Max Bending length: 2000mm", "Max Thickness: 1.5mm", "Touch-screen interface"]
    },
    {
      id: "auto-sheet-folder",
      title: "Auto Sheet Folding Machine",
      desc: "Fully automated sheet metal folding machine with CNC control, optimized for speed and repeatable accuracy.",
      specs: ["Max Bending length: 4000mm", "Max Thickness: 3.0mm", "Integrated robotic material handling"]
    }
  ];

  return (
    <section id="products" ref={containerRef} className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 id="products-section-title" className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl">
              Our Machinery Lineup
            </h2>
            <p id="products-section-desc" className="mt-4 text-lg text-slate-600">
              Discover the perfect folding solution for your metal fabrication needs.
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 text-blue-900 hover:text-blue-800 hover:bg-blue-50">
            View All Series <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border-slate-200 bg-white hover:border-slate-300 transition-colors shadow-sm">
              <div className="h-48 w-full bg-slate-100 overflow-hidden relative">
                <img
                  data-strk-img-id={`prod-img-${product.id}`}
                  data-strk-img={`[prod-title-${product.id}] [products-section-title] metal machinery`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle id={`prod-title-${product.id}`} className="text-xl text-slate-900">{product.title}</CardTitle>
                <CardDescription className="text-slate-600 line-clamp-3">{product.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
