import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, Check } from "lucide-react";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-velmora-stone/20">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-[12px] font-medium tracking-[0.15em] uppercase">{title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`text-velmora-taupe transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-sm text-velmora-mocha leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function ProductCardSmall({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block overflow-hidden rounded-sm aspect-[3/4] bg-velmora-sand/40">
        <img
          src={product.image_primary}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div className="mt-3">
        <Link to={`/product/${product.slug}`}>
          <h4 className="font-serif text-[14px] tracking-[0.06em] uppercase">{product.name}</h4>
        </Link>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm text-velmora-mocha">${product.price}</span>
          <button
            onClick={() => addItem(product, product.variants?.[0])}
            className="text-[10px] font-medium tracking-[0.12em] uppercase text-velmora-gold hover:text-velmora-goldHover transition-colors"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = useMemo(() => getProductBySlug(slug), [slug]);
  const related = useMemo(() => getRelatedProducts(slug, 4), [slug]);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl">Product not found</h1>
        <Link to="/collection" className="mt-4 inline-block btn-outline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const images = [product.image_primary, product.image_secondary].filter(Boolean);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-20 sm:pt-24 bg-velmora-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="py-4 text-[11px] text-velmora-taupe tracking-wide">
          <Link to="/" className="hover:text-velmora-ink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/collection" className="hover:text-velmora-ink transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-mocha">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 py-6 sm:py-10">
          {/* Image gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden border transition-colors ${
                    selectedImage === idx ? "border-velmora-gold" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
            <div className="flex-1 overflow-hidden rounded-sm bg-velmora-sand/40 aspect-[4/5]">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.1em] uppercase">
              {product.name}
            </h1>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    strokeWidth={0}
                    className={
                      i < Math.round(product.rating)
                        ? "fill-velmora-gold text-velmora-gold"
                        : "fill-velmora-stone text-velmora-stone"
                    }
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-taupe">{product.review_count} reviews</span>
            </div>
            <p className="mt-3 font-serif text-xl">${product.price}</p>
            <p className="mt-4 text-sm text-velmora-mocha leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="mt-6">
                <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-velmora-mocha">
                  Tone
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 text-[11px] font-medium tracking-[0.1em] uppercase border rounded-sm transition-colors ${
                        selectedVariant === v
                          ? "border-velmora-gold bg-velmora-gold/10 text-velmora-ink"
                          : "border-velmora-stone/40 text-velmora-mocha hover:border-velmora-mocha"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-velmora-mocha">
                Quantity
              </span>
              <div className="mt-2 inline-flex items-center border border-velmora-stone/40 rounded-sm">
                <button
                  className="px-3 py-2 text-velmora-mocha hover:bg-velmora-sand transition-colors"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-medium min-w-[2.5rem] text-center">
                  {quantity}
                </span>
                <button
                  className="px-3 py-2 text-velmora-mocha hover:bg-velmora-sand transition-colors"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`mt-8 w-full py-3.5 text-[12px] font-medium tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2 ${
                added
                  ? "bg-green-700 text-white"
                  : "bg-velmora-gold text-white hover:bg-velmora-goldHover"
              }`}
            >
              {added ? (
                <>
                  <Check size={16} />
                  Added to Bag
                </>
              ) : (
                "Add to Bag"
              )}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials_care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping_returns}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="border-t border-velmora-stone/20 py-14 sm:py-20">
          <h3 className="font-serif text-2xl tracking-wide text-center mb-10">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <ProductCardSmall key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
