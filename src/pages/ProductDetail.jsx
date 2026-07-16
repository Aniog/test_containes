import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [material, setMaterial] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-velmora-charcoal mb-4">Product not found</h2>
          <Link to="/shop" className="text-sm tracking-wider uppercase font-sans text-velmora-gold hover:text-velmora-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const accordions = [
    {
      id: "description",
      title: "Description",
      content: product.description,
    },
    {
      id: "materials",
      title: "Materials & Care",
      content: (
        <div className="space-y-3">
          <p className="text-sm text-velmora-charcoal-light font-sans leading-relaxed">{product.details}</p>
          <div className="hairline" />
          <p className="text-sm text-velmora-charcoal-light font-sans leading-relaxed">{product.care}</p>
        </div>
      ),
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content: (
        <div className="space-y-2 text-sm text-velmora-charcoal-light font-sans leading-relaxed">
          <p>Free worldwide shipping on all orders. Estimated delivery 5–10 business days.</p>
          <p>30-day return policy. Items must be unworn and in original packaging. Full refund to original payment method.</p>
        </div>
      ),
    },
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, material);
    }
  };

  return (
    <main className="pt-[72px] bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-sans text-velmora-taupe hover:text-velmora-charcoal transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image gallery */}
          <div>
            <div className="aspect-[4/5] bg-velmora-cream overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 bg-velmora-cream overflow-hidden border-2 transition-colors ${
                      selectedImage === idx ? "border-velmora-gold" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product info */}
          <div className="lg:pl-4">
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(product.rating)
                      ? "fill-velmora-gold text-velmora-gold"
                      : "text-velmora-sand"
                  }`}
                />
              ))}
              <span className="text-xs text-velmora-taupe ml-1 font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl text-velmora-charcoal tracking-widest uppercase font-semibold">
              {product.name}
            </h1>

            <p className="font-serif text-xl text-velmora-gold mt-3">
              ${product.price}
            </p>

            <p className="text-sm text-velmora-charcoal-light font-sans leading-relaxed mt-5">
              {product.description}
            </p>

            {/* Material variant */}
            <div className="mt-8">
              <p className="text-xs tracking-wider uppercase font-sans font-medium text-velmora-charcoal mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {["gold", "silver"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setMaterial(opt)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase font-sans border transition-all duration-300 ${
                      material === opt
                        ? "border-velmora-charcoal bg-velmora-charcoal text-white"
                        : "border-velmora-sand text-velmora-charcoal-light hover:border-velmora-charcoal"
                    }`}
                  >
                    {opt === "gold" ? "Gold Tone" : "Silver Tone"}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-stretch gap-4 mt-8">
              <div className="flex items-center border border-velmora-sand/70">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 text-velmora-charcoal-light hover:text-velmora-charcoal transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-sans text-velmora-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 text-velmora-charcoal-light hover:text-velmora-charcoal transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-velmora-gold hover:bg-velmora-gold-dark text-white text-sm tracking-widest uppercase font-sans font-medium transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 space-y-0">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-t border-velmora-sand/50">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.id ? null : acc.id)
                    }
                    className="flex items-center justify-between w-full py-4 text-sm tracking-wider uppercase font-sans font-medium text-velmora-charcoal hover:text-velmora-gold transition-colors"
                  >
                    {acc.title}
                    {openAccordion === acc.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? "max-h-80 pb-5" : "max-h-0"
                    }`}
                  >
                    {typeof acc.content === "string" ? (
                      <p className="text-sm text-velmora-charcoal-light font-sans leading-relaxed">
                        {acc.content}
                      </p>
                    ) : (
                      acc.content
                    )}
                  </div>
                </div>
              ))}
              <div className="border-t border-velmora-sand/50" />
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-velmora-sand/50">
            <h2 className="font-serif text-2xl sm:text-3xl text-velmora-charcoal font-light mb-10 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[4/5] bg-velmora-cream overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xs tracking-widest uppercase text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
                    {p.name}
                  </h3>
                  <p className="font-serif text-sm text-velmora-charcoal mt-1">
                    ${p.price}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}