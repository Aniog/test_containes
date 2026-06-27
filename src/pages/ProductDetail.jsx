import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown } from "lucide-react";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/common/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-ink">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const accordions = [
    {
      key: "description",
      title: "Description",
      content: product.description,
    },
    {
      key: "materials",
      title: "Materials & Care",
      content: product.materials + " Store in a cool, dry place. Avoid contact with water, perfume, and chemicals.",
    },
    {
      key: "shipping",
      title: "Shipping & Returns",
      content: "Free worldwide shipping on all orders. Delivery within 5-7 business days. 30-day returns — items must be unworn and in original packaging.",
    },
  ];

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Images */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-gold" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-linen overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="py-2 md:py-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-stone mb-4">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
              <span>/</span>
              <span className="text-ink capitalize">{product.category}</span>
            </div>

            {/* Name */}
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-[0.15em] text-ink">
              {product.name}
            </h1>

            {/* Price */}
            <p className="mt-3 text-xl text-ink font-medium">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? "fill-gold text-gold"
                        : "text-sand"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="mt-5 text-sm text-stone leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-ink font-medium mb-3">
                Tone
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-[0.1em] border transition-colors duration-200 ${
                      variant === v
                        ? "border-gold bg-gold text-cream"
                        : "border-sand text-stone hover:border-gold"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.15em] text-ink font-medium mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-linen transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium border-x border-sand">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-linen transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-gold text-cream py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-dark transition-colors duration-300"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-sand">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-sand">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs uppercase tracking-[0.15em] font-medium text-ink">
                      {acc.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone transition-transform duration-200 ${
                        openAccordion === acc.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4">
                      <p className="text-sm text-stone leading-relaxed">{acc.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 border-t border-sand pt-12">
          <h2 className="font-serif text-2xl md:text-3xl text-ink text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
