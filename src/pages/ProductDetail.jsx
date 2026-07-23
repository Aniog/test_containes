import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E5DED5]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-sm tracking-[0.1em] uppercase text-[#1C1917] font-medium"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <div className="text-sm text-[#6B6358] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState("Gold");
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);
  const related = products.filter((p) => p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-['Cormorant_Garamond'] text-3xl text-[#6B6358]">
            Product not found
          </h2>
          <Link to="/shop" className="btn-primary inline-block mt-6">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
        },
      });
    }
    dispatch({ type: "OPEN_CART" });
  };

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs tracking-[0.08em] uppercase text-[#6B6358] mb-8">
          <Link to="/" className="hover:text-[#1C1917] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#1C1917] transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-[#1C1917]">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-[#E5DED5] rounded-sm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === i
                      ? "border-[#B8943C]"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h1 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#1C1917] tracking-[0.08em] uppercase">
              {product.name}
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-[#B8943C] fill-[#B8943C]"
                        : "text-[#E5DED5]"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6358]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl text-[#B8943C] font-medium">
              ${product.price}
            </p>

            <p className="text-[#6B6358] leading-relaxed">
              {product.description}
            </p>

            <div className="border-t border-[#E5DED5] pt-6">
              <p className="text-xs tracking-[0.1em] uppercase text-[#6B6358] mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {["Gold", "Silver"].map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-sm border rounded-sm transition-all duration-300 ${
                      selectedVariant === variant
                        ? "border-[#B8943C] bg-[#B8943C] text-white"
                        : "border-[#E5DED5] text-[#6B6358] hover:border-[#B8943C]"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-xs tracking-[0.1em] uppercase text-[#6B6358]">
                Quantity
              </p>
              <div className="flex items-center border border-[#E5DED5] rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 hover:bg-[#E5DED5] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm font-medium min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 hover:bg-[#E5DED5] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-[#B8943C] text-white py-3.5 text-sm tracking-[0.12em] uppercase font-medium hover:bg-[#D4B96A] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${product.price}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-[#E5DED5]">
              <Accordion title="Description">
                {product.description} Each piece is hand-finished and
                inspected to ensure the highest quality.
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  <strong>Material:</strong> 18K gold plated over brass.
                  Hypoallergenic, nickel-free, lead-free.
                </p>
                <p className="mt-2">
                  <strong>Care:</strong> Avoid contact with water, perfume,
                  and lotions. Store in a dry place. Gently polish with a soft
                  cloth to restore shine.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders. Orders are processed
                  within 1-2 business days.
                </p>
                <p className="mt-2">
                  30-day return policy for unworn items in original packaging.
                  Full refund or exchange.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 md:mt-24 pt-16 border-t border-[#E5DED5]">
          <h2 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#1C1917] font-medium text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="group"
              >
                <div className="aspect-[3/4] bg-[#E5DED5] rounded-sm overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-['Cormorant_Garamond'] text-xs tracking-[0.15em] uppercase text-[#1C1917] font-medium truncate">
                    {item.name}
                  </h3>
                  <p className="text-[#B8943C] text-sm font-medium mt-1">
                    ${item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}