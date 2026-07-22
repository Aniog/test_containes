import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronDown, Minus, Plus, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { products, getRelatedProducts, placeholderSrc } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useStrkImages } from "@/hooks/useStrkImages";
import { StarRating } from "@/components/ui/StarRating";
import { Price } from "@/components/ui/Price";
import { ProductImage } from "@/components/ui/ProductImage";
import { ProductCard } from "@/components/ui/ProductCard";

const accordionItems = [
  { key: "description", label: "Description" },
  { key: "materials", label: "Materials & Care" },
  { key: "shipping", label: "Shipping & Returns" },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || null
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState("description");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0] || null);
      setQuantity(1);
      setSelectedImage(0);
      setAdded(false);
    }
  }, [product]);

  const containerRef = useStrkImages([slug, selectedImage]);

  if (!product) {
    return (
      <div className="pt-32 text-center px-4">
        <h1 className="font-serif text-3xl mb-4">Product not found</h1>
        <Link to="/shop" className="text-velmora-gold underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const nextImage = () =>
    setSelectedImage((i) => (i + 1) % product.images.length);
  const prevImage = () =>
    setSelectedImage(
      (i) => (i - 1 + product.images.length) % product.images.length
    );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-velmora-cream">
      <div className="px-4 sm:px-6 lg:px-10 py-6 md:py-10">
        <button
          onClick={() => navigate(-1)}
          className="text-xs uppercase tracking-widest text-velmora-taupe hover:text-velmora-base transition-colors"
        >
          ← Back to Shop
        </button>
      </div>

      <div className="px-4 sm:px-6 lg:px-10 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden">
                <ProductImage
                  product={product}
                  index={selectedImage}
                  className="w-full h-full object-cover"
                  ratio="4x5"
                  width={900}
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 hover:bg-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 hover:bg-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={img.imgId}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-20 h-24 md:w-24 md:h-28 overflow-hidden border-2 transition-colors ${
                        selectedImage === idx
                          ? "border-velmora-gold"
                          : "border-transparent"
                      }`}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <ProductImage
                        product={product}
                        index={idx}
                        className="w-full h-full object-cover"
                        ratio="4x5"
                        width={200}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="lg:py-6">
              <p className="text-xs uppercase tracking-widest text-velmora-gold mb-2">
                {product.category}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest-custom text-velmora-base mb-3">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-5">
                <StarRating rating={product.rating} size={16} />
                <span className="text-sm text-velmora-taupe">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <Price
                price={product.price}
                originalPrice={product.originalPrice}
                className="text-xl md:text-2xl mb-6"
              />

              <p className="text-velmora-taupe leading-relaxed mb-8">
                {product.shortDescription}
              </p>

              {product.variants.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-velmora-base mb-3">
                    Metal Tone
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest border transition-all ${
                          selectedVariant === variant
                            ? "border-velmora-gold text-velmora-gold bg-velmora-gold/5"
                            : "border-velmora-hairline text-velmora-taupe hover:border-velmora-base hover:text-velmora-base"
                        }`}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-velmora-base mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-velmora-hairline">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-velmora-taupe hover:text-velmora-base"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-10 h-10 flex items-center justify-center text-sm font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-velmora-taupe hover:text-velmora-base"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-velmora-gold text-white py-4 text-xs uppercase tracking-widest hover:bg-velmora-gold-dark transition-colors flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <Check size={16} /> Added to Cart
                  </>
                ) : (
                  "Add to Cart"
                )}
              </button>

              {/* Accordions */}
              <div className="mt-10 border-t border-velmora-hairline">
                {accordionItems.map((item) => (
                  <div
                    key={item.key}
                    className="border-b border-velmora-hairline"
                  >
                    <button
                      onClick={() =>
                        setOpenAccordion(openAccordion === item.key ? "" : item.key)
                      }
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="text-xs uppercase tracking-widest text-velmora-base">
                        {item.label}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-velmora-taupe transition-transform duration-300 ${
                          openAccordion === item.key ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openAccordion === item.key && (
                      <div className="pb-5 text-sm text-velmora-taupe leading-relaxed">
                        {item.key === "description" && product.description}
                        {item.key === "materials" &&
                          `${product.materials} ${product.care}`}
                        {item.key === "shipping" &&
                          "Free worldwide shipping on orders over $75. Standard delivery 5–10 business days. Express options available at checkout. We accept returns within 30 days of delivery for unworn items in original packaging."}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="px-4 sm:px-6 lg:px-10 py-16 md:py-24 bg-velmora-sand">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-base mb-8 md:mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} showQuickAdd={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
