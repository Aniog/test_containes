import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown, Check } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem, toggleDrawer } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [tone, setTone] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState("description");

  if (!product) {
    return (
      <div className="section-container py-24 text-center">
        <p className="text-ink-secondary">Product not found.</p>
        <Link to="/shop" className="btn-primary mt-6">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => product.relatedIds?.includes(p.id));

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, tone);
    }
    toggleDrawer();
  };

  const sections = [
    { key: "description", label: "Description", content: product.description },
    { key: "materials", label: "Materials & Care", content: product.care },
    { key: "shipping", label: "Shipping & Returns", content: product.shipping },
  ];

  return (
    <div className="section-container py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
        <Link to="/" className="hover:text-ink">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-2xl bg-background">
            <img src={product.images[selectedImage]} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex gap-3">
            {product.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-xl border-2 transition-colors ${
                  selectedImage === idx ? "border-ink" : "border-transparent"
                }`}
              >
                <img src={image} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-2 font-serif text-3xl md:text-4xl text-ink uppercase tracking-wide">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex text-accent">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className={`h-4 w-4 ${idx < Math.round(product.rating) ? "fill-current" : "text-border"}`} />
              ))}
            </div>
            <span className="text-xs text-ink-muted">{product.rating} · {product.reviewCount} reviews</span>
          </div>
          <p className="mt-4 text-2xl font-medium text-ink">${product.price}</p>
          <p className="mt-4 text-sm text-ink-secondary leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Tone</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["gold", "silver"].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm capitalize transition-colors ${
                    tone === t ? "border-ink bg-ink text-white" : "border-border text-ink hover:border-ink"
                  }`}
                >
                  {tone === t && <Check className="h-4 w-4" />}
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">Quantity</p>
            <div className="mt-2 inline-flex items-center gap-3 rounded-full border border-border">
              <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="p-3 text-ink-secondary hover:text-ink" aria-label="Decrease">
                -
              </button>
              <span className="text-sm font-medium w-4 text-center">{quantity}</span>
              <button type="button" onClick={() => setQuantity((q) => q + 1)} className="p-3 text-ink-secondary hover:text-ink" aria-label="Increase">
                +
              </button>
            </div>
          </div>

          <button type="button" onClick={handleAdd} className="btn-primary mt-8 w-full">
            Add to Cart
          </button>

          <div className="hairline mt-8 mb-4" />
          <div className="space-y-3">
            {sections.map((section) => (
              <div key={section.key} className="border-b border-border last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenSection((prev) => (prev === section.key ? "" : section.key))}
                  className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-ink"
                >
                  {section.label}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSection === section.key ? "rotate-180" : ""}`} />
                </button>
                {openSection === section.key && (
                  <p className="pb-4 text-sm text-ink-secondary leading-relaxed">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-ink">You may also like</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="product-card">
                <div className="aspect-[3/4] overflow-hidden bg-background">
                  <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-3 md:p-4">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">{item.category}</p>
                  <h3 className="mt-1 font-serif text-base md:text-lg text-ink">{item.name}</h3>
                  <p className="mt-1 text-sm font-medium text-ink">${item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
