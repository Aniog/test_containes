import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import Bestsellers from "@/components/home/Bestsellers";

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-warm-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.15em] uppercase text-warm-800 font-sans font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-warm-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-sm text-warm-600 font-sans leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-warm-600 mb-4">
            Product not found
          </p>
          <Link to="/shop">
            <Button variant="default">Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity);
    openCart();
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] tracking-wider uppercase text-warm-500 font-sans mb-8">
          <Link to="/" className="hover:text-warm-800 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-warm-800 transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-warm-800">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[4/5] bg-cream-200 overflow-hidden mb-3">
              <img
                src={product.imageGallery[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.imageGallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 bg-cream-200 overflow-hidden border-2 transition-colors ${
                    selectedImage === i
                      ? "border-gold-600"
                      : "border-transparent hover:border-warm-300"
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

          {/* Product info */}
          <div className="md:sticky md:top-24 md:self-start">
            {product.isNew && (
              <Badge variant="default" className="mb-4">
                New Arrival
              </Badge>
            )}
            <h1 className="font-serif text-2xl md:text-3xl text-warm-900 tracking-[0.15em] uppercase font-light">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? "fill-gold-500 text-gold-500"
                        : "text-warm-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-500 font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="mt-4 text-2xl font-serif text-warm-900">
              ${product.price}
            </p>

            <p className="mt-4 text-sm text-warm-600 font-sans leading-relaxed">
              {product.description}
            </p>

            <hr className="my-6 border-warm-200" />

            {/* Variant selector */}
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-warm-800 font-sans font-medium mb-3">
                Finish: {product.variants[selectedVariant]}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant, i) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(i)}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase font-sans border transition-all duration-300 ${
                      selectedVariant === i
                        ? "bg-warm-900 text-cream-100 border-warm-900"
                        : "bg-transparent text-warm-800 border-warm-300 hover:border-warm-500"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-[0.15em] uppercase text-warm-800 font-sans font-medium">
                  Qty
                </span>
                <div className="flex items-center border border-warm-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-warm-600 hover:text-warm-900 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 text-sm font-sans text-warm-900 min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-warm-600 hover:text-warm-900 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <Button
                variant="default"
                size="lg"
                className="w-full bg-gold-600 hover:bg-gold-700 text-white border-gold-600"
                onClick={handleAddToCart}
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">{product.materials}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">{product.shipping}</p>
                <p>{product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24">
            <div className="text-center mb-10">
              <p className="text-[10px] tracking-[0.2em] uppercase text-gold-600 font-sans font-medium">
                Complete the Look
              </p>
              <h2 className="mt-3 font-serif text-2xl md:text-3xl text-warm-900 font-light">
                You May Also Like
              </h2>
              <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.slice(0, 4).map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] bg-cream-200 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 space-y-1">
                    <h3 className="product-name text-warm-900 truncate">
                      {product.name}
                    </h3>
                    <p className="text-sm font-sans font-medium text-warm-900">
                      ${product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}