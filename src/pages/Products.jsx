import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Cpu, Shirt, Wrench, Home, Package, ShoppingBag, Factory, Puzzle } from "lucide-react";

const categories = [
  {
    icon: Cpu,
    name: "Electronics & Components",
    desc: "Consumer electronics, PCBs, cables, chargers, smart devices, semiconductors, and electronic components.",
    examples: ["Smartphones & accessories", "PCB assemblies", "LED lighting", "Power banks", "Bluetooth devices"],
  },
  {
    icon: Shirt,
    name: "Textiles & Apparel",
    desc: "Garments, fabrics, bags, footwear, accessories, and textile raw materials for fashion and industrial use.",
    examples: ["Casual & formal wear", "Sports apparel", "Handbags & luggage", "Shoes & boots", "Technical fabrics"],
  },
  {
    icon: Wrench,
    name: "Machinery & Tools",
    desc: "Industrial equipment, power tools, hardware, automotive parts, and precision engineering components.",
    examples: ["CNC machined parts", "Power tools", "Hydraulic equipment", "Auto parts", "Industrial pumps"],
  },
  {
    icon: Home,
    name: "Home & Garden",
    desc: "Furniture, lighting, kitchenware, home decor, outdoor products, and garden supplies.",
    examples: ["Furniture & cabinetry", "LED lighting fixtures", "Kitchen appliances", "Bathroom fittings", "Outdoor furniture"],
  },
  {
    icon: Package,
    name: "Packaging Materials",
    desc: "Boxes, bottles, labels, bags, custom packaging solutions for retail, food, and industrial applications.",
    examples: ["Corrugated boxes", "Plastic & glass bottles", "Flexible pouches", "Labels & stickers", "Gift boxes"],
  },
  {
    icon: ShoppingBag,
    name: "Consumer Goods",
    desc: "Toys, stationery, beauty products, pet supplies, promotional items, and general merchandise.",
    examples: ["Plastic toys & games", "Cosmetics & skincare", "Office supplies", "Pet accessories", "Promotional merchandise"],
  },
  {
    icon: Factory,
    name: "Industrial Supplies",
    desc: "Raw materials, chemicals, safety equipment, and industrial consumables for manufacturing operations.",
    examples: ["Metal raw materials", "Industrial chemicals", "Safety gear & PPE", "Abrasives", "Sealing materials"],
  },
  {
    icon: Puzzle,
    name: "Custom & Niche Products",
    desc: "Specialized products that do not fit standard categories. If you can describe it, we can help you source it.",
    examples: ["Medical devices", "Agricultural equipment", "Renewable energy parts", "Art & craft supplies", "Specialty food ingredients"],
  },
];

export default function Products() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div>
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Decades of combined experience sourcing across virtually every major product category manufactured in China.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat, i) => (
              <div
                key={cat.name}
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="h-44 bg-slate-200 relative overflow-hidden">
                  <img
                    data-strk-img-id={`products-cat-${i}`}
                    data-strk-img={`[products-cat-${i}-desc] [products-cat-${i}-name]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                      <cat.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 id={`products-cat-${i}-name`} className="text-white font-bold text-sm">{cat.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p id={`products-cat-${i}-desc`} className="text-sm text-slate-600 leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            Do not see your product category?
          </h2>
          <p className="text-slate-600 mb-8">
            We have sourced products across hundreds of categories. Get in touch and we will let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
