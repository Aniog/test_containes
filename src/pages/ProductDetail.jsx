import { useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronDown, Minus, Plus, Check } from "lucide-react";
import { products, getProductById, getRelatedProducts } from "@/data/products.js";
import { useCart } from "@/context/CartContext.jsx";
import { formatPrice } from "@/lib/utils.js";
import useStrkImages from "@/hooks/useStrkImages.js";
import StarRating from "@/components/StarRating.jsx";
import ProductCard from "@/components/ProductCard.jsx";

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-ink/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm font-semibold tracking-widest uppercase">
          {title}
        </span>
        <ChevronDown
          size={18}
          className={`text-ink-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"}`}
      >
        <div className="text-sm text-ink-muted leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);
  const { addItem } = useCart();

  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || "gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const galleryRef = useRef(null);
  useStrkImages(galleryRef);

  if (!product) {
    return (
      <div className="pt-32 text-center px-4">
        <h1 className="font-serif text-4xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-gold-dark font-medium underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);

  const handleAdd = () => {
    addItem(product, { tone: selectedTone, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-ink-muted mb-6 md:mb-8">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="capitalize">{product.category}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div ref={galleryRef} className="space-y-4">
            <div className="relative aspect-[4/5] bg-cream-dark overflow-hidden">
              {product.images.map((img, idx) => (
                <img
                  key={img}
                  data-strk-img-id={`gallery-main-${img}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width={900}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeImage === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 md:w-24 md:h-24 bg-cream-dark overflow-hidden border transition-colors ${
                    activeImage === idx ? "border-ink" : "border-transparent"
                  }`}
                >
                  <img
                    data-strk-img-id={`gallery-thumb-${img}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width={200}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-8">
            <p className="text-xs tracking-super-wide uppercase text-ink-muted mb-2">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-widest-xl uppercase leading-[1.05] mb-4"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <StarRating rating={product.rating} size={14} showValue />
              <span className="text-sm text-ink-muted">
                {product.reviewCount} reviews
              </span>
            </div>

            <p className="font-serif text-3xl md:text-4xl mb-6">
              {formatPrice(product.price)}
            </p>

            <p id={product.descId} className="text-ink-muted leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Tone selector */}
            {product.tone.length > 1 && (
              <div className="mb-6">
                <label className="block text-xs font-semibold tracking-widest uppercase mb-3">
                  Tone
                </label>
                <div className="flex gap-3">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-colors capitalize ${
                        selectedTone === tone
                          ? "bg-ink text-cream border-ink"
                          : "bg-transparent text-ink border-ink/20 hover:border-ink"
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-xs font-semibold tracking-widest uppercase mb-3">
                Quantity
              </label>
              <div className="inline-flex items-center border border-ink/15">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-cream-dark transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-cream-dark transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className={`w-full py-4 text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2 transition-colors ${
                added
                  ? "bg-ink-light text-cream"
                  : "bg-gold text-ink hover:bg-gold-light"
              }`}
            >
              {added ? (
                <>
                  <Check size={16} /> Added to Cart
                </>
              ) : (
                "Add to Cart"
              )}
            </button>

            <div className="mt-6 text-xs text-ink-muted text-center">
              Free shipping on orders over $50 · 30-day returns
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materialsCare}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shippingReturns}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-10 md:mb-14">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} showQuickAdd={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
