import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { getProductById, getRelatedProducts, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 4);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || { id: "gold", label: "Gold", value: "gold" }
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F5F0]">
        <Navbar />
        <div className="pt-20 px-6 py-20 text-center">
          <p className="text-xl mb-4">Product not found</p>
          <Link to="/shop" className="text-[#B89778] underline">Return to shop</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const images = product.images || [];

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <Navbar />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div>
              <div className="aspect-square bg-[#E5DFD6] overflow-hidden mb-4">
                <img
                  src={images[selectedImageIndex] || images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-20 h-20 bg-[#E5DFD6] overflow-hidden border-2 transition-all ${
                        selectedImageIndex === idx ? "border-[#2C2522]" : "border-transparent"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="lg:pt-2">
              <h1 className="product-name font-serif text-3xl tracking-[1.5px] mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-medium mb-4">{formatPrice(product.price)}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-[#B89778]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm text-[#9A8F82]">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="text-[#6B6259] leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Variant Selector */}
              <div className="mb-6">
                <p className="text-xs tracking-[2px] mb-3 text-[#B89778]">TONE</p>
                <div className="flex gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`variant-pill ${selectedVariant.id === variant.id ? "active" : ""}`}
                    >
                      {variant.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-xs tracking-[2px] mb-3 text-[#B89778]">QUANTITY</p>
                <div className="flex items-center border border-[#E5DFD6] w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-11 flex items-center justify-center hover:bg-[#F5F2ED]"
                  >
                    −
                  </button>
                  <span className="w-11 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 flex items-center justify-center hover:bg-[#F5F2ED]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button onClick={handleAddToCart} size="lg" className="w-full mb-4">
                ADD TO CART
              </Button>
              <p className="text-center text-xs text-[#9A8F82] tracking-[1px]">
                Ships in 1–2 business days
              </p>

              {/* Accordions */}
              <div className="mt-10 border-t border-[#E5DFD6]">
                {/* Description */}
                <div>
                  <button
                    onClick={() => toggleAccordion("description")}
                    className="accordion-trigger"
                  >
                    <span>DESCRIPTION</span>
                    <span className="text-xl leading-none">{openAccordion === "description" ? "−" : "+"}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#6B6259] leading-relaxed ${openAccordion === "description" ? "open" : ""}`}>
                    {product.description}
                  </div>
                </div>

                {/* Materials & Care */}
                <div>
                  <button
                    onClick={() => toggleAccordion("materials")}
                    className="accordion-trigger"
                  >
                    <span>MATERIALS & CARE</span>
                    <span className="text-xl leading-none">{openAccordion === "materials" ? "−" : "+"}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#6B6259] leading-relaxed ${openAccordion === "materials" ? "open" : ""}`}>
                    <p className="mb-2">Material: {product.material}</p>
                    <p>To preserve the finish, avoid contact with perfumes, lotions, and harsh chemicals. Store in a dry place. Clean gently with a soft cloth.</p>
                  </div>
                </div>

                {/* Shipping & Returns */}
                <div>
                  <button
                    onClick={() => toggleAccordion("shipping")}
                    className="accordion-trigger"
                  >
                    <span>SHIPPING & RETURNS</span>
                    <span className="text-xl leading-none">{openAccordion === "shipping" ? "−" : "+"}</span>
                  </button>
                  <div className={`accordion-content text-sm text-[#6B6259] leading-relaxed ${openAccordion === "shipping" ? "open" : ""}`}>
                    <p className="mb-2">Free worldwide shipping on orders over $75. All orders ship within 1–2 business days.</p>
                    <p>30-day returns. Items must be unworn and in original packaging.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* You May Also Like */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-[#E5DFD6]">
              <h3 className="font-serif text-2xl tracking-[1px] mb-8">You may also like</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((related) => (
                  <Link key={related.id} to={`/product/${related.id}`} className="group block">
                    <div className="aspect-[4/3.5] bg-[#E5DFD6] overflow-hidden mb-4">
                      <img
                        src={related.images[0]}
                        alt={related.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="product-name text-sm tracking-[1px] mb-1">{related.name}</h4>
                    <p className="text-sm">{formatPrice(related.price)}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default ProductDetail;
