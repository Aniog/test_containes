import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-wider text-velmora-dark hover:text-velmora-gold transition-colors"
      >
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && (
        <div className="pb-4 text-sm text-velmora-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-velmora-dark mb-4">
            Product Not Found
          </h2>
          <Link to="/collection" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant,
      image: product.images[0],
      quantity,
    });
  };

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-velmora-muted uppercase tracking-wider mb-8">
          <Link to="/" className="hover:text-velmora-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/collection"
            className="hover:text-velmora-gold transition-colors"
          >
            Shop
          </Link>
          <span>/</span>
          <span className="text-velmora-dark">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-velmora-dark/5 mb-4">
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
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === i
                      ? "border-velmora-gold"
                      : "border-transparent hover:border-velmora-border"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:sticky md:top-28 md:self-start">
            <p className="text-velmora-gold text-xs tracking-widest uppercase mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-velmora-dark tracking-wide uppercase">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(product.rating)
                        ? "text-velmora-gold fill-velmora-gold"
                        : "text-velmora-border"
                    }
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-muted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-velmora-dark mt-4">
              ${product.price}
            </p>

            <p className="text-sm text-velmora-muted leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider text-velmora-dark mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {["Gold", "Silver"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-sm uppercase tracking-wider border transition-all duration-200 ${
                      variant === v
                        ? "border-velmora-gold bg-velmora-gold text-velmora-dark"
                        : "border-velmora-border text-velmora-muted hover:border-velmora-dark"
                    }`}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-velmora-dark mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-velmora-gold/10 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-velmora-gold/10 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full mt-8 text-center"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="text-xs text-velmora-muted text-center mt-3">
              Free shipping on orders over $50
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                {product.details.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">
                  <strong>Materials:</strong> {product.details.materials}
                </p>
                <p>
                  <strong>Care:</strong> {product.details.care}
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">{product.details.shipping}</p>
                <p>{product.details.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24 pt-12 md:pt-16 hairline">
            <h2 className="section-heading mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-velmora-dark/5 mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name">{p.name}</h3>
                  <p className="text-sm font-medium text-velmora-dark mt-1">
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