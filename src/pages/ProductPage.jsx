import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, ChevronRight } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-[hsl(var(--border))]/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-xs tracking-[0.1em] uppercase text-[hsl(var(--foreground))]"
      >
        {title}
        {open ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="font-sans text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addItem, cart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="font-sans text-sm text-[hsl(var(--muted-foreground))]">Product not found.</p>
        <Link to="/shop" className="btn-outline text-xs mt-6 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleAddToCart = () => {
    addItem(product, selectedMaterial, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-sans text-[11px] tracking-[0.1em] uppercase text-[hsl(var(--muted-foreground))] mb-8">
          <Link to="/" className="hover:text-[hsl(var(--foreground))] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[hsl(var(--foreground))] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[hsl(var(--foreground))]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-[hsl(var(--muted))] overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === i
                      ? "border-[#b68860]"
                      : "border-transparent hover:border-[hsl(var(--border))]"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h1 className="product-name text-2xl md:text-3xl text-[hsl(var(--foreground))] leading-tight">
              {product.name}
            </h1>
            <p className="font-sans text-xs uppercase tracking-[0.1em] text-[hsl(var(--muted-foreground))] mt-2">
              {product.type}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mt-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-[#b68860] text-[#b68860]"
                        : "text-[hsl(var(--border))]"
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-[hsl(var(--muted-foreground))] ml-1">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium mt-6">${product.price}</p>

            {/* Description */}
            <p className="font-sans text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-sans text-xs tracking-[0.1em] uppercase text-[hsl(var(--foreground))] mb-3">
                Material
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedMaterial("gold")}
                  className={`px-5 py-2.5 font-sans text-xs uppercase tracking-[0.08em] border transition-all duration-200 ${
                    selectedMaterial === "gold"
                      ? "border-[#b68860] bg-[#b68860] text-white"
                      : "border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--foreground))]"
                  }`}
                >
                  18K Gold
                </button>
                <button
                  onClick={() => setSelectedMaterial("silver")}
                  className={`px-5 py-2.5 font-sans text-xs uppercase tracking-[0.08em] border transition-all duration-200 ${
                    selectedMaterial === "silver"
                      ? "border-[#b68860] bg-[#b68860] text-white"
                      : "border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--foreground))]"
                  }`}
                >
                  Sterling Silver
                </button>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center border border-[hsl(var(--border))]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 hover:bg-[hsl(var(--secondary))] transition-colors"
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-sans text-sm min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 hover:bg-[hsl(var(--secondary))] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 font-sans text-sm tracking-[0.1em] uppercase transition-all duration-300 ${
                  addedToCart
                    ? "bg-[#1a1a14] text-white"
                    : "bg-[#b68860] text-white hover:bg-[#a87655]"
                }`}
              >
                {addedToCart ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-b border-[hsl(var(--border))]/40">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials &amp; Care">
                {product.materials}. Store in a dry place, avoid contact with lotions
                and perfumes. Gently clean with a soft cloth to maintain shine.
              </Accordion>
              <Accordion title="Shipping &amp; Returns">
                Free worldwide shipping on all orders. 30-day return policy for
                unworn items in original packaging. Expedited shipping available at
                checkout.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 lg:mt-28">
            <div className="mb-10">
              <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.05em]">
                You May Also Like
              </h2>
              <div className="w-12 h-[1px] bg-[#b68860] mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-[3/4] bg-[hsl(var(--muted))] overflow-hidden">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-xs mt-3 group-hover:text-[#b68860] transition-colors">
                    {rp.name}
                  </h3>
                  <p className="font-sans text-sm font-medium mt-1">${rp.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}