import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Cpu, Shirt, Wrench, Sofa, Box, Cog, Plug,
  Gem, Watch, Home, Baby, ShoppingBag, Briefcase,
} from "lucide-react";

const categories = [
  {
    id: "electronics",
    title: "Electronics & Components",
    icon: Cpu,
    desc: "Consumer electronics, PCBA, cables, connectors, IoT devices, batteries, chargers, and electronic components.",
    examples: [
      "Bluetooth speakers & headphones",
      "USB cables & charging accessories",
      "PCBA assemblies & circuit boards",
      "LED lighting & displays",
      "Smart home devices & sensors",
      "Power banks & battery packs",
    ],
    imgId: "cat-electronics-img",
    titleId: "cat-electronics-title",
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    icon: Shirt,
    desc: "Men's, women's, and children's clothing, activewear, uniforms, bags, and textile materials.",
    examples: [
      "T-shirts, hoodies & casual wear",
      "Activewear & sportswear",
      "Uniforms & workwear",
      "Bags, backpacks & luggage",
      "Scarves, hats & accessories",
      "Custom printed fabrics & textiles",
    ],
    imgId: "cat-apparel-img",
    titleId: "cat-apparel-title",
  },
  {
    id: "hardware",
    title: "Hardware & Tools",
    icon: Wrench,
    desc: "Hand tools, power tools, fasteners, hardware fittings, and metal fabrication products.",
    examples: [
      "Hand tools & tool sets",
      "Power tools & accessories",
      "Screws, bolts & fasteners",
      "Door & window hardware",
      "Plumbing & bathroom fittings",
      "Stainless steel products",
    ],
    imgId: "cat-hardware-img",
    titleId: "cat-hardware-title",
  },
  {
    id: "furniture",
    title: "Furniture & Home Goods",
    icon: Sofa,
    desc: "Office furniture, home furniture, kitchenware, decor items, and household products.",
    examples: [
      "Office desks & chairs",
      "Sofas, beds & dining sets",
      "Kitchenware & cookware",
      "Home decor & wall art",
      "Storage & organization products",
      "Outdoor & patio furniture",
    ],
    imgId: "cat-furniture-img",
    titleId: "cat-furniture-title",
  },
  {
    id: "packaging",
    title: "Packaging & Printing",
    icon: Box,
    desc: "Product packaging, gift boxes, labels, printed materials, and custom branded packaging.",
    examples: [
      "Corrugated & rigid boxes",
      "Paper bags & pouches",
      "Plastic & PET packaging",
      "Labels, stickers & tags",
      "Custom printed materials",
      "Blister & clamshell packaging",
    ],
    imgId: "cat-packaging-img",
    titleId: "cat-packaging-title",
  },
  {
    id: "automotive",
    title: "Automotive & Industrial",
    icon: Cog,
    desc: "Auto parts, industrial machinery components, plastic parts, and custom OEM manufacturing.",
    examples: [
      "Auto parts & accessories",
      "Machinery components & spare parts",
      "Custom plastic injection molded parts",
      "Rubber & silicone products",
      "Metal stamping & CNC parts",
      "Industrial safety equipment",
    ],
    imgId: "cat-automotive-img",
    titleId: "cat-automotive-title",
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    icon: Gem,
    desc: "Cosmetics, skincare, hair care, personal care products, and beauty tools.",
    examples: [
      "Makeup brushes & tools",
      "Skincare packaging & containers",
      "Hair care tools & accessories",
      "Nail care products",
      "Bath & body products",
      "Men's grooming products",
    ],
    imgId: "cat-beauty-img",
    titleId: "cat-beauty-title",
  },
  {
    id: "toys",
    title: "Toys & Baby Products",
    icon: Baby,
    desc: "Children's toys, educational products, baby gear, and childcare items.",
    examples: [
      "Educational toys & puzzles",
      "Plush toys & stuffed animals",
      "Outdoor & ride-on toys",
      "Baby carriers & strollers",
      "Feeding & nursing products",
      "Safety gates & monitors",
    ],
    imgId: "cat-toys-img",
    titleId: "cat-toys-title",
  },
  {
    id: "sports",
    title: "Sports & Outdoor",
    icon: Watch,
    desc: "Fitness equipment, outdoor gear, sports accessories, and camping products.",
    examples: [
      "Fitness bands & weights",
      "Yoga mats & accessories",
      "Camping tents & sleeping bags",
      "Biking & cycling accessories",
      "Water sports equipment",
      "Hiking & outdoor gear",
    ],
    imgId: "cat-sports-img",
    titleId: "cat-sports-title",
  },
  {
    id: "kitchen",
    title: "Kitchen & Dining",
    icon: Home,
    desc: "Kitchen appliances, cookware, dining ware, food storage, and bar tools.",
    examples: [
      "Small kitchen appliances",
      "Pots, pans & cookware sets",
      "Cutlery & flatware",
      "Glassware & drinkware",
      "Food storage containers",
      "Coffee & tea accessories",
    ],
    imgId: "cat-kitchen-img",
    titleId: "cat-kitchen-title",
  },
  {
    id: "fashion",
    title: "Fashion Accessories",
    icon: ShoppingBag,
    desc: "Jewelry, watches, belts, sunglasses, and fashion accessories.",
    examples: [
      "Costume jewelry & bracelets",
      "Watches & watch bands",
      "Sunglasses & eyewear",
      "Belts & leather accessories",
      "Hair accessories & clips",
      "Scarves & wraps",
    ],
    imgId: "cat-fashion-img",
    titleId: "cat-fashion-title",
  },
  {
    id: "office",
    title: "Office & Business",
    icon: Briefcase,
    desc: "Office supplies, promotional products, corporate gifts, and stationery.",
    examples: [
      "Pens, notebooks & stationery",
      "Promotional USB drives",
      "Corporate gift sets",
      "Branded tote bags",
      "Desk organizers & accessories",
      "Conference & event materials",
    ],
    imgId: "cat-office-img",
    titleId: "cat-office-title",
  },
];

export default function Products() {
  useEffect(() => {
    document.title = "Products We Source | SSourcing China";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/90 via-brand/85 to-brand-dark/90" />
        <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Products We Source
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
              We have deep experience sourcing across dozens of product
              categories from manufacturers across China's major industrial
              zones.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="group p-6 rounded-xl border border-border bg-white hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-brand/5 flex items-center justify-center shrink-0 group-hover:bg-brand/10 transition-colors">
                    <cat.icon className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3
                      id={cat.titleId}
                      className="text-lg font-bold text-text-primary mb-1"
                    >
                      {cat.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="pl-16">
                  <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                    Common Products
                  </h4>
                  <ul className="space-y-1.5">
                    {cat.examples.map((ex) => (
                      <li
                        key={ex}
                        className="text-text-secondary text-sm flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't see your product? */}
      <section className="py-16 bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
            We source a wide range of products beyond what is listed here.
            Tell us what you need and we will let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-white font-bold hover:bg-accent-dark transition-colors shadow-lg"
          >
            Tell Us What You Need
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
