import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronRight, ShoppingBag, Heart, Truck, RefreshCcw, ShieldCheck } from "lucide-react";
import { findProduct, relatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Container from "@/components/common/Container";
import Stars from "@/components/common/Stars";
import ProductGallery from "@/components/product/ProductGallery";
import VariantSelector from "@/components/product/VariantSelector";
import QuantitySelector from "@/components/product/QuantitySelector";
import ProductAccordion from "@/components/product/ProductAccordion";
import RelatedProducts from "@/components/product/RelatedProducts";

const VARIANT_OPTIONS = [
  { value: "Gold",   label: "18K Gold",   swatch: "#B8956A" },
  { value: "Silver", label: "Sterling Silver", swatch: "#C8C2B8" },
];

export default function Product() {
  const { id } = useParams();
  const product = findProduct(id);
  const { addToCart } = useCart();

  const [variant, setVariant] = useState(VARIANT_OPTIONS[0].value);
  const [quantity, setQuantity] = useState(1);
  const [favorited, setFavorited] = useState(false);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const sections = [
    { key: "desc",      title: "Description",         content: product.description },
    { key: "materials", title: "Materials & Care",    content: `${product.materials} ${product.care}` },
    { key: "shipping",  title: "Shipping & Returns", content: product.shipping },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 sm:pt-28 bg-cream">
        <Container>
          <nav className="flex items-center gap-1.5 text-xs text-muted label-eyebrow" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-ink transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
            <ChevronRight size={12} />
            <Link
              to={`/shop?cat=${product.category}`}
              className="hover:text-ink transition-colors capitalize"
            >
              {product.category}
            </Link>
            <ChevronRight size={12} />
            <span className="text-ink truncate">{product.name}</span>
          </nav>
        </Container>
      </div>

      <section className="py-10 sm:py-14 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <ProductGallery product={product} />
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-7">
              {product.badge && (
                <span className="label-eyebrow text-gold">{product.badge}</span>
              )}
              <div>
                <h1
                  className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.05] tracking-tight"
                  style={{ fontWeight: 400 }}
                >
                  {product.name}
                </h1>
                <p className="mt-3 text-sm text-muted">{product.accent}</p>
              </div>

              <div className="flex items-center gap-3">
                <Stars rating={product.rating} />
                <span className="text-xs text-muted">
                  {product.rating.toFixed(1)} · {product.reviewCount} reviews
                </span>
              </div>

              <p className="text-2xl text-ink">${product.price}</p>

              <p className="text-base text-muted leading-relaxed">
                {product.shortDescription}
              </p>

              <div className="hairline" />

              <VariantSelector
                options={VARIANT_OPTIONS}
                value={variant}
                onChange={setVariant}
                label="Finish"
              />

              <QuantitySelector value={quantity} onChange={setQuantity} />

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() =>
                    addToCart(product, { variant, quantity })
                  }
                  className="btn btn-primary flex-1"
                >
                  <ShoppingBag size={14} strokeWidth={1.5} />
                  Add to Cart · ${product.price * quantity}
                </button>
                <button
                  onClick={() => setFavorited((f) => !f)}
                  aria-label="Add to wishlist"
                  className={`btn btn-outline px-5 ${
                    favorited ? "bg-cream-warm" : ""
                  }`}
                >
                  <Heart
                    size={14}
                    strokeWidth={1.5}
                    fill={favorited ? "currentColor" : "none"}
                  />
                </button>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs text-muted">
                <li className="flex items-center gap-2">
                  <Truck size={14} className="text-gold" />
                  Free worldwide shipping over $80
                </li>
                <li className="flex items-center gap-2">
                  <RefreshCcw size={14} className="text-gold" />
                  30-day returns
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-gold" />
                  Hypoallergenic
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <ProductAccordion sections={sections} />
            </div>
            <div className="lg:col-span-5 hidden lg:block" />
          </div>
        </Container>
      </section>

      <RelatedProducts product={product} />
    </>
  );
}
