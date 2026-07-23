import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ChevronDown, ChevronRight } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/StarRating";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || "gold"
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImage(0);
      setOpenAccordion(null);
      setAdded(false);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-espresso mb-4">
            Product Not Found
          </h1>
          <Link
            to="/shop"
            className="text-sm uppercase tracking-widest text-gold hover:text-bronze transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordions = [
    {
      key: "desc",
      title: "Description",
      content: product.description,
    },
    {
      key: "materials",
      title: "Materials & Care",
      content: product.materialsCare,
    },
    {
      key: "shipping",
      title: "Shipping & Returns",
      content: product.shippingReturns,
    },
  ];

  const images = [
    `https://placehold.co/800x1000/F3EDE4/2C2416?text=${encodeURIComponent(product.name)}`,
    `https://placehold.co/800x1000/C5B9A8/2C2416?text=${encodeURIComponent(product.name + " Alt")}`,
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-bronze">
          <Link to="/" className="hover:text-espresso transition-colors">
            Home
          </Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-espresso transition-colors">
            Shop
          </Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-espresso capitalize">{product.category}</span>
        </div>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[4/5] bg-cream mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={images[activeImage]}
                  alt={product.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    activeImage === i
                      ? "border-gold"
                      : "border-transparent hover:border-taupe/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:pt-8"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-espresso mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating} size={14} />
              <span className="text-sm text-bronze">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="font-serif text-2xl text-espresso mb-6">
              ${product.price}
            </p>
            <p className="text-bronze leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-bronze mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-sm capitalize border transition-colors ${
                      selectedVariant === variant
                        ? "border-espresso bg-espresso text-ivory"
                        : "border-taupe/40 text-espresso hover:border-espresso"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-bronze mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-taupe/30 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
                added
                  ? "bg-espresso text-gold"
                  : "bg-gold text-espresso hover:bg-gold-light"
              }`}
            >
              {added ? "Added to Bag" : "Add to Cart"}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-taupe/20">
              {accordions.map((acc) => (
                <div
                  key={acc.key}
                  className="border-b border-taupe/20"
                >
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === acc.key ? null : acc.key
                      )
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-medium uppercase tracking-widest text-espresso">
                      {acc.title}
                    </span>
                    <ChevronDown
                      size={16}
                      strokeWidth={1.5}
                      className={`text-bronze transition-transform duration-300 ${
                        openAccordion === acc.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openAccordion === acc.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 text-sm text-bronze leading-relaxed">
                          {acc.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3">
                Complete the Look
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-espresso">
                You May Also Like
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
