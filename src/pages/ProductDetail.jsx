import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingBag, Minus, Plus, ChevronLeft, ArrowLeft } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductImages from "../components/product/ProductImages";
import Accordion from "../components/product/Accordion";
import RelatedProducts from "../components/product/RelatedProducts";

const materials = [
  { value: "gold", label: "18K Gold" },
  { value: "silver", label: "Silver Tone" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === Number(id));
  const [material, setMaterial] = useState("gold");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-3xl text-foreground">Product not found</h1>
        <Link to="/collections/all" className="text-gold hover:text-gold-hover mt-4 inline-block">
          Back to Shop
        </Link>
      </div>
    );
  }

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials}\n\nCare: ${product.care}` },
    { title: "Shipping & Returns", content: `${product.shipping}\n\n${product.returns}` },
  ];

  const handleAddToCart = () => {
    addItem(product, material, quantity);
  };

  return (
    <main className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          to="/collections/all"
          className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground uppercase tracking-widest transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <ProductImages images={product.images} name={product.name} />

          {/* Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="text-xs text-muted uppercase tracking-widest mb-2">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground uppercase tracking-[0.12em] leading-tight">
              {product.name}
            </h1>

            {/* Price & Rating */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-2xl font-medium text-foreground">${product.price}</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(product.rating)
                          ? "text-gold fill-gold"
                          : "text-border"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted">({product.reviewCount})</span>
              </div>
            </div>

            {/* Material selector */}
            <div className="mt-8">
              <p className="text-xs text-muted uppercase tracking-widest mb-3">Finish</p>
              <div className="flex gap-3">
                {materials.map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setMaterial(m.value)}
                    className={`px-6 py-3 text-sm tracking-widest uppercase rounded-sm border transition-all duration-200 ${
                      material === m.value
                        ? "border-gold bg-gold/5 text-foreground"
                        : "border-border/60 text-muted hover:border-gold"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs text-muted uppercase tracking-widest mb-3">Quantity</p>
              <div className="flex items-center border border-border/60 rounded-sm w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-muted hover:text-foreground transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-foreground">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-muted hover:text-foreground transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-white py-4 mt-8 text-sm tracking-widest uppercase rounded-sm hover:bg-gold-hover transition-all duration-300 flex items-center justify-center gap-3"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordion details */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="mt-16 border-t border-border/60">
        <RelatedProducts currentId={product.id} />
      </div>
    </main>
  );
}