import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { productCategories } from "@/data/siteData";
import { useImageLoader } from "@/hooks/useImageLoader";

export default function Products() {
  const containerRef = useImageLoader();

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-blue-400 mb-4">
              Products We Source
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Product categories we support
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We source across a wide range of manufacturing categories. If you do not see your product listed, contact us anyway—we likely have experience in your industry.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <article
                key={category.id}
                className="group rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={`products-page-img-${category.id}`}
                    data-strk-img={`[products-title-${category.id}] [products-desc-${category.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2
                    id={`products-title-${category.id}`}
                    className="text-xl font-bold text-slate-900 mb-2"
                  >
                    {category.title}
                  </h2>
                  <p
                    id={`products-desc-${category.id}`}
                    className="text-slate-600 mb-4"
                  >
                    {category.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-slate-700">Common products:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example) => (
                        <span
                          key={example}
                          className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-semibold text-blue-800 hover:text-blue-900"
                  >
                    Source this category <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-slate-50">
        <Container>
          <div className="bg-white rounded-2xl p-10 md:p-16 border border-slate-200 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Looking for a product not listed here?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our supplier network covers many more categories. Send us your product details and we will let you know how we can help.
            </p>
            <Link to="/contact">
              <Button size="lg">Request a Free Quote</Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
