import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, Cpu, Shirt, Sofa, Bike, Plug, Wrench, FlaskConical, Package } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader";

const CATEGORIES = [
  {
    icon: Cpu,
    title: "Electronics & Accessories",
    titleId: "prod-electronics-title",
    desc: "Consumer electronics, mobile accessories, smart home and PC peripherals.",
    descId: "prod-electronics-desc",
    image:
      "[prod-electronics-desc] [prod-electronics-title] [home-products-eyebrow] [home-products-title]",
    imageId: "home-prod-electronics-9a1b2c",
  },
  {
    icon: Shirt,
    title: "Apparel & Textiles",
    titleId: "prod-apparel-title",
    desc: "Garments, fabrics, workwear and fashion accessories with social audit support.",
    descId: "prod-apparel-desc",
    image:
      "[prod-apparel-desc] [prod-apparel-title] [home-products-eyebrow] [home-products-title]",
    imageId: "home-prod-apparel-b2c3d4",
  },
  {
    icon: Sofa,
    title: "Home & Furniture",
    titleId: "prod-home-title",
    desc: "Indoor and outdoor furniture, kitchenware, decor and storage products.",
    descId: "prod-home-desc",
    image:
      "[prod-home-desc] [prod-home-title] [home-products-eyebrow] [home-products-title]",
    imageId: "home-prod-home-c3d4e5",
  },
  {
    icon: Bike,
    title: "Sports & Outdoor",
    titleId: "prod-sports-title",
    desc: "Fitness gear, cycling, camping and water-sports equipment for retail and Amazon.",
    descId: "prod-sports-desc",
    image:
      "[prod-sports-desc] [prod-sports-title] [home-products-eyebrow] [home-products-title]",
    imageId: "home-prod-sports-d4e5f6",
  },
  {
    icon: Plug,
    title: "Electrical & Lighting",
    titleId: "prod-electrical-title",
    desc: "LED lighting, power tools, batteries and electrical components with CE/UL support.",
    descId: "prod-electrical-desc",
    image:
      "[prod-electrical-desc] [prod-electrical-title] [home-products-eyebrow] [home-products-title]",
    imageId: "home-prod-electrical-e5f6a7",
  },
  {
    icon: Wrench,
    title: "Hardware & Industrial",
    titleId: "prod-hardware-title",
    desc: "Machined parts, castings, fasteners, sheet metal and OEM industrial components.",
    descId: "prod-hardware-desc",
    image:
      "[prod-hardware-desc] [prod-hardware-title] [home-products-eyebrow] [home-products-title]",
    imageId: "home-prod-hardware-f6a7b8",
  },
  {
    icon: FlaskConical,
    title: "Beauty & Personal Care",
    titleId: "prod-beauty-title",
    desc: "Skincare, cosmetics, hair care and OEM/ODM with FDA, CPNP and CPNP support.",
    descId: "prod-beauty-desc",
    image:
      "[prod-beauty-desc] [prod-beauty-title] [home-products-eyebrow] [home-products-title]",
    imageId: "home-prod-beauty-a7b8c9",
  },
  {
    icon: Package,
    title: "Packaging & Print",
    titleId: "prod-packaging-title",
    desc: "Custom boxes, labels, mailers, bottles and retail packaging with low-MOQ options.",
    descId: "prod-packaging-desc",
    image:
      "[prod-packaging-desc] [prod-packaging-title] [home-products-eyebrow] [home-products-title]",
    imageId: "home-prod-packaging-b8c9d1",
  },
];

export function ProductsGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="products" className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Products we source"
            title="The categories we work in every day"
            titleId="home-products-title"
            description="Our agent network covers the main manufacturing regions of China. Most of our buyers source from 2–4 of these categories at the same time."
            descriptionId="home-products-desc"
            className="max-w-2xl"
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent"
          >
            All product categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                to="/products"
                key={cat.titleId}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imageId}
                    data-strk-img={cat.image}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/90 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3
                    id={cat.titleId}
                    className="text-base font-semibold text-primary"
                  >
                    {cat.title}
                  </h3>
                  <p id={cat.descId} className="text-sm text-muted-foreground">
                    {cat.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductsGrid;
