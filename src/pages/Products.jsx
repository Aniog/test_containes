import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Server, Zap, Smartphone, Sofa, PenTool, Dumbbell } from 'lucide-react'; // Example icons

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: "cat-electronics",
      title: "Consumer Electronics",
      desc: "Smart home devices, audio equipment, wearables, and electronic accessories.",
      icon: Smartphone
    },
    {
      id: "cat-home",
      title: "Home & Furniture",
      desc: "Indoor/outdoor furniture, home decor, kitchenware, and textiles.",
      icon: Sofa
    },
    {
      id: "cat-gym",
      title: "Fitness & Sporting Goods",
      desc: "Gym equipment, yoga accessories, outdoor gear, and activewear.",
      icon: Dumbbell
    },
    {
      id: "cat-office",
      title: "Office Supplies",
      desc: "Ergonomic chairs, standing desks, stationery, and organizational products.",
      icon: PenTool
    },
    {
      id: "cat-industrial",
      title: "Industrial & Machinery",
      desc: "Tools, replacement parts, packaging materials, and small machinery.",
      icon: Server
    },
    {
      id: "cat-gadgets",
      title: "Gadgets & Novelties",
      desc: "Trending items, promotional gifts, toys, and lifestyle accessories.",
      icon: Zap
    }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 id="products-header" className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
          <p className="text-xl text-slate-300">
            With over a decade of experience, we have established strong networks across major manufacturing clusters in China.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden bg-slate-200 relative">
                     <img 
                        alt={cat.title}
                        className="w-full h-full object-cover"
                        data-strk-img-id={`img-${cat.id}`}
                        data-strk-img={`[title-${cat.id}] [desc-${cat.id}] wholesale manufacturing`}
                        data-strk-img-ratio="3x2"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                     />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                     <cat.icon className="text-[#c2182b] w-6 h-6" />
                     <h3 id={`title-${cat.id}`} className="text-xl font-bold text-slate-900">{cat.title}</h3>
                  </div>
                  <p id={`desc-${cat.id}`} className="text-slate-600">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-center gap-8 justify-between shadow-sm">
             <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Looking for something specific?</h3>
                <p className="text-slate-600">Even if your product isn't listed here, our extensive network can find it. We specialize in custom OEM and ODM manufacturing.</p>
             </div>
             <Link to="/contact" className="flex-shrink-0">
               <Button size="lg" className="bg-[#c2182b] hover:bg-[#a01423] text-white">Send Product Specs</Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}