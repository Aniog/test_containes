import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-ivory-dark">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-obsidian font-semibold">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-stone" />
        ) : (
          <ChevronDown size={16} className="text-stone" />
        )}
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-stone leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const product = products.find((p) => p.slug === slug);
  const related = products.filter((p) => p.slug !== slug).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImg(0);
    }
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-obsidian mb-4">Product not found</p>
          <Link to="/shop" className="btn-accent">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const images = [
    { id: product.imgId, img2Id: null },
    { id: product.img2Id, img2Id: null },
  ];

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price, variant: selectedVariant, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 font-sans text-xs text-stone hover:text-champagne transition-colors tracking-widest uppercase"
          >
            <ArrowLeft size={12} />
            Back
          </button>
          <span className="text-stone-light">/</span>
          <Link to="/shop" className="font-sans text-xs text-stone hover:text-champagne transition-colors tracking-widest uppercase">
            Shop
          </Link>
          <span className="text-stone-light">/</span>
          <span className="font-sans text-xs text-obsidian tracking-widest uppercase">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? "border-champagne" : "border-transparent"
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={`[${product.titleId}] [${product.descId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-champagne-pale overflow-hidden relative">
              <img
                data-strk-img-id={activeImg === 0 ? product.imgId : product.img2Id}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {product.tags.includes("bestseller") && (
                <span className="bg-champagne text-obsidian font-sans text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5">
                  Bestseller
                </span>
              )}
              {product.tags.includes("new") && (
                <span className="bg-obsidian text-ivory font-sans text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="product-name text-2xl md:text-3xl text-obsidian mb-2 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.floor(product.rating) ? "fill-champagne text-champagne" : "text-stone-light"}
                    strokeWidth={0.5}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-obsidian mb-5">${product.price}</p>

            {/* Short desc */}
            <p id={product.descId} className="font-sans text-sm text-stone leading-relaxed mb-6">
              {product.shortDesc}
            </p>

            <div className="border-t border-ivory-dark pt-6 space-y-5">
              {/* Variant selector */}
              <div>
                <p className="font-sans text-xs text-obsidian tracking-widest uppercase mb-3 font-semibold">
                  Finish: <span className="text-stone font-normal">{selectedVariant}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                        selectedVariant === v
                          ? "border-champagne bg-champagne text-obsidian"
                          : "border-ivory-dark text-stone hover:border-champagne hover:text-obsidian"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="font-sans text-xs text-obsidian tracking-widest uppercase mb-3 font-semibold">
                  Quantity
                </p>
                <div className="flex items-center border border-ivory-dark w-fit">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 text-center font-sans text-sm text-obsidian">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  added
                    ? "bg-obsidian text-ivory"
                    : "bg-champagne text-obsidian hover:bg-champagne-light"
                }`}
              >
                {added ? "Added to Cart ✓" : "Add to Cart"}
              </button>

              <button className="w-full py-4 font-sans text-xs font-semibold tracking-widest uppercase border border-obsidian text-obsidian hover:bg-obsidian hover:text-ivory transition-all duration-300">
                Buy It Now
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-obsidian">Material:</strong> {product.material}</p>
                <p>To preserve the gold plating, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft dry cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Estimated delivery 3–7 business days.</p>
                <p>We offer hassle-free 30-day returns on unworn items in original packaging. Contact our team to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-12">
            <p className="font-sans text-champagne text-xs tracking-widest3 uppercase mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-champagne mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="aspect-[3/4] bg-champagne-pale overflow-hidden mb-3 img-zoom">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-${p.id}-desc] [related-${p.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p id={`related-${p.id}-title`} className="product-name text-xs text-obsidian mb-1">{p.name}</p>
                <p id={`related-${p.id}-desc`} className="font-sans text-xs text-stone hidden">{p.shortDesc}</p>
                <p className="font-sans text-sm font-semibold text-obsidian">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
