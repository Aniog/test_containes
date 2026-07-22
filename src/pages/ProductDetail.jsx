import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCartDispatch } from "@/hooks/useCart";
import { Minus, Plus, ChevronDown, Star } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useCartDispatch();
  const product = products.find((p) => p.id === id);
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] || "gold");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openSection, setOpenSection] = useState("description");

  if (!product) {
    return (
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-2xl text-stone-900">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-xs tracking-[0.2em] uppercase text-amber-800">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-stone-100">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square overflow-hidden bg-stone-100 border-2 transition-colors ${
                    activeImage === index ? "border-amber-800" : "border-transparent"
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="font-serif text-3xl text-stone-900 uppercase tracking-wide">{product.name}</h1>
            <p className="mt-2 text-lg text-stone-600">${product.price}</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex text-amber-700">
                {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-stone-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-stone-600">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs tracking-[0.15em] uppercase text-stone-500 mb-3">Tone</p>
              <div className="flex gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-4 py-2 text-xs tracking-[0.15em] uppercase border transition-colors ${
                      selectedTone === tone
                        ? "bg-stone-900 text-white border-stone-900"
                        : "bg-white text-stone-700 border-stone-200 hover:border-stone-900"
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs tracking-[0.15em] uppercase text-stone-500 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-stone-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10 flex items-center justify-center hover:text-amber-800 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10 flex items-center justify-center hover:text-amber-800 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              onClick={() =>
                dispatch({
                  type: "ADD_ITEM",
                  payload: {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    images: product.images,
                    tone: selectedTone,
                  },
                })
              }
              className="mt-8 w-full bg-amber-800 text-white py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-amber-900 transition-colors"
            >
              Add to Cart
            </button>

            <div className="mt-10 border-t border-stone-200">
              {[
                { key: "description", label: "Description", content: product.details },
                { key: "materials", label: "Materials & Care", content: product.materials },
                { key: "shipping", label: "Shipping & Returns", content: product.shipping },
              ].map((section) => (
                <div key={section.key} className="border-b border-stone-200 last:border-b-0">
                  <button
                    onClick={() => toggleSection(section.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs tracking-[0.15em] uppercase text-stone-900">{section.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-stone-500 transition-transform duration-300 ${
                        openSection === section.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection === section.key ? "max-h-40 pb-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-stone-600">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
