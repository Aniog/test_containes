import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/StarRating";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("description");

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-serif text-3xl font-medium">Product Not Found</h1>
        <Link
          to="/shop"
          className="mt-4 inline-block bg-accent text-white px-6 py-3 text-xs tracking-widest uppercase"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const accordionItems = [
    {
      key: "description",
      title: "Description",
      content: product.description,
    },
    {
      key: "materials",
      title: "Materials & Care",
      content: product.materialsCare,
    },
    {
      key: "shipping",
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. Express available at checkout. 30-day hassle-free returns — jewelry must be unworn with original packaging.",
    },
  ];

  return (
    <main className="bg-cream">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <nav className="text-xs font-sans text-warm-gray">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink capitalize">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
            <div className="flex sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === idx
                      ? "border-accent"
                      : "border-transparent hover:border-divider"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-square sm:aspect-[4/5] overflow-hidden bg-surface">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-xs font-sans font-medium tracking-[0.2em] uppercase text-accent mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-wide uppercase">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} size={4} />
              <span className="text-xs font-sans text-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-5 font-sans text-xl font-medium">${product.price}</p>

            <p className="mt-5 text-sm font-sans text-warm-gray leading-relaxed">
              {product.description}
            </p>

            {/* Variant */}
            <div className="mt-6">
              <span className="text-xs font-sans font-medium tracking-wider uppercase text-ink">
                Tone
              </span>
              <div className="mt-2 flex items-center gap-2">
                {["gold", "silver"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs font-sans font-medium tracking-wider uppercase border transition-colors ${
                      variant === v
                        ? "border-ink bg-ink text-cream"
                        : "border-divider bg-transparent text-ink hover:border-ink"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs font-sans font-medium tracking-wider uppercase text-ink">
                Quantity
              </span>
              <div className="mt-2 inline-flex items-center border border-divider">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 hover:bg-divider/50 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-sm font-sans font-medium min-w-[2.5rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 hover:bg-divider/50 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => {
                addItem(product, quantity, variant);
              }}
              className="mt-8 w-full bg-accent text-white py-4 text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-accent-hover transition-colors"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Trust mini */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-sans text-warm-gray tracking-wide">
              <span>Free shipping over $50</span>
              <span>30-day returns</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-divider">
              {accordionItems.map((item) => (
                <div key={item.key} className="border-b border-divider">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === item.key ? null : item.key)
                    }
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-sans font-medium tracking-wider uppercase">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4 text-sm font-sans text-warm-gray leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-divider">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-surface">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-warm-gray">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
