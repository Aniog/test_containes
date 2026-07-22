import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, Check } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/home/ProductCard";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [material, setMaterial] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState("description");

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-stone-500">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-amber-700">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const sections = [
    { id: "description", label: "Description", content: product.description },
    { id: "materials", label: "Materials & Care", content: product.care },
    { id: "shipping", label: "Shipping & Returns", content: "Free worldwide shipping on orders over $75. 30-day returns for unworn items in original packaging." },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <nav className="mb-8 text-xs text-stone-500">
          <Link to="/" className="hover:text-stone-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-stone-900">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-stone-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square overflow-hidden rounded-sm bg-stone-100 border-2 transition-colors ${
                    selectedImage === idx ? "border-stone-900" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-serif text-2xl sm:text-3xl tracking-wide text-stone-900">{product.name}</h1>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-amber-500 text-amber-500" : "text-stone-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-stone-500">{product.rating}</span>
              <span className="text-sm text-stone-400">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 text-2xl font-medium text-stone-900">${product.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-3">Tone</p>
              <div className="flex gap-3">
                {["gold", "silver"].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setMaterial(tone)}
                    className={`px-4 py-2 text-xs uppercase tracking-[0.15em] border rounded-full transition-colors ${
                      material === tone
                        ? "border-stone-900 bg-stone-900 text-white"
                        : "border-stone-300 text-stone-700 hover:border-stone-900"
                    }`}
                  >
                    {tone === "gold" ? "Gold Tone" : "Silver Tone"}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-stone-300 rounded-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-stone-600 hover:text-stone-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-stone-600 hover:text-stone-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addItem(product, material);
                }
              }}
              className="mt-8 w-full bg-stone-900 text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
            >
              <Check className="h-4 w-4" />
              Add to Cart
            </button>

            <div className="mt-10 border-t border-stone-200">
              {sections.map((section) => (
                <div key={section.id} className="border-b border-stone-200 last:border-b-0">
                  <button
                    onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-stone-700">{section.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-stone-500 transition-transform duration-300 ${
                        openSection === section.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSection === section.id && (
                    <div className="pb-4">
                      <p className="text-sm leading-relaxed text-stone-600">{section.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 sm:mt-28">
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
