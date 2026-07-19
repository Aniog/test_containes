import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Minus, Plus, Heart, Share2, Check } from "lucide-react";
import {
  getProductBySlug,
  getRelatedProducts,
  GALLERY_IDS,
} from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/StarRating";
import Accordion from "@/components/Accordion";
import ProductCard from "@/components/ProductCard";

function GallerySet({ ids, product, activeImageIndex, setActiveImageIndex }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row-reverse">
      <div className="relative aspect-[3/4] flex-1 overflow-hidden bg-velmora-champagne">
        {ids.map((id, index) => (
          <img
            key={id}
            data-strk-img-id={id}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} view ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              index === activeImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
        {ids.map((id, index) => (
          <button
            key={id}
            onClick={() => setActiveImageIndex(index)}
            className={`relative h-20 w-16 flex-shrink-0 overflow-hidden bg-velmora-champagne md:h-24 md:w-20 ${
              index === activeImageIndex
                ? "ring-1 ring-velmora-espresso"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              data-strk-img-id={`${id}-thumb`}
              data-strk-img={`[${product.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`Thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0] || "Gold"
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setQuantity(1);
      setActiveImageIndex(0);
      setAdded(false);
    }
  }, [product]);

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-32 text-center md:px-8">
        <h1 className="font-serif text-3xl text-velmora-espresso">
          Product not found
        </h1>
        <Link
          to="/shop"
          className="mt-6 inline-block text-xs uppercase tracking-widest text-velmora-gold underline"
        >
          Back to Shop
        </Link>
      </main>
    );
  }

  const productGalleryIds = GALLERY_IDS[slug] || GALLERY_IDS["vivid-aura-jewels"];
  const galleryProps = {
    product,
    activeImageIndex,
    setActiveImageIndex,
  };

  const related = getRelatedProducts(product, 4);

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: product.materialsCare },
    { title: "Shipping & Returns", content: product.shippingReturns },
  ];

  return (
    <main className="bg-velmora-cream pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-10">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-taupe transition-colors hover:text-velmora-espresso"
        >
          <ChevronLeft size={16} /> Back
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          {slug === "vivid-aura-jewels" && (
            <GallerySet
              ids={GALLERY_IDS["vivid-aura-jewels"]}
              {...galleryProps}
            />
          )}
          {slug === "majestic-flora-nectar" && (
            <GallerySet
              ids={GALLERY_IDS["majestic-flora-nectar"]}
              {...galleryProps}
            />
          )}
          {slug === "golden-sphere-huggies" && (
            <GallerySet
              ids={GALLERY_IDS["golden-sphere-huggies"]}
              {...galleryProps}
            />
          )}
          {slug === "amber-lace-earrings" && (
            <GallerySet
              ids={GALLERY_IDS["amber-lace-earrings"]}
              {...galleryProps}
            />
          )}
          {slug === "royal-heirloom-set" && (
            <GallerySet
              ids={GALLERY_IDS["royal-heirloom-set"]}
              {...galleryProps}
            />
          )}
          {!GALLERY_IDS[slug] && (
            <GallerySet ids={GALLERY_IDS["vivid-aura-jewels"]} {...galleryProps} />
          )}

          {/* Details */}
          <div className="flex flex-col">
            <div className="flex items-start justify-between">
              <div>
                <h1
                  id={product.titleId}
                  className="font-serif text-3xl uppercase tracking-widest text-velmora-espresso md:text-4xl"
                >
                  {product.name}
                </h1>
                <div className="mt-3 flex items-center gap-3">
                  <StarRating rating={product.rating} size={14} />
                  <span className="text-sm text-velmora-taupe">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Add to wishlist"
                  className="flex h-10 w-10 items-center justify-center border border-velmora-linen text-velmora-taupe transition-colors hover:border-velmora-espresso hover:text-velmora-espresso"
                >
                  <Heart size={18} />
                </button>
                <button
                  aria-label="Share"
                  className="flex h-10 w-10 items-center justify-center border border-velmora-linen text-velmora-taupe transition-colors hover:border-velmora-espresso hover:text-velmora-espresso"
                >
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            <p className="mt-2 text-2xl font-light text-velmora-espresso">
              ${product.price}
            </p>

            <p
              id={product.descId}
              className="mt-6 text-sm leading-relaxed text-velmora-mocha md:text-base"
            >
              {product.shortDescription}
            </p>

            <div className="mt-8">
              <span className="text-xs uppercase tracking-widest text-velmora-taupe">
                Tone
              </span>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-2 text-xs uppercase tracking-widest transition-all ${
                      selectedVariant === variant
                        ? "border-velmora-espresso bg-velmora-espresso text-white"
                        : "border-velmora-linen text-velmora-mocha hover:border-velmora-espresso"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="text-xs uppercase tracking-widest text-velmora-taupe">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-velmora-linen">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-11 items-center justify-center text-velmora-taupe hover:text-velmora-espresso"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="min-w-[2rem] text-center text-sm text-velmora-espresso">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex h-11 w-11 items-center justify-center text-velmora-taupe hover:text-velmora-espresso"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className={`mt-8 flex w-full items-center justify-center gap-2 py-4 text-xs uppercase tracking-widest text-white transition-colors ${
                added
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-velmora-gold hover:bg-velmora-gold-dark"
              }`}
            >
              {added ? (
                <>
                  <Check size={16} /> Added to Bag
                </>
              ) : (
                "Add to Cart"
              )}
            </button>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="mx-auto mt-16 max-w-7xl px-4 md:mt-24 md:px-8">
        <div className="mb-8 text-center md:mb-10">
          <p className="text-xs uppercase tracking-widest text-velmora-taupe">
            Complete the Look
          </p>
          <h2 className="mt-2 font-serif text-3xl text-velmora-espresso md:text-4xl">
            You May Also Like
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
