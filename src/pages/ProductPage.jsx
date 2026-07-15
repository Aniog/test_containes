import React, { useState, useMemo, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Star, Minus, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-widest uppercase font-medium">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-stone-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-stone-400" />
        )}
      </button>
      {open && (
        <div className="pb-5 text-sm text-stone-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const product = useMemo(
    () => products.find((p) => p.slug === slug),
    [slug]
  );

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0]?.id ?? null
  );
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-3">Product Not Found</h1>
          <Link
            to="/shop"
            className="text-sm tracking-widest uppercase text-velmora-gold hover:underline"
          >
            Browse All Jewelry
          </Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    setAdding(true);
    addToCart(product, quantity, selectedVariant);
    setTimeout(() => setAdding(false), 800);
  };

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);
  if (related.length < 4) {
    const extras = products.filter(
      (p) => p.id !== product.id && !related.find((r) => r.id === p.id)
    );
    related.push(...extras.slice(0, 4 - related.length));
  }

  const imageIds = product.images.map((img, i) => `${img}-${i}`);

  const pageRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [slug]);

  return (
    <main ref={pageRef} className="pt-20 sm:pt-24 pb-16 bg-white">
      {/* Hidden static elements so the build scanner picks up all related product image configs */}
      <div className="hidden">
        {products.map((p) => (
          <React.Fragment key={p.id}>
            <span id={`related-title-${p.id}`}>{p.name}</span>
            <img
              data-strk-img-id={`related-${p.id}`}
              data-strk-img={`[related-title-${p.id}] gold jewelry`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={p.name}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="text-xs text-stone-400 tracking-wide mb-6 sm:mb-8">
          <Link to="/" className="hover:text-stone-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-stone-600">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-stone-600">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-3 w-16 sm:w-20 flex-shrink-0">
              {imageIds.map((imgId, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square bg-stone-100 overflow-hidden border-2 transition-colors ${
                    selectedImage === i
                      ? "border-velmora-dark"
                      : "border-transparent hover:border-stone-300"
                  }`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${i}`}
                    data-strk-img={`[product-title-${product.id}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-stone-100 overflow-hidden">
              <img
                data-strk-img-id={`product-main-${product.id}`}
                data-strk-img={`[product-title-${product.id}] [product-desc-${product.id}] gold jewelry on dark neutral background`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span id={`product-title-${product.id}`} className="sr-only">
                {product.name}
              </span>
              <span id={`product-desc-${product.id}`} className="sr-only">
                {product.description}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="lg:pt-4">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.15em] mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xl font-medium">
                ${product.price.toFixed(2)}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                <span className="text-sm text-stone-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants.length > 0 && (
              <div className="mb-6">
                <p className="text-xs tracking-widest uppercase text-stone-500 mb-3">
                  Color
                </p>
                <div className="flex gap-3">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => v.inStock && setSelectedVariant(v.id)}
                      disabled={!v.inStock}
                      className={`px-5 py-2 text-xs tracking-widest uppercase border transition-colors ${
                        selectedVariant === v.id
                          ? "border-velmora-dark bg-velmora-dark text-white"
                          : v.inStock
                          ? "border-stone-300 hover:border-stone-500"
                          : "border-stone-200 text-stone-400 cursor-not-allowed line-through"
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-stone-500 mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-stone-300 flex items-center justify-center hover:border-stone-500 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-stone-300 flex items-center justify-center hover:border-stone-500 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`w-full py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
                adding
                  ? "bg-velmora-goldDark text-white"
                  : "bg-velmora-gold text-white hover:bg-velmora-goldDark"
              }`}
            >
              {adding ? "Added to Cart" : "Add to Cart"}
            </button>

            {/* Trust */}
            <div className="flex flex-wrap gap-4 mt-5 text-xs text-stone-500">
              <span>Free shipping over $50</span>
              <span className="hidden sm:inline">|</span>
              <span>30-day returns</span>
              <span className="hidden sm:inline">|</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materialsCare}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shippingReturns}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20 sm:mt-24">
            <h2 className="font-serif text-2xl sm:text-3xl text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.slug}`} className="group">
                  <div className="aspect-[3/4] bg-stone-100 overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`[related-title-${p.id}] gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span
                      id={`related-title-${p.id}`}
                      className="sr-only"
                    >
                      {p.name}
                    </span>
                  </div>
                  <h3 className="font-serif text-sm uppercase tracking-[0.12em] mb-1">
                    {p.name}
                  </h3>
                  <span className="text-sm font-medium">
                    ${p.price.toFixed(2)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
