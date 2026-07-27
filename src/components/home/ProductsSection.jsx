import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const categories = [
  {
    id: "electronics",
    title: "Consumer Electronics",
    desc: "Smartphones, accessories, audio devices, wearables, smart home",
    imgId: "prod-electronics-8a2b1c",
  },
  {
    id: "home-garden",
    title: "Home & Garden",
    desc: "Home decor, kitchenware, furniture, gardening tools, storage",
    imgId: "prod-homegarden-3c4d5e",
  },
  {
    id: "clothing",
    title: "Apparel & Accessories",
    desc: "Garments, bags, shoes, fashion accessories, textiles",
    imgId: "prod-apparel-6f7g8h",
  },
  {
    id: "industrial",
    title: "Industrial & Tools",
    desc: "Machinery parts, hardware, power tools, safety equipment",
    imgId: "prod-industrial-9i0j1k",
  },
  {
    id: "packaging",
    title: "Packaging & Printing",
    desc: "Custom boxes, labels, paper products, display materials",
    imgId: "prod-packaging-2l3m4n",
  },
  {
    id: "sports",
    title: "Sports & Outdoor",
    desc: "Fitness equipment, camping gear, outdoor recreation, cycling",
    imgId: "prod-sports-5o6p7q",
  },
];

export default function ProductsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="border-t bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Products We Source
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We source across a wide range of industries. If it&apos;s
            manufactured in China, we can help you source it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[prod-desc-${cat.id}] [prod-title-${cat.id}] [products-section-subtitle] [products-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3
                  id={`prod-title-${cat.id}`}
                  className="text-lg font-semibold"
                >
                  {cat.title}
                </h3>
                <p
                  id={`prod-desc-${cat.id}`}
                  className="mt-1 text-sm text-muted-foreground"
                >
                  {cat.desc}
                </p>
              </div>
              <span id="products-section-title" className="hidden">
                Products We Source
              </span>
              <span id="products-section-subtitle" className="hidden">
                We source across a wide range of industries
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            View All Product Categories
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}