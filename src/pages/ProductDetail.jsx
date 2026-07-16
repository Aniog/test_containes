import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { getProductById, getRelatedProducts } from "../data/products";
import { useCart } from "../context/CartContext";

const variants = [
  { id: "gold", label: "Gold Tone" },
  { id: "silver", label: "Silver Tone" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState("gold");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-bg pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-text">Product Not Found</h1>
          <Link
            to="/shop"
            className="inline-block mt-6 font-sans text-xs uppercase tracking-widest text-velmora-gold hover:text-velmora-gold-hover"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const accordionItems = [
    {
      id: "description",
      title: "Description",
      content: product.description,
    },
    {
      id: "materials",
      title: "Materials & Care",
      content: (
        <div className="space-y-2">
          <p className="font-sans text-sm text-velmora-text-secondary">
            <strong className="text-velmora-text">Material:</strong>{" "}
            {product.material}
          </p>
          <p className="font-sans text-sm text-velmora-text-secondary">
            <strong className="text-velmora-text">Care:</strong> {product.care}
          </p>
        </div>
      ),
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Estimated delivery: 5-10 business days. 30-day return policy for unworn items in original packaging. For more details, visit our Shipping & Returns page.",
    },
  ];

  return (
    <div className="min-h-screen bg-velmora-bg pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            to="/shop"
            className="font-sans text-xs uppercase tracking-widest text-velmora-text-secondary hover:text-velmora-gold transition-colors"
          >
            &larr; Back to Shop
          </Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-velmora-muted overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
                      selectedImage === i
                        ? "border-velmora-gold"
                        : "border-transparent hover:border-velmora-border"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="md:sticky md:top-28 md:self-start">
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-velmora-text">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-velmora-gold text-velmora-gold"
                        : "text-velmora-border"
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-text-secondary">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-xl font-medium text-velmora-text mt-4">
              ${product.price}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-velmora-text-secondary leading-relaxed mt-4">
              {product.description}
            </p>

            <div className="w-full h-px bg-velmora-border my-6" />

            {/* Variant selector */}
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-velmora-text mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v.id)}
                    className={`px-6 py-2.5 font-sans text-sm border transition-all duration-300 ${
                      selectedVariant === v.id
                        ? "border-velmora-gold bg-velmora-gold text-white"
                        : "border-velmora-border text-velmora-text hover:border-velmora-text"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-widest text-velmora-text mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-4 border border-velmora-border w-fit px-4 py-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:text-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  className="p-1 hover:text-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-gold text-white py-4 mt-8 font-sans text-xs uppercase tracking-widest hover:bg-velmora-gold-hover transition-all duration-300"
            >
              {addedToCart ? "Added to Cart" : "Add to Cart"}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-velmora-border">
              {accordionItems.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-velmora-border"
                >
                  <button
                    onClick={() =>
                      setOpenAccordion(
                        openAccordion === item.id ? null : item.id
                      )
                    }
                    className="w-full flex items-center justify-between py-4 font-sans text-xs uppercase tracking-widest text-velmora-text hover:text-velmora-gold transition-colors"
                  >
                    {item.title}
                    {openAccordion === item.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === item.id
                        ? "max-h-96 pb-4"
                        : "max-h-0"
                    }`}
                  >
                    <div className="font-sans text-sm text-velmora-text-secondary leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-28">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-velmora-text font-light">
                You May Also Like
              </h2>
              <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.id}
                  to={`/product/${rp.id}`}
                  className="group block"
                >
                  <div className="aspect-[3/4] bg-velmora-muted overflow-hidden mb-3">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-text truncate">
                    {rp.name}
                  </h3>
                  <p className="font-sans text-sm font-medium text-velmora-text mt-1">
                    ${rp.price}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}