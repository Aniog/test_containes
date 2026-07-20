import { ImageHelper } from "@strikingly/sdk";
import { ChevronLeft } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AccordionItem from "../components/products/AccordionItem.jsx";
import ProductCard from "../components/products/ProductCard.jsx";
import ProductGallery from "../components/products/ProductGallery.jsx";
import QuantitySelector from "../components/shared/QuantitySelector.jsx";
import RatingStars from "../components/shared/RatingStars.jsx";
import {
  formatCurrency,
  getProductBySlug,
  getRelatedProducts,
} from "../data/storefront.js";
import { useStorefront } from "../hooks/useStorefront.jsx";
import strkImgConfig from "../strk-img-config.json";

const ProductPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useStorefront();
  const product = getProductBySlug(slug);
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || "Gold Tone");
  const [quantity, setQuantity] = useState(1);
  const [openPanel, setOpenPanel] = useState("Description");
  const containerRef = useRef(null);

  useEffect(() => {
    setActiveIndex(0);
    setQuantity(1);
    setSelectedVariant(product?.variants[0] || "Gold Tone");
  }, [product]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeIndex, slug]);

  if (!product) {
    return (
      <div className="container-shell flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
        <p className="eyebrow">Product not found</p>
        <h1 className="editorial-heading mt-4 text-5xl">This piece has left the collection.</h1>
        <button type="button" className="button-primary mt-8" onClick={() => navigate("/shop") }>
          Return to Shop
        </button>
      </div>
    );
  }

  const accordionItems = [
    { title: "Description", content: product.longDescription },
    { title: "Materials & Care", content: product.materialsCare },
    { title: "Shipping & Returns", content: product.shippingReturns },
  ];

  return (
    <div ref={containerRef} className="pb-16 pt-28 sm:pt-32">
      <section className="container-shell">
        <Link className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-stone-600 transition hover:text-amber-700" to="/shop">
          <ChevronLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <ProductGallery
            product={product}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
          />

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">{product.category}</p>
            <h1 className="product-name mt-3 text-3xl sm:text-4xl">{product.name}</h1>
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-2xl font-semibold text-stone-950">
                {formatCurrency(product.price)}
              </p>
              <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
            </div>
            <p className="mt-5 text-base leading-8 text-stone-600">
              {product.shortDescription}
            </p>

            <div className="mt-8 space-y-6 rounded-[2rem] border border-stone-200 bg-stone-100 p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Finish
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        selectedVariant === variant
                          ? "border-stone-950 bg-stone-950 text-stone-50"
                          : "border-stone-300 bg-stone-50 text-stone-700 hover:border-amber-600 hover:text-amber-700"
                      }`}
                      onClick={() => setSelectedVariant(variant)}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                    Quantity
                  </p>
                </div>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>

              <button
                type="button"
                className="button-primary w-full"
                onClick={() => addToCart(product, selectedVariant, quantity)}
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 rounded-[2rem] border border-stone-200 bg-stone-50 px-6">
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.title}
                  title={item.title}
                  content={item.content}
                  open={openPanel === item.title}
                  onToggle={() =>
                    setOpenPanel((current) => (current === item.title ? "" : item.title))
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell mt-16 border-t border-stone-200 pt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">You may also like</p>
            <h2 className="editorial-heading mt-3 text-4xl">More from the edit</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard
              key={item.slug}
              idPrefix="related-products"
              onAddToCart={addToCart}
              product={item}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
