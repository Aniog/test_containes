import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { productCategories } from "@/data/siteData";
import { useImageLoader } from "@/hooks/useImageLoader";

export function ProductsSection() {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white" id="products">
      <Container>
        <SectionHeading
          label="Products We Source"
          title="Wide range of product categories"
          description="We source across major manufacturing categories in China, with focused expertise in electronics, machinery, apparel, home goods, packaging, and consumer products."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="group rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  data-strk-img-id={`product-img-${category.id}`}
                  data-strk-img={`[product-title-${category.id}] [product-desc-${category.id}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  id={`product-title-${category.id}`}
                  className="text-lg font-bold text-slate-900 mb-2"
                >
                  {category.title}
                </h3>
                <p
                  id={`product-desc-${category.id}`}
                  className="text-sm text-slate-600 mb-4"
                >
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.examples.slice(0, 2).map((example) => (
                    <span
                      key={example}
                      className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="outline">
              Explore Product Categories <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
