import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const categories = [
  {
    id: "electronics",
    title: "Consumer Electronics",
    desc: "Smartphones, tablets, audio devices, wearable tech, smart home devices, computer accessories, and charging solutions.",
    items: ["Smartphones & Tablets", "Bluetooth & Audio Devices", "Wearable Technology", "Smart Home Products", "Phone Accessories", "Chargers & Power Banks"],
    imgId: "products-elec-1a2b3c",
  },
  {
    id: "home-garden",
    title: "Home & Garden",
    desc: "Home decor, kitchenware, furniture, gardening tools, storage solutions, and household products for modern living.",
    items: ["Home Decor & Furnishings", "Kitchen & Dining", "Garden Tools & Equipment", "Storage & Organization", "Bathroom Accessories", "Lighting Products"],
    imgId: "products-home-4d5e6f",
  },
  {
    id: "apparel",
    title: "Apparel & Accessories",
    desc: "Garments, bags, shoes, fashion accessories, textiles, and custom apparel for brands and retailers.",
    items: ["Ready-to-Wear Garments", "Bags & Luggage", "Footwear", "Fashion Accessories", "Textiles & Fabrics", "Custom Branded Apparel"],
    imgId: "products-apparel-7g8h9i",
  },
  {
    id: "industrial",
    title: "Industrial & Tools",
    desc: "Machinery parts, hardware, power tools, safety equipment, industrial supplies, and manufacturing components.",
    items: ["Power Tools & Hand Tools", "Safety Equipment & PPE", "Industrial Hardware", "Machinery Components", "Measurement Instruments", "Workshop Equipment"],
    imgId: "products-industrial-0j1k2l",
  },
  {
    id: "packaging",
    title: "Packaging & Printing",
    desc: "Custom boxes, labels, paper products, display materials, and commercial printing solutions for businesses.",
    items: ["Custom Product Packaging", "Labels & Stickers", "Paper Products & Stationery", "Retail Display Materials", "Commercial Printing", "Eco-Friendly Packaging"],
    imgId: "products-packaging-3m4n5o",
  },
  {
    id: "sports",
    title: "Sports & Outdoor",
    desc: "Fitness equipment, camping gear, outdoor recreation products, sports accessories, and cycling parts.",
    items: ["Fitness Equipment", "Camping & Hiking Gear", "Outdoor Recreation", "Sports Accessories", "Cycling Components", "Water Sports Equipment"],
    imgId: "products-sports-6p7q8r",
  },
  {
    id: "auto",
    title: "Automotive Parts",
    desc: "Auto parts, accessories, interior components, and aftermarket products for vehicles of all types.",
    items: ["Auto Interior Accessories", "Exterior Parts & Accessories", "Car Electronics", "Maintenance Products", "Motorcycle Parts", "Aftermarket Components"],
    imgId: "products-auto-9s0t1u",
  },
  {
    id: "baby",
    title: "Baby & Kids Products",
    desc: "Baby gear, toys, children's furniture, educational products, and childcare essentials.",
    items: ["Baby Gear & Accessories", "Educational Toys", "Kids Furniture", "Nursery Products", "Children's Apparel", "Safety Products"],
    imgId: "products-baby-2v3w4x",
  },
  {
    id: "beauty",
    title: "Beauty & Personal Care",
    desc: "Cosmetics, skincare, haircare products, beauty tools, and personal care accessories.",
    items: ["Skincare Products", "Cosmetics & Makeup", "Hair Care Tools", "Beauty Devices", "Personal Care Accessories", "Organic & Natural Products"],
    imgId: "products-beauty-5y6z7a",
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="border-b bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Products We Source
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We source across a wide range of product categories. If it&apos;s
              manufactured in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[prod-desc-${cat.id}] [prod-title-${cat.id}] [products-page-heading]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2
                    id={`prod-title-${cat.id}`}
                    className="text-lg font-semibold"
                  >
                    {cat.title}
                  </h2>
                  <p
                    id={`prod-desc-${cat.id}`}
                    className="mt-1 text-sm text-muted-foreground"
                  >
                    {cat.desc}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {cat.items.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                    {cat.items.length > 4 && (
                      <li className="text-xs text-muted-foreground">
                        +{cat.items.length - 4} more
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <span id="products-page-heading" className="hidden">
            Products We Source
          </span>
        </div>
      </section>

      <section className="border-t bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Don&apos;t See Your Product Category?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            We source virtually any product manufactured in China. Contact us
            and we&apos;ll find the right supplier for you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-primary shadow-sm transition-colors hover:bg-white/90"
          >
            Submit Your Inquiry
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}