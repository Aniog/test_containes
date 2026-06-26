import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { PRODUCTS } from "@/data/site";

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E";

const Products = () => {
  return (
    <>
      <section className="bg-paper-soft border-b border-line">
        <div className="container-x py-14 md:py-20 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-ink-600 mb-3">
            Products We Source
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 leading-tight max-w-3xl mx-auto">
            Six product categories we cover most often
          </h1>
          <p className="mt-5 text-lg text-ink-700 leading-relaxed max-w-2xl mx-auto">
            If it is manufactured at scale in China, we can source it. Below
            are the categories where we have the deepest factory network and
            the most experience.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((group) => (
              <article
                key={group.category}
                className="border border-line rounded-lg overflow-hidden bg-white hover:border-ink-700 transition-colors"
              >
                <div className="aspect-[16/9] bg-paper-muted">
                  <img
                    alt={group.category}
                    data-strk-img-id={`products-card-${group.category.toLowerCase().replace(/\s|&/g, "-")}-7a3b1d`}
                    data-strk-img={`[${group.category.replace(/\s|&/g, "-").toLowerCase()}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src={placeholder}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2
                    id={`${group.category.replace(/\s|&/g, "-").toLowerCase()}-title`}
                    className="text-lg font-bold text-ink-900"
                  >
                    {group.category}
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-ink-700"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900 text-white">
        <div className="container-x py-14 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Don't see your category listed?
            </h2>
            <p className="mt-3 text-ink-100/85 leading-relaxed max-w-2xl">
              We work with many more product types than we can show here. Send
              us a short description and we will tell you honestly whether we
              can help and how long it will take.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Button as={Link} to="/contact#quote" size="lg">
              Ask About Your Product <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;