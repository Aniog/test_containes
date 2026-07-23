import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";

const accordionData = [
  {
    key: "description",
    title: "Description",
    content:
      "Each piece is meticulously crafted in 18K gold-plated sterling silver, designed to be worn daily and treasured forever. The warm gold finish complements all skin tones and pairs beautifully with both casual and formal attire.",
  },
  {
    key: "materials",
    title: "Materials & Care",
    content:
      "Crafted from sterling silver with 18K gold plating. To maintain the brilliance of your jewelry, avoid contact with water, perfume, and lotions. Store in a dry place, preferably in the included velvet pouch. Gently polish with a soft, dry cloth to restore shine.",
  },
  {
    key: "shipping",
    title: "Shipping & Returns",
    content:
      "Free worldwide shipping on all orders over $75. Standard delivery takes 5–8 business days. Express shipping available at checkout. 30-day return window for unworn items in original packaging. We'll cover return shipping on exchanges.",
  },
];

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-velmora-border">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-velmora-text-primary text-sm uppercase tracking-[0.15em] font-sans">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-velmora-text-secondary" />
        ) : (
          <ChevronDown className="w-4 h-4 text-velmora-text-secondary" />
        )}
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-velmora-text-secondary text-sm font-sans leading-relaxed">
            {children}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState("gold");

  const product = products.find((p) => p.id === id);
  const related = products.filter((p) => p.id !== id).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [id]);

  useEffect(() => {
    setQuantity(1);
    setSelectedImage(0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <p className="text-velmora-text-secondary">Product not found</p>
        <Link to="/shop" className="text-velmora-gold mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-28" ref={containerRef}>
      {/* Product */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Gallery */}
          <div>
            <div className="aspect-[4/5] bg-velmora-surface-elevated overflow-hidden mb-4">
              <img
                alt={product.images[selectedImage].alt}
                data-strk-img-id={`pd-main-${product.id}-${selectedImage}`}
                data-strk-img={`[pd-name-${product.id}] [pd-desc-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-velmora-surface-elevated overflow-hidden border transition-colors duration-200 ${
                    selectedImage === index
                      ? "border-velmora-gold"
                      : "border-transparent"
                  }`}
                >
                  <img
                    alt={img.alt}
                    data-strk-img-id={`pd-thumb-${product.id}-${index}`}
                    data-strk-img={`[pd-name-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <h1
              id={`pd-name-${product.id}`}
              className="font-serif text-2xl md:text-3xl text-velmora-text-primary tracking-widest uppercase"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? "fill-velmora-gold text-velmora-gold"
                        : "text-velmora-border-light"
                    }`}
                  />
                ))}
              </div>
              <span className="text-velmora-text-secondary text-xs font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p
              id={`pd-desc-${product.id}`}
              className="text-velmora-text-secondary text-sm font-sans leading-relaxed mt-6"
            >
              {product.description}
            </p>

            <p className="font-serif text-2xl text-velmora-gold mt-6">
              ${product.price}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="text-velmora-text-primary text-xs uppercase tracking-[0.15em] font-sans">
                Finish: {selectedVariant === "gold" ? "Gold" : "Silver"}
              </span>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setSelectedVariant("gold")}
                  className={`px-6 py-2.5 text-xs uppercase tracking-widest font-sans border transition-all duration-200 ${
                    selectedVariant === "gold"
                      ? "border-velmora-gold bg-velmora-gold/10 text-velmora-gold"
                      : "border-velmora-border-light text-velmora-text-secondary hover:text-velmora-text-primary"
                  }`}
                >
                  Gold
                </button>
                <button
                  onClick={() => setSelectedVariant("silver")}
                  className={`px-6 py-2.5 text-xs uppercase tracking-widest font-sans border transition-all duration-200 ${
                    selectedVariant === "silver"
                      ? "border-velmora-gold bg-velmora-gold/10 text-velmora-gold"
                      : "border-velmora-border-light text-velmora-text-secondary hover:text-velmora-text-primary"
                  }`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center border border-velmora-border-light">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 py-3 text-velmora-text-primary text-sm font-sans min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
              <Button
                className="flex-1"
                onClick={() => addItem(product)}
              >
                Add to Cart — ${product.price}
              </Button>
            </div>

            {/* Accordion */}
            <div className="mt-10">
              {accordionData.map((item) => (
                <AccordionItem key={item.key} title={item.title}>
                  {item.content}
                </AccordionItem>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="border-t border-velmora-border py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="section-title mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-velmora-surface-elevated overflow-hidden mb-3">
                  <img
                    alt={p.name}
                    data-strk-img-id={`related-${p.id}`}
                    data-strk-img={`[related-name-${p.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  id={`related-name-${p.id}`}
                  className="product-name text-center"
                >
                  {p.name}
                </h3>
                <p className="product-price text-center mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}