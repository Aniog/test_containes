import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, Package, CheckCircle, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Electronics & Components",
    items: ["Consumer electronics", "PCBs and components", "LED lighting", "Batteries and power supplies", "Sensors and IoT devices"],
    regions: "Shenzhen, Guangzhou",
  },
  {
    name: "Home & Kitchen Products",
    items: ["Cookware and utensils", "Small kitchen appliances", "Home storage solutions", "Cleaning products", "Tableware and glassware"],
    regions: "Guangdong, Zhejiang",
  },
  {
    name: "Fashion & Accessories",
    items: ["Apparel and garments", "Shoes and footwear", "Bags and luggage", "Watches and jewelry", "Textiles and fabrics"],
    regions: "Guangzhou, Zhejiang",
  },
  {
    name: "Industrial Equipment",
    items: ["Machinery and tools", "Hydraulic components", "Measuring instruments", "Packaging machinery", "Safety equipment"],
    regions: "Zhejiang, Jiangsu",
  },
  {
    name: "Furniture & Home Decor",
    items: ["Indoor furniture", "Outdoor furniture", "Home decoration", "Lighting fixtures", "Rugs and carpets"],
    regions: "Guangdong, Shandong",
  },
  {
    name: "Health & Beauty",
    items: ["Skincare products", "Cosmetics and makeup", "Personal care items", "Health supplements", "Medical devices"],
    regions: "Guangdong, Shanghai",
  },
  {
    name: "Auto Parts & Accessories",
    items: ["Car electronics", "Interior accessories", "Engine parts", "Tires and wheels", "Motorcycle parts"],
    regions: "Guangdong, Zhejiang",
  },
  {
    name: "Packaging & Materials",
    items: ["Paper and cardboard packaging", "Plastic packaging", "Glass containers", "Labels and stickers", "Custom packaging boxes"],
    regions: "Guangdong, Jiangsu",
  },
];

export default function ProductsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-gray-900 to-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Products We Source
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            We source across major manufacturing categories from China's key industrial regions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="bg-surface rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{cat.name}</h3>
                </div>
                <ul className="space-y-2 mb-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400">
                  Key manufacturing regions: {cat.regions}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We source a wide range of products beyond what's listed here. Contact us with your requirements and we'll find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg px-8 py-3.5 text-base transition-colors"
          >
            Inquire About Your Product <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}