import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/content";
import SectionHeader from "@/components/sections/SectionHeader";

const ICONS = {
  "Consumer Goods": "🛍",
  "Apparel & Textiles": "🧵",
  "Industrial & Hardware": "⚙",
  "Electronics & Components": "💡",
  "Furniture & Home Décor": "🛋",
  "Packaging & Materials": "📦",
};

export default function ProductsSection() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <SectionHeader
            eyebrow="Products We Source"
            title="The categories we know best"
            subtitle="We focus on the product groups our team has direct factory relationships and on-the-ground experience in."
          />
          <Link to="/products" className="btn-ghost self-start md:self-end shrink-0">
            All categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((p) => (
            <article
              key={p.category}
              className="card p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-md bg-primary-light text-primary text-lg flex items-center justify-center font-bold">
                  {ICONS[p.category] || "•"}
                </span>
                <h3 className="text-base font-semibold text-ink">{p.category}</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-ink-soft">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
