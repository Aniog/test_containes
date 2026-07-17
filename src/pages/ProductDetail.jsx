import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Minus, Plus, ChevronRight, Star } from "lucide-react";
import ProductCard from "../components/product/ProductCard";
import products from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  // Find product
  const product = products.find((p) => p.slug === slug);
  const related = products.filter((p) => p.id !== product?.id).slice(0, 4);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImage(0);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [slug, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-4">Product not found</h2>
          <Link to="/shop" className="btn-outline text-sm">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    openCart();
  };

  const accordions = [
    {
      title: "Description",
      content: product.description,
    },
    {
      title: "Materials & Care",
      content:
        "18K gold plated over high-quality brass. Hypoallergenic, nickel-free, and water-resistant. To care for your piece: avoid perfumes, lotions, and water. Store in the provided pouch when not worn.",
    },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. 30-day hassle-free returns. Each piece arrives in our signature Velmora gift box.",
    },
  ];

  return (
    <div className="pt-20 sm:pt-24">
      {/* Breadcrumb */}
      <div className="container-velmora py-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-accent transition-colors">
            Shop
          </Link>
          <ChevronRight size={14} />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <section className="container-velmora py-6 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
          {/* Left: Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-square bg-muted overflow-hidden">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 mt-4">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-muted overflow-hidden border-2 transition-colors ${
                    activeImage === i
                      ? "border-accent"
                      : "border-transparent hover:border-border"
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="py-4">
            <h1 className="product-name text-2xl sm:text-3xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex text-accent">
                {"★".repeat(Math.round(product.rating))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-xl font-medium mt-4">
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Tone</p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-sm border transition-colors ${
                      selectedVariant === v
                        ? "bg-velmora-charcoal text-white border-velmora-charcoal"
                        : "border-border hover:border-accent"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Quantity</p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-muted transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-5 py-2 text-sm min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-muted transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary mt-8 py-4 text-base"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 space-y-0">
              {accordions.map((acc, i) => (
                <div key={acc.title} className="hairline">
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === i ? null : i)
                    }
                    className="w-full flex items-center justify-between py-4 text-sm font-medium"
                  >
                    {acc.title}
                    <span
                      className={`transform transition-transform ${
                        openAccordion === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openAccordion === i && (
                    <div className="pb-4 text-sm text-muted-foreground leading-relaxed animate-fade-in">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="container-velmora py-16 sm:py-24 border-t border-border">
          <h2 className="font-serif text-2xl text-velmora-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
