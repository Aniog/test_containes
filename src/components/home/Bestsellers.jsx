import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { IMG_PLACEHOLDER } from "@/lib/placeholder";

export default function Bestsellers() {
  const { addItem } = useCart();

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-champagne mb-3">
              Most Loved
            </p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-[1.1]">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-block text-[11px] uppercase tracking-[0.22em] font-medium text-ink border-b border-ink pb-0.5 hover:text-champagne hover:border-champagne transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12">
          {PRODUCTS.map((product) => (
            <article key={product.id} className="group relative">
              <Link to={`/product/${product.slug}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                  <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                    <img
                      alt={product.name}
                      data-strk-img-id={`bestseller-primary-${product.id}-9k2x`}
                      data-strk-img={`[bs-${product.id}-desc] [bs-${product.id}-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src={IMG_PLACEHOLDER}
                      className="w-full h-full object-cover bg-sand group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <img
                      alt={`${product.name} alternate view`}
                      data-strk-img-id={`bestseller-hover-${product.id}-9k2x`}
                      data-strk-img={`[bs-${product.id}-desc] [bs-${product.id}-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src={IMG_PLACEHOLDER}
                      className="w-full h-full object-cover bg-sand scale-[1.02]"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product, { quantity: 1 });
                    }}
                    className="absolute bottom-3 left-3 right-3 bg-ivory/95 text-ink py-3 text-[10px] uppercase tracking-[0.22em] font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-ink hover:text-ivory flex items-center justify-center gap-2"
                    aria-label={`Quick add ${product.name}`}
                  >
                    <Plus size={12} strokeWidth={2} />
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <h3
                    id={`bs-${product.id}-title`}
                    className="text-[11px] uppercase tracking-[0.22em] font-medium text-ink"
                  >
                    {product.name}
                  </h3>
                  <p id={`bs-${product.id}-desc`} className="sr-only">
                    {product.blurb}
                  </p>
                  <p className="mt-1.5 text-sm font-serif text-ink/90">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-block text-[11px] uppercase tracking-[0.22em] font-medium text-ink border-b border-ink pb-0.5 hover:text-champagne hover:border-champagne transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
