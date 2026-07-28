import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, Package } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import strkImgConfig from "@/strk-img-config.json";

const CATEGORIES = [
  {
    title: "Consumer Electronics & Accessories",
    items: ["Bluetooth speakers", "Chargers & cables", "Smart home devices", "Phone accessories"],
  },
  {
    title: "Apparel, Bags & Textiles",
    items: ["Cotton & polyester apparel", "Tote & backpacks", "Home textiles", "Workwear & uniforms"],
  },
  {
    title: "Home, Kitchen & Garden",
    items: ["Kitchenware", "Storage & organization", "Garden tools", "Pet products"],
  },
  {
    title: "Beauty, Health & Personal Care",
    items: ["Skincare packaging", "Hair tools", "Fitness accessories", "Cosmetic tools"],
  },
  {
    title: "Industrial, Tools & Hardware",
    items: ["Hand & power tools", "Fasteners", "Lighting & electrical", "Machined parts"],
  },
  {
    title: "Packaging, Paper & Print",
    items: ["Custom boxes", "Paper bags", "Labels & stickers", "Eco packaging"],
  },
];

export default function Products() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <Section ref={ref} tone="surface" id="products">
      <div className="grid items-end gap-8 md:flex md:justify-between">
        <SectionHeader
          eyebrow="Products we source"
          title="From everyday consumer goods to specialized industrial parts"
          lead="We work across mainstream product categories and a long tail of niche SKUs. If it's made in China, we can usually source it — and verify the supplier behind it."
        />
        <Button to="/products" variant="secondary" size="md" className="hidden md:inline-flex">
          Browse all categories
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c, i) => (
          <article
            key={c.title}
            className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-primary-100">
              <img
                alt={c.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                data-strk-img-id={`product-cat-${i}-3b7e1a`}
                data-strk-img={`[product-cat-${i}-desc] [product-cat-${i}-title] [products-we-source-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-accent" />
                <h3
                  id={`product-cat-${i}-title`}
                  className="text-lg font-semibold text-primary"
                >
                  {c.title}
                </h3>
              </div>
              <p
                id={`product-cat-${i}-desc`}
                className="mt-2 text-sm leading-relaxed text-muted"
              >
                {c.items.join(" · ")}
              </p>
              <div className="mt-5">
                <Button
                  to={`/contact#inquiry-form`}
                  variant="ghost"
                  size="sm"
                  className="px-0"
                >
                  Get a quote for {c.title.split(",")[0].toLowerCase()}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <h3 id="products-we-source-title" className="sr-only">
        Products we source
      </h3>

      <div className="mt-10 md:hidden">
        <Button to="/products" variant="secondary" size="md">
          Browse all categories
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}
