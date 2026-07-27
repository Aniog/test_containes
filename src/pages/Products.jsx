import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import {
  Smartphone, Wrench, Truck, Home, Shirt, Heart, UtensilsCrossed,
  Building2, ArrowRight, ChevronRight,
} from "lucide-react";

const categories = [
  {
    icon: Smartphone,
    title: "Consumer Electronics",
    desc: "Smartphones, tablets, accessories, audio devices, wearables, smart home products, and electronic components.",
    items: ["Mobile accessories", "Bluetooth audio", "Smart watches", "Charging devices", "Smart home"],
  },
  {
    icon: Wrench,
    title: "Industrial Equipment",
    desc: "Machinery, tools, automation components, manufacturing equipment, and industrial supplies.",
    items: ["Power tools", "CNC components", "Packaging machinery", "Measuring instruments", "Hydraulic parts"],
  },
  {
    icon: Truck,
    title: "Auto Parts",
    desc: "Automotive components, accessories, replacement parts, and aftermarket products for all vehicle types.",
    items: ["Engine parts", "Brake systems", "LED lighting", "Interior accessories", "Suspension parts"],
  },
  {
    icon: Home,
    title: "Home & Living",
    desc: "Furniture, home decor, kitchenware, textiles, bedding, and household products.",
    items: ["Modern furniture", "Kitchen tools", "Home textiles", "Decor items", "Storage solutions"],
  },
  {
    icon: Shirt,
    title: "Apparel & Accessories",
    desc: "Garments, footwear, bags, accessories, and fashion items for all markets.",
    items: ["Casual wear", "Sportswear", "Leather goods", "Fashion accessories", "Workwear"],
  },
  {
    icon: Heart,
    title: "Health & Beauty",
    desc: "Cosmetics, personal care products, supplements, medical devices, and wellness products.",
    items: ["Skincare", "Hair care", "Dietary supplements", "Essential oils", "Medical disposables"],
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    desc: "Packaged foods, ingredients, beverages, snacks, and agricultural products.",
    items: ["Snack foods", "Beverages", "Dried goods", "Food additives", "Organic products"],
  },
  {
    icon: Building2,
    title: "Building Materials",
    desc: "Construction materials, hardware, piping, flooring, fixtures, and renovation supplies.",
    items: ["Flooring", "Lighting fixtures", "Plumbing supplies", "Hardware", "Construction tools"],
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
      <section className="bg-gradient-to-br from-brand-900 to-brand-800 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" id="products-hero-title">
              Products We Source
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed" id="products-hero-subtitle">
              We source across a wide range of industries. Whatever your product, we have the network and expertise to find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="bg-neutral-50 rounded-xl p-6 border border-neutral-100 hover:bg-white hover:shadow-md transition-all">
                <cat.icon className="w-10 h-10 text-brand-600 mb-4" />
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{cat.title}</h3>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">{cat.desc}</p>
                <ul className="space-y-1.5">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-xs text-neutral-500 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-brand-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-neutral-100">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Can't Find Your Product Category?</h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Our sourcing network covers hundreds of product categories beyond what's listed here. If you have a specific product in mind, contact us and we'll confirm our capability to source it for you.
            </p>
            <Link to="/contact" className="btn-primary">
              Ask About Your Product <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-brand-200 mb-8 max-w-xl mx-auto">
            Tell us what product you need and we'll find the best supplier for you.
          </p>
          <Link to="/contact" className="btn-accent text-base px-8 py-3.5 inline-block">
            Get a Free Quote <ArrowRight className="w-4 h-4 ml-1 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
}