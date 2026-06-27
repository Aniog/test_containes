import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, Heart } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/ui/StarRating";
import ProductGallery from "@/components/product/ProductGallery";
import AccordionItem from "@/components/product/AccordionItem";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || products[0];
  const { addToCart } = useCart();

  const [variant, setVariant] = useState("gold");
  const [qty, setQty] = useState(1);

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-20 md:pt-24 pb-16 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          <ProductGallery productId={product.id} />

          <div className="flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="font-serif text-2xl md:text-3xl tracking-[0.08em] uppercase font-light">
                  {product.name}
                </h1>
                <p className="text-sm text-[#6E6862] mt-1">{product.subtitle}</p>
              </div>
              <button className="p-2 hover:bg-[#1A1816]/5 rounded-full transition-colors" aria-label="Wishlist">
                <Heart size={18} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <StarRating rating={product.rating} size={14} />
              <span className="text-xs text-[#6E6862]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-xl md:text-2xl font-light mt-5">${product.price}</p>

            <div className="mt-6 space-y-4">
              <div>
                <span className="text-[11px] tracking-[0.12em] uppercase text-[#6E6862] block mb-2">
                  Metal Tone
                </span>
                <div className="flex gap-2">
                  {["gold", "silver"].map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={`px-5 py-2 text-xs tracking-[0.1em] uppercase rounded-full border transition-colors ${
                        variant === v
                          ? "border-[#1A1816] bg-[#1A1816] text-white"
                          : "border-[#1A1816]/20 text-[#1A1816] hover:border-[#1A1816]/40"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] tracking-[0.12em] uppercase text-[#6E6862] block mb-2">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-[#1A1816]/20 rounded-full px-1">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="p-2 hover:opacity-60"
                    aria-label="Decrease"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-sm font-medium w-8 text-center">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="p-2 hover:opacity-60"
                    aria-label="Increase"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => addToCart(product, variant, qty)}
              className="mt-7 w-full bg-[#B8966A] text-white text-xs tracking-[0.14em] uppercase font-medium py-3.5 rounded hover:bg-[#A6835B] transition-colors"
            >
              Add to Bag
            </button>

            <div className="mt-8">
              <AccordionItem title="Description">{product.description}</AccordionItem>
              <AccordionItem title="Materials & Care">{product.care}</AccordionItem>
              <AccordionItem title="Shipping & Returns">{product.shipping}</AccordionItem>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-[#EAE5E0] rounded overflow-hidden mb-3">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      p.id === 1
                        ? "1535632066927-ab7c9ab60908"
                        : p.id === 2
                        ? "1599643478518-17477f983af0"
                        : p.id === 3
                        ? "1635767798638-3e2523c0188b"
                        : p.id === 4
                        ? "1611591437281-46057d3fe0e9"
                        : "1602173574767-37ac01994b2a"
                    }?w=600&q=80`}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-sm tracking-[0.06em] uppercase">
                  {p.name}
                </h3>
                <p className="text-xs text-[#6E6862] mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
