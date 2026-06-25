import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage";
import { Button } from "@/components/ui/Button";
import { productCategories } from "@/data/products";
import { cn } from "@/lib/utils";

export function HomeProducts() {
  const containerRef = useRef(null);
  useStrkImages(containerRef, []);

  return (
    <Section id="products-we-source" size="default" tone="default">
      <div ref={containerRef} className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Products we source"
            title="Eight core categories, hundreds of sub-lines"
            description="We work with audited manufacturers across China. If your product is not listed below, ask — we are constantly adding new lines."
          />
          <div className="flex-shrink-0">
            <Button to="/products" variant="outline" size="md">
              Browse all categories
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {productCategories.slice(0, 8).map((category) => (
            <Link
              key={category.id}
              to={`/products#${category.id}`}
              id={`home-product-${category.id}`}
              className={cn(
                "group flex flex-col h-full overflow-hidden rounded-xl border border-brand-line bg-white transition-all duration-200",
                "hover:border-brand-navy/40 hover:shadow-md hover:-translate-y-0.5"
              )}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-mist">
                <StrkImage
                  imgId={`home-product-${category.id}-img`}
                  query={`[home-product-${category.id}-title] [home-product-${category.id}-summary] ${category.image}`}
                  ratio="4x3"
                  width={800}
                  alt={category.title}
                />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3
                  id={`home-product-${category.id}-title`}
                  className="text-base font-semibold text-brand-navy"
                >
                  {category.title}
                </h3>
                <p
                  id={`home-product-${category.id}-summary`}
                  className="mt-1.5 text-sm text-brand-ink-muted line-clamp-3"
                >
                  {category.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
