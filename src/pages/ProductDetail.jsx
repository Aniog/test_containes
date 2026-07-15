import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Star, ChevronDown, ChevronUp, ShoppingBag } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const accordionData = [
  {
    title: "Description",
    content:
      "Each Velmora piece is crafted from high-quality brass with a thick 18K gold plating, ensuring lasting brilliance. Designed for sensitive skin with nickel-free, hypoallergenic materials.",
  },
  {
    title: "Materials & Care",
    content:
      "18K gold plated over brass. Avoid contact with water, perfume, and lotions. Store in a dry place. Clean gently with a soft cloth to maintain shine.",
  },
  {
    title: "Shipping & Returns",
    content:
      "Free worldwide shipping on all orders. 30-day return policy for unworn items in original packaging. Expedited shipping available at checkout.",
  },
];

function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-widest text-velmora-text"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-sm text-velmora-muted leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
        <h1 className="font-serif text-3xl text-velmora-text">Product Not Found</h1>
        <Link to="/shop" className="text-velmora-gold mt-4 inline-block uppercase tracking-widest text-sm">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      variant: selectedVariant,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="py-8 md:py-12" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="text-xs tracking-widest uppercase text-velmora-muted mb-8">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-text">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Gallery */}
          <div>
            <div className="aspect-[4/5] bg-velmora-border/30 mb-4 overflow-hidden">
              <img
                data-strk-img-id={`pd-main-${product.id}`}
                data-strk-img={`[pd-title-${product.id}] [pd-section]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              <div className="w-16 h-16 bg-velmora-border/50 border border-velmora-gold cursor-pointer" />
              <div className="w-16 h-16 bg-velmora-border/30 cursor-pointer" />
              <div className="w-16 h-16 bg-velmora-border/30 cursor-pointer" />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="md:sticky md:top-24 md:self-start">
            <span className="text-xs tracking-widest uppercase text-velmora-gold">{product.category}</span>
            <h1 id={`pd-title-${product.id}`} className="font-serif text-2xl md:text-3xl text-velmora-text uppercase tracking-widest mt-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-velmora-gold text-velmora-gold"
                        : "fill-velmora-border text-velmora-border"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-velmora-gold mt-4">${product.price}</p>
            <p className="mt-4 text-sm text-velmora-muted leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="text-xs uppercase tracking-widest text-velmora-text">Finish: {selectedVariant}</span>
              <div className="flex gap-3 mt-2">
                {["Gold", "Silver"].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest border transition-all ${
                      selectedVariant === variant
                        ? "border-velmora-gold bg-velmora-gold text-velmora-text"
                        : "border-velmora-border text-velmora-muted hover:border-velmora-gold"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center border border-velmora-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 text-sm text-velmora-muted hover:text-velmora-text"
                >
                  -
                </button>
                <span className="px-4 text-sm text-velmora-text">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 text-sm text-velmora-muted hover:text-velmora-text"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className={`flex-1 py-3 text-sm uppercase tracking-widest font-medium transition-all flex items-center justify-center gap-2 ${
                  added
                    ? "bg-green-700 text-white"
                    : "bg-velmora-gold text-velmora-text hover:bg-velmora-gold-dark"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? "Added!" : "Add to Cart"}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              {accordionData.map((item) => (
                <Accordion key={item.title} title={item.title} content={item.content} />
              ))}
            </div>

            {/* Last divider */}
            <div className="border-t border-velmora-border mt-4" />
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-16 md:mt-24">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-velmora-text font-light">
                You May Also Like
              </h2>
              <div className="w-12 h-px bg-velmora-gold mx-auto mt-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/products/${p.id}`} className="group">
                  <div className="aspect-[4/5] bg-velmora-border/30 overflow-hidden">
                    <img
                      data-strk-img-id={`related-${p.id}`}
                      data-strk-img={`[related-title-${p.id}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 id={`related-title-${p.id}`} className="font-serif text-sm uppercase tracking-widest text-velmora-text mt-3">
                    {p.name}
                  </h3>
                  <p className="text-sm text-velmora-text mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}