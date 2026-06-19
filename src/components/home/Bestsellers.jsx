import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { useCart, useUI } from "@/context/CartContext";

export default function Bestsellers() {
  const items = PRODUCTS.filter((p) => p.bestseller).slice(0, 5);
  const { add } = useCart();
  const { showToast } = useUI();

  const handleQuickAdd = (product) => {
    add(product, { tone: product.tone, qty: 1 });
    showToast(`${product.name} added to your bag`);
  };

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <p className="vm-eyebrow text-ink-muted">Bestsellers</p>
              <h2
                id="home-bestsellers-title"
                className="vm-display text-ink mt-3 text-4xl md:text-6xl leading-[1.05]"
              >
                Loved, layered, lived in.
              </h2>
              <p className="mt-5 max-w-md text-ink-muted text-sm md:text-base">
                Our five most-worn pieces — each one editorial-ready on its own, quietly complete together.
              </p>
            </div>
            <Link to="/shop" className="vm-link">
              Shop all
              <ArrowUpRight className="inline-block w-3.5 h-3.5 ml-1.5 -mt-0.5" strokeWidth={1.6} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-7 gap-y-12 md:gap-y-14">
            {items.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                eager
                onQuickAdd={handleQuickAdd}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
