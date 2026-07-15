import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronDown, Minus, Plus, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/StarRating";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-2">Product Not Found</h2>
          <Link
            to="/shop"
            className="text-sm text-warmgray hover:text-gold underline"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  if (related.length < 4) {
    const extras = products
      .filter((p) => p.id !== product.id && !related.find((r) => r.id === p.id))
      .slice(0, 4 - related.length);
    related.push(...extras);
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
  };

  const imageUrls = product.images.map(
    (img, i) =>
      `https://placehold.co/800x1000/2C2420/C9A227?text=${encodeURIComponent(
        product.name + " " + (i + 1)
      )}`
  );

  return (
    <div className="bg-cream">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6">
        <div className="flex items-center gap-2 text-[11px] text-warmgray font-sans uppercase tracking-widest">
          <Link to="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <div className="flex gap-4">
            <div className="hidden sm:flex flex-col gap-3 w-20 flex-shrink-0">
              {imageUrls.map((url, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-[3/4] overflow-hidden border transition-colors ${
                    selectedImage === i
                      ? "border-charcoal"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={url}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-stonebg overflow-hidden">
              <img
                src={imageUrls[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center lg:py-8">
            {product.badge && (
              <span className="inline-block self-start bg-stonebg text-warmgray text-[10px] font-sans font-medium uppercase tracking-widest px-2.5 py-1 mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="font-serif text-3xl lg:text-4xl uppercase tracking-widest text-charcoal mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-5">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-warmgray font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="font-sans text-xl font-medium text-charcoal mb-6">
              ${product.price}
            </p>
            <p className="font-sans text-sm text-warmgray leading-[1.8] mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="font-sans text-[11px] uppercase tracking-widest text-warmgray mb-3">
                Metal Tone
              </p>
              <div className="flex gap-3">
                {["gold", "silver"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 font-sans text-xs uppercase tracking-widest border transition-all duration-300 ${
                      variant === v
                        ? "border-charcoal bg-charcoal text-cream"
                        : "border-divider text-charcoal hover:border-charcoal"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-[11px] uppercase tracking-widest text-warmgray mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-divider">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-stonebg transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="px-5 font-sans text-sm font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-stonebg transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-charcoal text-cream font-sans text-xs uppercase tracking-widest py-4 hover:bg-gold transition-colors duration-300 mb-4"
            >
              Add to Cart — ${product.price * quantity}
            </button>
            <p className="text-center text-[11px] text-warmgray">
              Free shipping on all orders over $75
            </p>
          </div>
        </div>
      </div>

      {/* Accordions */}
      <div className="border-t border-divider">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {[
            {
              key: "description",
              title: "Description",
              content: product.description,
            },
            {
              key: "materials",
              title: "Materials & Care",
              content: `${product.materials}\n\nCare: ${product.care}`,
            },
            {
              key: "shipping",
              title: "Shipping & Returns",
              content:
                "We offer free worldwide shipping on all orders over $75. Standard delivery takes 5–10 business days. Express shipping available at checkout.\n\nNot completely in love? Return or exchange any item within 30 days of delivery for a full refund. Items must be unworn and in original packaging.",
            },
          ].map((section) => (
            <div
              key={section.key}
              className="border-b border-divider"
            >
              <button
                onClick={() =>
                  setOpenAccordion(
                    openAccordion === section.key ? null : section.key
                  )
                }
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-sans text-xs uppercase tracking-widest text-charcoal">
                  {section.title}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-warmgray transition-transform duration-300 ${
                    openAccordion === section.key ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openAccordion === section.key && (
                <div className="pb-6 animate-fade-in-up">
                  <p className="font-sans text-sm text-warmgray leading-[1.8] whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-serif text-2xl lg:text-3xl text-charcoal">
                You May Also Like
              </h2>
              <Link
                to="/shop"
                className="hidden sm:flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-widest text-warmgray hover:text-gold transition-colors"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
