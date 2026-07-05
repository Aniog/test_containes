import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Check, Plus, Minus, ChevronDown } from "lucide-react";
import { allProducts, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/ui/StarRating";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#2a2a2a]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm text-primary font-sans tracking-wide hover:text-accent transition-colors"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <div className="text-sm text-secondary leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();

  const product = allProducts.find((p) => p.id === id) || products[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, selectedMaterial);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-page mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-secondary font-sans">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/shop"
            className="hover:text-primary transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-primary">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <div className="max-w-page mx-auto px-4 md:px-8 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Image gallery */}
          <div>
            <div className="aspect-[4/5] bg-surface-secondary overflow-hidden rounded-sm mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === i
                      ? "border-accent"
                      : "border-[#2a2a2a] hover:border-[#555]"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="md:pt-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs tracking-widest uppercase text-accent font-sans">
                {product.category}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl text-primary font-light tracking-wide uppercase">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-secondary font-sans">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl text-accent font-sans font-medium mt-4">
              ${product.price}
            </p>

            <p className="mt-4 text-sm text-secondary leading-relaxed font-sans">
              {product.description}
            </p>

            {/* Material selector */}
            <div className="mt-8">
              <label className="text-xs tracking-wider uppercase text-primary font-sans font-medium">
                Metal Tone
              </label>
              <div className="flex gap-3 mt-2">
                {["gold", "silver"].map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-5 py-2.5 text-sm font-sans tracking-wide border transition-all duration-300 ${
                      selectedMaterial === material
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-[#2a2a2a] text-secondary hover:border-[#555]"
                    }`}
                  >
                    {material === "gold" ? "18K Gold" : "Silver Tone"}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex gap-4">
              <div className="flex items-center border border-[#2a2a2a]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 text-secondary hover:text-primary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-3 text-sm text-primary font-sans min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 text-secondary hover:text-primary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                {addedToCart ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Cart
                  </>
                ) : (
                  "Add to Cart — $" + product.price * quantity
                )}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-[#2a2a2a]">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">
                  <strong className="text-primary">Materials:</strong> 18K gold
                  plated over sterling silver. Ethically sourced cubic zirconia
                  and semi-precious stones.
                </p>
                <p>
                  <strong className="text-primary">Care:</strong> Avoid contact
                  with water, perfume, and lotions. Store in a dry place. Gently
                  polish with a soft cloth to maintain shine.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">
                  Free worldwide shipping on all orders. Estimated delivery: 5-8
                  business days.
                </p>
                <p>
                  Not in love? Return within 30 days for a full refund. Items
                  must be unworn with original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding border-t border-[#2a2a2a]">
          <div className="max-w-page mx-auto px-4 md:px-8">
            <h2 className="section-heading mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] bg-surface-secondary overflow-hidden rounded-sm">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 space-y-1.5">
                    <h3 className="product-name text-primary truncate">
                      {p.name}
                    </h3>
                    <p className="text-accent font-sans text-sm font-medium">
                      ${p.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}