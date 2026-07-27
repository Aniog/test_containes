import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "../ui/Primitives.jsx";
import { productCategories } from "../../data/site.js";
import { productIconMap } from "../../data/icons.js";

export default function ProductsOverview() {
  return (
    <Section className="surface-steel" id="products">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <SectionHeader
          kicker="Products we source"
          title="Across 8+ product categories, with the right factory for each"
          subtitle="Each category has a dedicated category lead in our team, with vetted factories in the relevant manufacturing cluster."
        />
        <Link
          to="/products"
          className="btn-ghost md:self-start md:mt-2 text-sm font-semibold"
        >
          All categories
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {productCategories.map((c) => {
          const Icon = productIconMap[c.slug] || productIconMap.packaging;
          return (
            <article
              key={c.slug}
              className="card card-hover flex flex-col h-full"
            >
              <div className="w-11 h-11 rounded-md bg-navy/5 text-navy flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-navy font-semibold leading-snug">{c.title}</h3>
              <p className="mt-2 text-sm text-ink/75 leading-relaxed">{c.description}</p>
              <ul className="mt-3 space-y-1 text-xs text-muted">
                {c.items.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
