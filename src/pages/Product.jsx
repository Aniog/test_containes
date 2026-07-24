import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown, Check } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/components/cart/CartContext";
import ProductCard from "@/components/product/ProductCard";

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200/70">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium tracking-wide text-gray-900"
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-4 text-sm text-gray-600 leading-relaxed">{children}</div>}
    </div>
  );
};

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedTone, setSelectedTone] = useState(product?.tone || "gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem, toggleDrawer } = useCart();

  const images = useMemo(() => {
    if (!product) return [];
    return product.images?.[selectedTone] || product.images?.gold || [];
  }, [product, selectedTone]);

  const related = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-sm text-gray-600">Product not found.</p>
        <Link to="/shop" className="mt-3 inline-flex text-sm font-medium text-gold-700 hover:text-gold-800">
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      tone: selectedTone,
      image: images[0],
    });
    toggleDrawer();
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <nav aria-label="Breadcrumb" className="text-xs text-gray-500">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-gold-700">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold-700">Shop</Link></li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-square">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=800&q=80';
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`overflow-hidden rounded-xl bg-gray-100 aspect-square border ${
                    activeImage === idx ? "border-gold-800" : "border-transparent"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=800&q=80';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-wide">{product.name}</h1>
            <p className="mt-2 text-sm text-gray-600">${product.price}</p>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
              <div className="flex items-center gap-1 text-gold-700">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-medium">{product.rating}</span>
              </div>
              <span className="text-gray-400">·</span>
              <span>{product.reviewCount} reviews</span>
            </div>
            <p className="mt-5 text-sm md:text-base text-gray-700 leading-relaxed">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-medium tracking-widest uppercase text-gray-900">Tone</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["gold", "silver"].map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium capitalize transition-colors ${
                      selectedTone === tone
                        ? "border-gold-800 bg-gold-800 text-white"
                        : "border-gray-200 text-gray-700 hover:border-gold-800"
                    }`}
                  >
                    {selectedTone === tone && <Check className="h-3.5 w-3.5" />}
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs font-medium tracking-widest uppercase text-gray-900">Quantity</span>
              <div className="flex items-center gap-3 rounded-full border border-gray-200">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-gray-700 hover:text-gold-700 transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-gray-700 hover:text-gold-700 transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-6 w-full rounded-full bg-gold-800 py-3.5 text-sm font-medium text-white hover:bg-gold-900 transition-colors"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <div className="mt-8">
              <AccordionItem title="Description" defaultOpen>
                {product.details}
              </AccordionItem>
              <AccordionItem title="Materials & Care">
                {product.materials}
              </AccordionItem>
              <AccordionItem title="Shipping & Returns">
                {product.shipping} {product.returns}
              </AccordionItem>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900">You may also like</h2>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Product;
