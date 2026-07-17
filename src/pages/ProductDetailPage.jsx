import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductBySlug, getRelatedProducts } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTone, setSelectedTone] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const found = getProductBySlug(slug);
    if (!found) {
      navigate("/shop");
      return;
    }
    setProduct(found);
    setRelatedProducts(getRelatedProducts(found.id, 4));
    setSelectedImage(0);
    setSelectedTone("gold");
    setQuantity(1);
  }, [slug, navigate]);

  if (!product) return null;

  const tones = ["gold", "silver"];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedTone);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <main className="min-h-screen pt-20 sm:pt-24">
      <div className="container-velmora py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-velmora-cream rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 transition-colors ${
                      selectedImage === i
                        ? "border-accent"
                        : "border-transparent hover:border-velmora-charcoal/30"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl uppercase tracking-wider text-velmora-charcoal">
                {product.name}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-light text-accent">
                ${product.price}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex text-accent">
                  {"★".repeat(5)}
                </div>
                <span className="text-sm text-velmora-charcoal/60">
                  ({product.reviews})
                </span>
              </div>
            </div>

            <p className="text-velmora-charcoal/80 leading-relaxed">
              {product.description}
            </p>

            {/* Tone Selector */}
            <div>
              <label className="block text-sm font-medium text-velmora-charcoal mb-2">
                Tone
              </label>
              <div className="flex gap-2">
                {tones.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-4 py-2 rounded-full text-sm uppercase tracking-wide border transition-all ${
                      selectedTone === tone
                        ? "bg-velmora-charcoal text-white border-velmora-charcoal"
                        : "bg-transparent text-velmora-charcoal border-velmora-charcoal/30 hover:border-velmora-charcoal"
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-velmora-charcoal mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-velmora-charcoal/30 flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                >
                  −
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-velmora-charcoal/30 flex items-center justify-center hover:border-velmora-charcoal transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary py-3 sm:py-4 text-base"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="space-y-3 pt-4 border-t border-border">
              {/* Description */}
              <div>
                <button
                  onClick={() => toggleAccordion("description")}
                  className="flex items-center justify-between w-full py-3 text-left"
                >
                  <span className="text-sm uppercase tracking-wide font-medium">
                    Description
                  </span>
                  <span className="text-xs">
                    {activeAccordion === "description" ? "−" : "+"}
                  </span>
                </button>
                {activeAccordion === "description" && (
                  <div className="pb-3 text-sm text-velmora-charcoal/80 leading-relaxed">
                    <p>{product.description}</p>
                    <p className="mt-2">
                      Each piece is crafted with care, featuring 18K gold plating over high-quality brass
                      with a protective coating for everyday wear. Hypoallergenic and nickel-free.
                    </p>
                  </div>
                )}
              </div>

              {/* Materials & Care */}
              <div>
                <button
                  onClick={() => toggleAccordion("materials")}
                  className="flex items-center justify-between w-full py-3 text-left"
                >
                  <span className="text-sm uppercase tracking-wide font-medium">
                    Materials & Care
                  </span>
                  <span className="text-xs">
                    {activeAccordion === "materials" ? "−" : "+"}
                  </span>
                </button>
                {activeAccordion === "materials" && (
                  <div className="pb-3 text-sm text-velmora-charcoal/80 leading-relaxed">
                    <p className="font-medium text-velmora-charcoal mb-1">Materials</p>
                    <p>18K gold plated over brass. Hypoallergenic. Nickel-free.</p>
                    <p className="font-medium text-velmora-charcoal mt-3 mb-1">Care</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Avoid contact with water, perfume, and lotions</li>
                      <li>Store in the provided pouch when not worn</li>
                      <li>Clean gently with a soft jewelry cloth</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Shipping & Returns */}
              <div>
                <button
                  onClick={() => toggleAccordion("shipping")}
                  className="flex items-center justify-between w-full py-3 text-left"
                >
                  <span className="text-sm uppercase tracking-wide font-medium">
                    Shipping & Returns
                  </span>
                  <span className="text-xs">
                    {activeAccordion === "shipping" ? "−" : "+"}
                  </span>
                </button>
                {activeAccordion === "shipping" && (
                  <div className="pb-3 text-sm text-velmora-charcoal/80 leading-relaxed">
                    <p className="font-medium text-velmora-charcoal mb-1">Shipping</p>
                    <p>Free worldwide shipping on all orders. Delivery within 5-7 business days.</p>
                    <p className="font-medium text-velmora-charcoal mt-3 mb-1">Returns</p>
                    <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 sm:mt-24 pt-12 border-t border-border">
            <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wider text-center mb-8 sm:mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <a
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="group block"
                >
                  <div className="aspect-square bg-velmora-cream rounded-lg overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-sm uppercase tracking-wide font-medium text-velmora-charcoal">
                    {p.name}
                  </h3>
                  <p className="text-sm text-accent mt-1">${p.price}</p>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
