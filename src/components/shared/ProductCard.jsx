import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group product-card flex flex-col h-full overflow-hidden"
    >
      <div className="relative aspect-[4/3] bg-steel-100 overflow-hidden">
        <img
          alt={product.name}
          data-strk-img-id={product.primaryId}
          data-strk-img={`[${product.descId}] [${product.titleId}] ARTITECT MACHINERY product`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 inline-flex items-center bg-paper/95 backdrop-blur-sm px-3 py-1 font-mono text-[10px] tracking-wider2 uppercase text-ink-900">
          {product.specs.model}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6 md:p-8">
        <span className="label-eyebrow text-accent-600">
          {product.category}
        </span>
        <h3
          id={product.titleId}
          className="mt-3 font-display font-bold text-2xl md:text-3xl text-ink-900 leading-tight"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="mt-4 text-ink-500 text-sm md:text-base leading-relaxed line-clamp-3"
        >
          {product.description}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-steel-200">
          <div>
            <div className="font-mono text-[10px] tracking-wider2 uppercase text-steel-500">
              Length
            </div>
            <div className="mt-1 font-display font-semibold text-ink-900">
              {product.specs.length}
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-wider2 uppercase text-steel-500">
              Capacity
            </div>
            <div className="mt-1 font-display font-semibold text-ink-900">
              {product.specs.capacity}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-wider2 font-semibold text-ink-900">
          View specifications
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
