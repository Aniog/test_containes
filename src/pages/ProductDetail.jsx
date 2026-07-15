import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/shared/ProductCard";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="section-padding pt-32 pb-20 text-center">
        <h1 className="font-heading text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="btn-primary text-xs">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  if (related.length < 4) {
    const others = products.filter((p) => p.id !== product.id && !related.includes(p));
    related.push(...others.slice(0, 4 - related.length));
  }

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordions = [
    { id: "desc", title: "Description", content: product.description },
    { id: "materials", title: "Materials & Care", content: product.materials + "\n\n" + product.care },
    { id: "shipping", title: "Shipping & Returns", content: product.shipping },
  ];

  return (
    <div className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="section-padding py-4 text-xs text-velmora-muted">
        <Link to="/" className="hover:text-velmora-ink transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-velmora-ink transition-colors">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-velmora-ink">{product.name}</span>
      </div>

      <div className="section-padding pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] bg-velmora-sand overflow-hidden mb-4">
              <img
                src={`https://placehold.co/800x1000/2D2D2D/BFA06B?text=${encodeURIComponent(product.name)}+${selectedImage + 1}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 bg-velmora-sand overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-velmora-ink" : "border-transparent"
                  }`}
                >
                  <img
                    src={`https://placehold.co/200x200/2D2D2D/BFA06B?text=${encodeURIComponent(product.name)}+${i + 1}`}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl tracking-widester uppercase">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3 mb-5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.round(product.rating)
                        ? "fill-velmora-gold text-velmora-gold"
                        : "text-velmora-stone"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-heading text-xl md:text-2xl mb-6">${product.price}</p>

            <p className="text-sm text-velmora-muted leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs tracking-widester uppercase text-velmora-muted mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {["gold", "silver"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-xs tracking-widester uppercase border transition-all ${
                      variant === v
                        ? "border-velmora-ink bg-velmora-ink text-white"
                        : "border-velmora-stone text-velmora-muted hover:border-velmora-ink hover:text-velmora-ink"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widester uppercase text-velmora-muted mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-stone">
                <button
                  className="px-3 py-2.5 hover:bg-velmora-sand transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm font-medium min-w-[2.5rem] text-center">
                  {quantity}
                </span>
                <button
                  className="px-3 py-2.5 hover:bg-velmora-sand transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, variant, quantity)}
              className="btn-primary w-full mb-8"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="border-t border-velmora-stone/50">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-velmora-stone/50">
                  <button
                    onClick={() => toggleAccordion(acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-widester uppercase font-medium">
                      {acc.title}
                    </span>
                    {openAccordion === acc.id ? (
                      <ChevronUp className="w-4 h-4 text-velmora-muted" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-muted" />
                    )}
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 text-sm text-velmora-muted leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="section-padding py-16 md:py-20 border-t border-velmora-stone/40">
          <h2 className="font-heading text-2xl md:text-3xl mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
