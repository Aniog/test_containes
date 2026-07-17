import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gold/20">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-obsidian">
          {title}
        </span>
        {open ? (
          <ChevronUp size={14} className="text-taupe" strokeWidth={1.5} />
        ) : (
          <ChevronDown size={14} className="text-taupe" strokeWidth={1.5} />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="font-sans text-sm text-taupe leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) || products[0];
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current);
  }, []);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const images = [
    { id: product.imgId, thumbId: `${product.imgId}-thumb`, query: `[pdp-desc-${product.id}] [pdp-name-${product.id}] gold jewelry product shot` },
    { id: product.imgId2, thumbId: `${product.imgId2}-thumb`, query: `[pdp-name-${product.id}] gold jewelry worn on model close up` },
    { id: `${product.imgId}-detail`, thumbId: `${product.imgId}-detail-thumb`, query: `[pdp-name-${product.id}] fine jewelry detail texture` },
  ];

  return (
    <div className="bg-ivory min-h-screen pt-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10">
          <Link to="/" className="font-sans text-xs text-taupe hover:text-gold transition-colors duration-300">Home</Link>
          <span className="text-taupe-light text-xs">/</span>
          <Link to="/shop" className="font-sans text-xs text-taupe hover:text-gold transition-colors duration-300">Shop</Link>
          <span className="text-taupe-light text-xs">/</span>
          <span className="font-sans text-xs text-obsidian">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-all duration-200 ${
                    activeImg === i ? "border-gold" : "border-transparent hover:border-gold/40"
                  }`}
                >
                  <img
                    data-strk-img-id={img.thumbId}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-ivory-dark">
              {images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    activeImg === i ? "block" : "hidden"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Name & Price */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">
                {product.material}
              </p>
              <h1
                id={`pdp-name-${product.id}`}
                className="product-name text-2xl lg:text-3xl text-obsidian mb-3"
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-taupe-light"}
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-taupe">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="font-serif text-3xl text-obsidian">${product.price}</p>
            </div>

            <div className="w-full h-px bg-gold/20 mb-6" />

            {/* Description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="font-sans text-sm text-taupe leading-relaxed mb-8"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase text-obsidian mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-wide px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? "border-gold bg-gold text-obsidian"
                        : "border-gold/30 text-taupe hover:border-gold hover:text-obsidian"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-widest uppercase text-obsidian mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-0 border border-gold/30 w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-taupe hover:text-obsidian hover:bg-ivory-dark transition-all duration-200"
                >
                  <Minus size={12} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-obsidian">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-taupe hover:text-obsidian hover:bg-ivory-dark transition-all duration-200"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAdd}
              className="w-full bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-5 flex items-center justify-center gap-3 hover:bg-obsidian-light transition-all duration-300 mb-3"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              {added ? "Added to Cart!" : "Add to Cart"}
            </button>
            <button className="w-full border border-gold/40 text-obsidian font-sans text-xs tracking-widest uppercase py-5 hover:border-gold transition-all duration-300">
              Add to Wishlist
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span>{product.materials}</span>
                <br /><br />
                <span>{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div ref={relatedRef} className="mt-24 lg:mt-32">
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">
              You May Also Like
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-obsidian font-light">
              Complete the Look
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-ivory-dark mb-3">
                  <img
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[related-title-${p.id}] gold jewelry product`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p id={`related-title-${p.id}`} className="product-name text-xs text-obsidian mb-1 group-hover:text-gold transition-colors duration-300">
                  {p.name}
                </p>
                <p className="font-sans text-sm text-taupe">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
