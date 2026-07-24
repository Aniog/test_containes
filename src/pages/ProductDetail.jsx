import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Minus,
  Plus,
  ChevronDown,
  ChevronUp,
  Truck,
  RotateCcw,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/store/cart";
import ProductCard from "@/components/products/ProductCard";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState("description");
  const [addedFeedback, setAddedFeedback] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-charcoal mb-4">
            Product Not Found
          </h2>
          <Link
            to="/shop"
            className="text-sm text-gold hover:text-gold-dark transition-colors"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  const handleAddToCart = () => {
    addItem(product, selectedVariant);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const accordions = [
    {
      key: "description",
      title: "Description",
      content: product.description,
    },
    {
      key: "materials",
      title: "Materials & Care",
      content: (
        <>
          <p className="mb-3">{product.details}</p>
          <p className="text-warm-gray italic text-sm">{product.care}</p>
        </>
      ),
    },
    {
      key: "shipping",
      title: "Shipping & Returns",
      content: product.shipping,
    },
  ];

  return (
    <main className="bg-cream min-h-screen pt-20 sm:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-warm-gray">
          <Link to="/" className="hover:text-charcoal transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-ivory relative overflow-hidden">
              <div
                data-strk-img-id={`${product.id}-detail-main`}
                data-strk-img={`${product.imageQuery} detail close up`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="absolute inset-0 bg-espresso/20"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gold/15 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold/25" />
                  </div>
                </div>
              </div>
              {product.badge && (
                <span className="absolute top-4 left-4 px-4 py-1.5 bg-charcoal text-white text-[10px] tracking-[0.15em] uppercase font-medium">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square bg-ivory cursor-pointer border-2 transition-colors ${
                    i === 0 ? "border-gold" : "border-transparent hover:border-sand"
                  }`}
                >
                  <div
                    data-strk-img-id={`${product.id}-thumb-${i}`}
                    data-strk-img={`${product.imageQuery} angle ${i + 1}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    className="w-full h-full bg-espresso/10"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="lg:py-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs text-warm-gray hover:text-charcoal transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              Back to Shop
            </Link>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.08em] uppercase text-charcoal mb-3">
              {product.name}
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-charcoal mb-4">
              ${product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(product.rating)
                        ? "fill-gold text-gold"
                        : "text-sand"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-warm-gray leading-relaxed mb-8 max-w-lg">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.15em] uppercase font-medium text-charcoal mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-[0.1em] uppercase font-medium border transition-all ${
                      selectedVariant === variant
                        ? "border-charcoal bg-charcoal text-white"
                        : "border-sand text-charcoal hover:border-charcoal"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.15em] uppercase font-medium text-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-sand">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-warm-gray hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-warm-gray hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart button */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
                addedFeedback
                  ? "bg-green-700 text-white"
                  : "bg-charcoal text-white hover:bg-espresso shadow-lg shadow-charcoal/20"
              }`}
            >
              {addedFeedback ? "Added to Cart!" : "Add to Cart"}
            </button>

            {/* Trust signals */}
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-sand/50">
              <div className="flex items-center gap-2 text-xs text-warm-gray">
                <Truck size={14} className="text-gold" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2 text-xs text-warm-gray">
                <RotateCcw size={14} className="text-gold" />
                30-Day Returns
              </div>
              <div className="flex items-center gap-2 text-xs text-warm-gray">
                <Shield size={14} className="text-gold" />
                Hypoallergenic
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-sand pt-8">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-sand/50">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-xs tracking-[0.15em] uppercase font-medium text-charcoal">
                      {acc.title}
                    </span>
                    {activeAccordion === acc.key ? (
                      <ChevronUp size={16} className="text-warm-gray" />
                    ) : (
                      <ChevronDown size={16} className="text-warm-gray" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === acc.key
                        ? "max-h-96 pb-5"
                        : "max-h-0"
                    }`}
                  >
                    <div className="text-sm text-warm-gray leading-relaxed">
                      {acc.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20 sm:mt-28">
          <div className="text-center mb-12">
            <p className="text-xs tracking-mega-wide uppercase text-gold mb-3 font-sans font-medium">
              Complete the Look
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal">
              You May Also Like
            </h2>
            <div className="w-16 h-[1px] bg-gold/40 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
