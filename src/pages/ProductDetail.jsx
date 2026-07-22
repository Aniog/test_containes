import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, ChevronLeft } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { Accordion } from "@/components/ui/Accordion";
import RelatedProducts from "@/components/shop/RelatedProducts";

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) || products[0];
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const containerRef = useRef(null);

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.imgId2, query: `[${product.titleId}] gold jewelry detail close up` },
  ];

  useEffect(() => {
    setSelectedVariant(product.variants[0]);
    setQuantity(1);
    setActiveImg(0);
    setAdded(false);
  }, [slug, product]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [slug]);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials} ${product.care}` },
    { title: "Shipping & Returns", content: product.shipping },
  ];

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 border-b border-taupe">
        <div className="flex items-center gap-2">
          <Link
            to="/shop"
            className="flex items-center gap-1 font-manrope text-[10px] uppercase tracking-widest text-warm-gray hover:text-gold transition-colors"
          >
            <ChevronLeft className="w-3 h-3" />
            Shop
          </Link>
          <span className="text-warm-gray-lt text-xs">/</span>
          <span className="font-manrope text-[10px] uppercase tracking-widest text-charcoal">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {/* Left: Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative overflow-hidden bg-taupe aspect-square">
              <img
                data-strk-img-id={images[activeImg].id}
                data-strk-img={images[activeImg].query}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src={SVG_PLACEHOLDER}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative overflow-hidden bg-taupe w-20 h-20 flex-shrink-0 transition-all duration-200 ${
                    activeImg === i
                      ? "ring-1 ring-charcoal ring-offset-1"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src={SVG_PLACEHOLDER}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-[10px] uppercase tracking-widest text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-charcoal font-light leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <StarRating
              rating={product.rating}
              count={product.reviewCount}
              className="mb-4"
            />

            {/* Price */}
            <p className="font-cormorant text-3xl text-charcoal font-light mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-manrope text-sm text-warm-gray leading-relaxed mb-8 border-b border-taupe pb-8"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-[10px] uppercase tracking-widest text-charcoal mb-3">
                Finish: <span className="text-warm-gray">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-[10px] uppercase tracking-widest px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? "border-charcoal bg-charcoal text-ivory"
                        : "border-taupe text-warm-gray hover:border-charcoal hover:text-charcoal"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-[10px] uppercase tracking-widest text-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-taupe w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-charcoal transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-warm-gray hover:text-charcoal transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              variant="primary"
              size="lg"
              className="w-full mb-3"
              onClick={handleAddToCart}
            >
              {added ? "Added to Cart ✓" : "Add to Cart"}
            </Button>

            <Button variant="outline" size="lg" className="w-full mb-8">
              Add to Wishlist
            </Button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              {["Free Shipping", "30-Day Returns", "Hypoallergenic"].map((t) => (
                <span
                  key={t}
                  className="font-manrope text-[10px] uppercase tracking-widest text-warm-gray flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts products={related} />
    </div>
  );
}
