import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  ArrowRight,
  Package,
  HardHat,
  ShoppingCart,
  Globe,
  Settings,
  Cpu,
  Tv,
  Wrench,
  Shirt,
  Box,
  Car,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const categories = [
  {
    icon: Cpu,
    title: "Electronics & Components",
    desc: "Consumer electronics, PCBs, electronic components, semiconductors, sensors, and IoT devices.",
    imgId: "electronics",
  },
  {
    icon: HardHat,
    title: "Industrial Equipment",
    desc: "Machinery, manufacturing equipment, industrial tools, automation systems, and spare parts.",
    imgId: "industrial",
  },
  {
    icon: ShoppingCart,
    title: "Consumer Goods",
    desc: "Home products, kitchenware, lifestyle items, toys, sporting goods, and general merchandise.",
    imgId: "consumer-goods",
  },
  {
    icon: Shirt,
    title: "Textiles & Apparel",
    desc: "Garments, fabrics, fashion accessories, footwear, and textile raw materials.",
    imgId: "textiles",
  },
  {
    icon: Box,
    title: "Packaging & Printing",
    desc: "Custom packaging, labels, boxes, printed materials, and promotional items.",
    imgId: "packaging",
  },
  {
    icon: Car,
    title: "Auto Parts & Hardware",
    desc: "Automotive components, hardware tools, mechanical parts, and fasteners.",
    imgId: "auto-parts",
  },
  {
    icon: Tv,
    title: "Medical & Healthcare",
    desc: "Medical devices, healthcare equipment, PPE, and laboratory supplies.",
    imgId: "medical",
  },
  {
    icon: Wrench,
    title: "Furniture & Home Decor",
    desc: "Indoor and outdoor furniture, home decor items, lighting fixtures, and accessories.",
    imgId: "furniture",
  },
  {
    icon: Settings,
    title: "Raw Materials & Chemicals",
    desc: "Industrial raw materials, chemical products, additives, and specialty materials.",
    imgId: "materials",
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">Product Categories</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Products We Source
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We source across a wide range of industries and product categories. If you need it manufactured in China, we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat, i) => (
              <Card key={i} className="p-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <cat.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{cat.desc}</p>
                <div className="rounded-lg overflow-hidden bg-slate-100 aspect-[16/9]">
                  <img
                    data-strk-img-id={`product-cat-${i}`}
                    data-strk-img={`[product-cat-title-${i}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                  />
                </div>
                <p id={`product-cat-title-${i}`} className="sr-only">{cat.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Don't See Your Product Category?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            We source across many more categories. Contact us with your specific requirements and we'll find the right suppliers.
          </p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg transition-colors">
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}