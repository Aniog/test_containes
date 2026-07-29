import React, { useEffect, useRef } from 'react';
import { Smartphone, Home, Factory, Shirt, Sofa, ChefHat, TreePine, Car, PenTool, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Consumer Electronics",
    items: ["Smart Home Devices", "Audio Equipment", "Mobile Accessories", "Wearables"],
    img: "electronics consumer products"
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Home & Kitchen",
    items: ["Small Appliances", "Kitchenware", "Home Decor", "Organizers"],
    img: "home kitchen products"
  },
  {
    icon: <Sofa className="w-8 h-8" />,
    title: "Furniture & Interior",
    items: ["Office Furniture", "Modern Home Sets", "Outdoor Furniture", "Shop Fittings"],
    img: "modern furniture manufacturing"
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Industrial Machinery",
    items: ["Packing Machines", "CNC Components", "Hardware Tools", "Plastic Molds"],
    img: "industrial machinery factory"
  },
  {
    icon: <Shirt className="w-8 h-8" />,
    title: "Apparel & Textiles",
    items: ["Activewear", "Workwear", "Fabric Sourcing", "Sustainable Textiles"],
    img: "textile garment production"
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Outdoor & Sporting Goods",
    items: ["Camping Gear", "Fitness Equipment", "Garden Tools", "Water Sports"],
    img: "outdoor sporting products"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Lighting Solutions",
    items: ["LED Commercial Lighting", "Solar Outdoor Lights", "Decorative Fixtures", "Industrial Lighting"],
    img: "led lighting manufacturing"
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Automotive Parts",
    items: ["EV Chargers", "Aftermarket Accessories", "Performance Parts", "Maintenance Tools"],
    img: "auto parts production"
  }
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="pt-24 pb-20" ref={containerRef}>
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Expertise Across Industries</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We source from a verified network of over 5,000 manufacturers across China's major industrial hubs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((cat, i) => (
              <div key={i} className="group bg-slate-50 rounded-3xl overflow-hidden flex flex-col md:flex-row border border-slate-100 hover:shadow-xl transition-all">
                <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img 
                    data-strk-img-id={`prod-cat-img-${i}`}
                    data-strk-img={cat.img}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="md:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-900 mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                      {cat.icon}
                    </div>
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-4">{cat.title}</h2>
                    <ul className="space-y-2 mb-8">
                      {cat.items.map((item, j) => (
                        <li key={j} className="text-slate-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to="/contact" 
                    className="text-blue-900 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Sourching Info <PenTool className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM/ODM Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-3xl font-extrabold mb-6">Custom OEM & ODM Projects</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Need a custom product built from scratch? We help you navigate prototyping, tooling, and private labeling. From 3D drawings to final mass production, we ensure your intellectual property is protected and quality is consistent.
              </p>
              <div className="space-y-4">
                {["Proprietary Tooling Management", "Private Labeling & Packaging", "Prototypes & Sample Approval", "IP Protection & NDAs"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-blue-900 font-bold">✓</div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl skew-y-1">
              <img 
                data-strk-img-id="oem-odm-img"
                data-strk-img="China factory mold production engineering"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                alt="OEM ODM Production"
                className="w-full"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
