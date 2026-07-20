import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown, Check } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/products/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [variant, setVariant] = useState(product?.variants?.[0] || "gold");
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState("description");
  const { dispatch } = useCart();

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-ink-secondary">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-flex btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        images: product.images,
        variant,
      },
    });
  };

  const sections = [
    { key: "description", label: "Description", body: product.description },
    { key: "materials", label: "Materials & Care", body: product.care },
    { key: "shipping", label: "Shipping & Returns", body: product.shipping },
  ];

  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-sm bg-surface-alt">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(idx)}
                  className={`h-20 w-20 overflow-hidden rounded-sm border ${
                    selectedImage === idx ? "border-ink" : "border-transparent"
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="eyebrow mb-2">{product.category}</p>
              <h1 className="product-name text-2xl md:text-3xl">{product.name}</h1>
              <p className="mt-2 text-2xl font-medium">${product.price}</p>
              <div className="mt-2 flex items-center gap-2 text-sm text-ink-secondary">
                <div className="flex items-center gap-1 text-accent">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-medium text-ink">{product.rating}</span>
                </div>
                <span>·</span>
                <span>{product.reviewCount} reviews</span>
              </div>
            </div>

            <p className="text-sm text-ink-secondary leading-relaxed">{product.description}</p>

            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-ink-secondary">Finish</p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${
                      variant === v ? "border-ink bg-ink text-white" : "border-border hover:border-ink"
                    }`}
                  >
                    {variant === v && <Check className="h-3.5 w-3.5" />}
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded-sm">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-ink-secondary hover:text-ink"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-3 py-2 text-sm font-medium">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2 text-ink-secondary hover:text-ink"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button type="button" onClick={handleAddToCart} className="flex-1 btn-primary">
                Add to Cart
              </button>
            </div>

            <div className="divide-y divide-border-soft border-t border-border-soft">
              {sections.map((section) => (
                <div key={section.key} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenSection(openSection === section.key ? "" : section.key)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span className="text-sm font-semibold tracking-[0.12em] uppercase">{section.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-ink-muted transition-transform ${
                        openSection === section.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openSection === section.key && (
                    <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{section.body}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-24">
          <div className="mb-8">
            <p className="eyebrow mb-2">You May Also Like</p>
            <h2 className="section-heading text-2xl md:text-3xl">Related Products</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetail;
