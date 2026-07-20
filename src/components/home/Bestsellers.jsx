import React from "react";
import { products } from "../../data/products";
import ProductCard from "../ProductCard";

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="section-title">Bestsellers</h2>
        <p className="section-subtitle">
          Our most-loved pieces, chosen by women like you
        </p>

        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}