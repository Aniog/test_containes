import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, ChevronDown } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/StarRating";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0]?.id || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-32 text-center md:px-8">
        <h1 className="font-serif text-2xl text-velmora-dark">
          Product not found
        </h1>
        <Link
          to="/shop"
          className="mt-4 inline-block font-sans text-sm text-velmora-gold underline underline-offset-4"
        >
          Browse all jewelry
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);
  const variant = product.variants.find((v) => v.id === selectedVariant);

  const images = Array.from({ length: product.images }).map((_, i) =>
    `https://placehold.co/800x1000/${variant?.tone === "silver" ? "e5e7eb/9ca3af" : "d4a96a/2a2420"}?text=${encodeURIComponent(product.name)}+${i + 1}`
  );

  const accordions = [
    {
      key: "desc",
      title: "Description",
      content: product.description,
    },
    {
      key: "materials",
      title: "Materials & Care",
      content: `${product.materials} ${product.care}`,
    },
    {
      key: "shipping",
      title: "Shipping & Returns",
      content: product.shipping,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-velmora-muted">
        <Link to="/" className="hover:text-velmora-dark">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-velmora-dark">Shop</Link>
        <span>/</span>
        <span className="text-velmora-dark">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-3 md:flex-row md:gap-4">
          <div className="flex flex-row gap-2 overflow-x-auto md:flex-col md:overflow-visible">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setMainImage(i)}
                className={`h-16 w-16 flex-shrink-0 overflow-hidden border transition-colors md:h-20 md:w-20 ${
                  mainImage === i
                    ? "border-velmora-dark"
                    : "border-transparent hover:border-velmora-hairline"
                }`}
              >
                <img
                  src={src}
                  alt={`${product.name} view ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-hidden bg-velmora-warm-gray">
            <img
              src={images[mainImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h1 className="font-serif text-2xl font-medium uppercase tracking-widest text-velmora-dark md:text-3xl">
            {product.name}
          </h1>
          <div className="mt-2 flex items-center gap-3">
            <StarRating rating={product.rating} />
            <span className="font-sans text-xs text-velmora-muted">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          <p className="mt-4 font-sans text-xl font-medium text-velmora-dark">
            ${product.price}
          </p>
          <p className="mt-5 font-sans text-sm leading-relaxed text-velmora-muted">
            {product.shortDesc}
          </p>

          {/* Variant selector */}
          <div className="mt-6">
            <span className="font-sans text-[11px] font-medium uppercase tracking-widest text-velmora-muted">
              Tone
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v.id)}
                  className={`rounded-full border px-5 py-2 font-sans text-xs font-medium uppercase tracking-widest transition-all ${
                    selectedVariant === v.id
                      ? "border-velmora-dark bg-velmora-dark text-white"
                      : "border-velmora-hairline text-velmora-dark hover:border-velmora-muted"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <span className="font-sans text-[11px] font-medium uppercase tracking-widest text-velmora-muted">
              Quantity
            </span>
            <div className="mt-2 inline-flex items-center gap-3 border border-velmora-hairline">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-10 w-10 items-center justify-center text-velmora-muted transition-colors hover:text-velmora-dark"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center font-sans text-sm font-medium text-velmora-dark">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-10 w-10 items-center justify-center text-velmora-muted transition-colors hover:text-velmora-dark"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={() => addToCart(product, selectedVariant, quantity)}
            className="mt-8 w-full bg-velmora-dark py-4 font-sans text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-velmora-gold"
          >
            Add to Cart — ${product.price * quantity}
          </button>

          {/* Accordions */}
          <div className="mt-10 flex flex-col border-t border-velmora-hairline">
            {accordions.map((acc) => (
              <div
                key={acc.key}
                className="border-b border-velmora-hairline"
              >
                <button
                  onClick={() =>
                    setOpenAccordion(openAccordion === acc.key ? null : acc.key)
                  }
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="font-sans text-xs font-medium uppercase tracking-widest text-velmora-dark">
                    {acc.title}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-velmora-muted transition-transform duration-300 ${
                      openAccordion === acc.key ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === acc.key ? "max-h-96 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="font-sans text-sm leading-relaxed text-velmora-muted">
                    {acc.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-20 border-t border-velmora-hairline pt-14 md:mt-28 md:pt-20">
          <h2 className="font-serif text-xl font-medium text-velmora-dark md:text-2xl">
            You May Also Like
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} showAdd={false} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
