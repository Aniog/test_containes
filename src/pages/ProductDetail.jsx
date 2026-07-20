import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-velmora-pewter">Product not found</p>
          <Link to="/shop" className="btn-outline mt-4 inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const accordionItems = [
    {
      id: "description",
      title: "Description",
      content: product.description,
    },
    {
      id: "materials",
      title: "Materials & Care",
      content: (
        <div className="space-y-3">
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-ebony font-sans mb-1">Materials</h4>
            <p className="text-sm text-velmora-pewter font-sans">{product.materials}</p>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase text-velmora-ebony font-sans mb-1">Care Instructions</h4>
            <p className="text-sm text-velmora-pewter font-sans">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content: (
        <div className="space-y-2 text-sm text-velmora-pewter font-sans">
          <p>Free worldwide shipping on all orders over $50.</p>
          <p>Orders are processed within 1-2 business days and typically arrive within 5-10 business days.</p>
          <p>30-day return window for unworn items in original packaging. We cover return shipping on exchanges.</p>
        </div>
      ),
    },
  ];

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
  };

  return (
    <div className="pt-0 md:pt-0">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs text-velmora-stone hover:text-velmora-ebony transition-colors uppercase tracking-wider font-sans"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-velmora-cream overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-20 bg-velmora-cream overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-velmora-gold"
                        : "border-transparent hover:border-velmora-sand/30"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-velmora-ebony">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-velmora-gold text-velmora-gold"
                        : "text-velmora-sand"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-stone font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-velmora-ebony mt-4">
              ${product.price}
            </p>

            {/* Short description */}
            <p className="text-sm text-velmora-pewter mt-4 leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <h3 className="text-xs tracking-widest uppercase text-velmora-ebony font-sans mb-3">
                Finish: <span className="text-velmora-gold">{selectedVariant}</span>
              </h3>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs tracking-wide uppercase font-sans border transition-all duration-300 ${
                      selectedVariant === variant
                        ? "border-velmora-ebony bg-velmora-ebony text-white"
                        : "border-velmora-sand/30 text-velmora-pewter hover:border-velmora-ebony/50"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4 mt-8">
              <div className="flex items-center border border-velmora-sand/30">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 hover:bg-velmora-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm font-medium min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 hover:bg-velmora-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-accent inline-flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 divide-y divide-velmora-sand/20">
              {accordionItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === item.id ? null : item.id
                      )
                    }
                    className="flex items-center justify-between w-full py-4 text-left"
                  >
                    <span className="text-xs tracking-widest uppercase text-velmora-ebony font-sans">
                      {item.title}
                    </span>
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4 text-velmora-stone" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-stone" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id
                        ? "max-h-96 pb-4"
                        : "max-h-0"
                    }`}
                  >
                    <div className="text-sm text-velmora-pewter font-sans leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24 pt-16 md:pt-24 hairline">
            <h2 className="section-title">You May Also Like</h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}