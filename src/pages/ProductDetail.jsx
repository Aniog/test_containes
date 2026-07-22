import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import AccordionItem from "@/components/ui/Accordion";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants.find((v) => v.available) || product?.variants[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#6B6359] mb-4">Product not found.</p>
          <Link to="/shop" className="text-[#C5A46E] tracking-[1.5px] text-sm">
            ← BACK TO SHOP
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart(product, selectedVariant, quantity);
    }
  };

  const availableVariants = product.variants.filter((v) => v.available);
  const allVariants = product.variants;

  return (
    <div className="pt-20 bg-[#F9F6F1]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center text-sm tracking-[1.5px] text-[#6B6359] hover:text-[#2C2823] mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> BACK TO SHOP
        </Link>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {/* LEFT: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="aspect-[4/3] mb-3 overflow-hidden" style={{ background: "linear-gradient(135deg, #EDE8DF 0%, #D4C9B8 100%)" }}>
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Elegant gold jewelry visual placeholder - no visible text */}
                <div className="relative w-28 h-28">
                  <div className="absolute inset-0 rounded-full border-[8px] border-[#C5A46E] opacity-50" />
                  <div className="absolute inset-[10px] rounded-full border-[4px] border-[#A68B5B] opacity-30" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#C5A46E] opacity-60" />
                  {/* Subtle crystal accent */}
                  <div className="absolute top-3 right-4 w-2 h-2 rotate-45 bg-white opacity-40" />
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`gallery-thumb w-20 h-16 bg-[#EDE8DF] overflow-hidden ${
                    selectedImageIndex === idx ? "active" : ""
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full border border-[#C5A46E] opacity-30" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="pt-1">
            <h1 className="product-name text-3xl md:text-4xl tracking-[3px] text-[#2C2823] leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mt-3 mb-2">
              <span className="text-2xl text-[#2C2823]">{formatPrice(product.price)}</span>
              <div className="flex items-center gap-1.5 text-sm">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="star w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[#6B6359]">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="text-[#6B6359] leading-relaxed mt-4 mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <div className="filter-label mb-3">TONE</div>
              <div className="flex flex-wrap gap-3">
                {allVariants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => variant.available && setSelectedVariant(variant)}
                    disabled={!variant.available}
                    className={`variant-pill ${selectedVariant?.id === variant.id ? "active" : ""}`}
                  >
                    {variant.label}
                    {!variant.available && " (SOLD OUT)"}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <div className="filter-label mb-3">QUANTITY</div>
              <div className="flex items-center border border-[#E5E0D8] w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 hover:bg-[#F5F2ED] transition-colors"
                >
                  −
                </button>
                <span className="px-6 py-2.5 text-sm tabular-nums border-x border-[#E5E0D8]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 hover:bg-[#F5F2ED] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              onClick={handleAddToCart}
              className="w-full mb-4"
              size="lg"
              disabled={!selectedVariant?.available}
            >
              {selectedVariant?.available ? "ADD TO CART" : "SOLD OUT"}
            </Button>

            <p className="text-center text-xs text-[#9A8F7E] tracking-widest">
              FREE SHIPPING • 30-DAY RETURNS
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <AccordionItem title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>18K gold-plated brass (hypoallergenic)</li>
                  <li>Hand-selected crystals</li>
                  <li>Avoid contact with water, perfume, and lotions</li>
                  <li>Store in the provided pouch when not wearing</li>
                  <li>Clean gently with a soft, dry cloth</li>
                </ul>
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                <p className="mb-3">
                  Free worldwide shipping on all orders. Delivery in 5–10 business days.
                </p>
                <p>
                  30-day returns for unworn items in original packaging. Contact us to initiate a return.
                </p>
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-[#E5E0D8]">
            <h3 className="font-serif text-2xl tracking-[1px] mb-8">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
