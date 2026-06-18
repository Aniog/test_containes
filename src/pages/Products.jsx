import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "electronics",
    name: "Electronics & Components",
    items: ["Consumer electronics", "LED lighting", "PCBs and components", "Cables and connectors", "Smart home devices", "Power tools"],
    titleId: "cat-electronics-title",
    descId: "cat-electronics-desc",
    imgId: "cat-electronics-img-a1b2c3",
  },
  {
    id: "furniture",
    name: "Furniture & Home Décor",
    items: ["Office furniture", "Bedroom and living room furniture", "Outdoor furniture", "Home accessories", "Lighting fixtures", "Storage solutions"],
    titleId: "cat-furniture-title",
    descId: "cat-furniture-desc",
    imgId: "cat-furniture-img-d4e5f6",
  },
  {
    id: "apparel",
    name: "Apparel & Textiles",
    items: ["Men's and women's clothing", "Sportswear and activewear", "Workwear and uniforms", "Bags and accessories", "Fabrics and materials", "Footwear"],
    titleId: "cat-apparel-title",
    descId: "cat-apparel-desc",
    imgId: "cat-apparel-img-g7h8i9",
  },
  {
    id: "hardware",
    name: "Hardware & Industrial",
    items: ["Fasteners and fittings", "Hand tools and power tools", "Safety equipment", "Valves and pumps", "Bearings and mechanical parts", "Construction materials"],
    titleId: "cat-hardware-title",
    descId: "cat-hardware-desc",
    imgId: "cat-hardware-img-j1k2l3",
  },
  {
    id: "packaging",
    name: "Packaging & Printing",
    items: ["Custom boxes and cartons", "Plastic packaging", "Paper bags and pouches", "Labels and stickers", "Display packaging", "Eco-friendly packaging"],
    titleId: "cat-packaging-title",
    descId: "cat-packaging-desc",
    imgId: "cat-packaging-img-m4n5o6",
  },
  {
    id: "toys",
    name: "Toys & Baby Products",
    items: ["Plastic and wooden toys", "Educational toys", "Outdoor play equipment", "Baby gear and accessories", "Stuffed animals", "Board games"],
    titleId: "cat-toys-title",
    descId: "cat-toys-desc",
    imgId: "cat-toys-img-p7q8r9",
  },
  {
    id: "health",
    name: "Health & Beauty",
    items: ["Personal care products", "Cosmetics and skincare", "Medical devices (Class I)", "Fitness equipment", "Supplements packaging", "Wellness accessories"],
    titleId: "cat-health-title",
    descId: "cat-health-desc",
    imgId: "cat-health-img-s1t2u3",
  },
  {
    id: "automotive",
    name: "Automotive & Accessories",
    items: ["Car accessories", "Motorcycle parts", "Bicycle components", "Auto lighting", "Cleaning and maintenance products", "Tires and wheels"],
    titleId: "cat-auto-title",
    descId: "cat-auto-desc",
    imgId: "cat-auto-img-v4w5x6",
  },
  {
    id: "sports",
    name: "Sports & Outdoor",
    items: ["Camping and hiking gear", "Water sports equipment", "Gym and fitness equipment", "Team sports gear", "Cycling accessories", "Outdoor apparel"],
    titleId: "cat-sports-title",
    descId: "cat-sports-desc",
    imgId: "cat-sports-img-y7z8a9",
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-[#0D2545] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#E8621A] text-sm font-semibold uppercase tracking-widest">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Products We Source</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We source across a wide range of consumer and industrial product categories.
              If your product is manufactured in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-[#F4F6FA] rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-lg font-bold text-[#0D2545] mb-3">{cat.name}</h2>
                  <ul id={cat.descId} className="flex flex-col gap-1">
                    {cat.items.map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-[#F4F6FA] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0D2545] mb-3">Don't See Your Product Category?</h2>
          <p className="text-gray-500 text-lg mb-8">
            If it's manufactured in China, we can likely source it. Contact us with your product details and we'll assess feasibility.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E8621A] hover:bg-[#C9541A] text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Ask About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
