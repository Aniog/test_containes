import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/StarRating";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [variant, setVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <h2 className="font-serif text-2xl">Product not found</h2>
        <Link to="/shop" className="mt-4 inline-block text-velmora-accent underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);

  const handleAdd = () => {
    addItem(product, variant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <div className="pt-20 pb-16 bg-velmora-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-velmora-beige overflow-hidden">
              <img
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[product-name-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.thumbUrls.map((url, i) => (
                <div key={i} className="aspect-square bg-velmora-beige overflow-hidden">
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${i + 1}`}
                    data-strk-img={`[product-name-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={url}
                    alt={`${product.name} view ${i + 1}`}
                    className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 lg:pt-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-velmora-accent font-medium mb-2">
                {product.category}
              </p>
              <h1
                id={`product-name-${product.id}`}
                className="font-serif text-3xl sm:text-4xl uppercase tracking-widest"
              >
                {product.name}
              </h1>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-xl font-medium">${product.price}</span>
                <div className="flex items-center gap-1.5">
                  <StarRating rating={product.rating} size={14} />
                  <span className="text-xs text-velmora-muted">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-velmora-muted leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div>
              <p className="text-xs uppercase tracking-wide font-medium mb-2">
                Tone
              </p>
              <div className="flex gap-2">
                {["Gold", "Silver"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-4 py-2 text-xs uppercase tracking-widest font-medium border transition-colors ${
                      variant === v
                        ? "bg-velmora-text text-white border-velmora-text"
                        : "bg-transparent text-velmora-text border-velmora-hairline hover:border-velmora-text"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-xs uppercase tracking-wide font-medium mb-2">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-hairline">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-sm hover:bg-velmora-beige transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 text-sm min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-sm hover:bg-velmora-beige transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="w-full bg-velmora-accent text-white py-3.5 text-xs uppercase tracking-[0.14em] font-medium hover:bg-velmora-accent-hover transition-colors"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="border-t border-velmora-hairline pt-4 space-y-0">
              {[
                { key: "desc", title: "Description", content: product.description },
                {
                  key: "materials",
                  title: "Materials & Care",
                  content: `${product.materials} \n\nCare: ${product.care}`,
                },
                {
                  key: "shipping",
                  title: "Shipping & Returns",
                  content:
                    "Free worldwide shipping on all orders over $50. Orders ship within 1-2 business days. We offer 30-day hassle-free returns on unworn items in original packaging.",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  className="border-b border-velmora-hairline"
                >
                  <button
                    onClick={() => toggleAccordion(item.key)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs uppercase tracking-widest font-medium">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === item.key && (
                    <div className="pb-4 text-sm text-velmora-muted leading-relaxed whitespace-pre-line">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h3 className="font-serif text-2xl sm:text-3xl text-center mb-10">
            You May Also Like
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
