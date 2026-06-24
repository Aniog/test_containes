import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";
import { PLACEHOLDER_SRC, formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { isOpen, close, lines, removeItem, setQty, totals } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, [isOpen, lines.length]);

  // Body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Esc to close
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  if (!isOpen) return null;

  const shippingThreshold = 0;
  const subtotal = totals.subtotal;

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button
        type="button"
        aria-label="Close cart"
        onClick={close}
        className="absolute inset-0 bg-[#13100E]/40 fade-in"
      />
      <aside
        ref={containerRef}
        className="absolute right-0 top-0 h-full w-full sm:max-w-[460px] bg-[#FAF7F2] shadow-[0_0_60px_-10px_rgba(19,16,14,0.2)] flex flex-col slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DCCD]">
          <h2 className="font-serif text-2xl text-[#13100E]">Your Bag</h2>
          <button
            type="button"
            onClick={close}
            className="w-9 h-9 flex items-center justify-center hover:bg-[#F2EDE5] transition"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Lines */}
        <div className="flex-1 overflow-y-auto">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-8 text-center">
              <div className="w-16 h-16 rounded-full border border-[#E5DCCD] flex items-center justify-center mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8A7A66" strokeWidth="1.25" aria-hidden="true">
                  <path d="M6 7h12l-1.5 12a2 2 0 01-2 1.8H9.5a2 2 0 01-2-1.8L6 7z" />
                  <path d="M9 7V5a3 3 0 116 0v2" />
                </svg>
              </div>
              <p className="font-serif text-2xl text-[#13100E] mb-2">Your bag is empty</p>
              <p className="text-sm text-[#8A7A66] mb-8 max-w-[260px]">
                Begin with a piece you'll wear every day.
              </p>
              <Link
                to="/shop"
                onClick={close}
                className="inline-block bg-[#13100E] text-white text-[12px] uppercase tracking-[0.2em] font-medium px-8 py-4 hover:bg-[#2A211B] transition"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="px-6 py-2 divide-y divide-[#E5DCCD]">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-4 py-5">
                  <Link
                    to={`/shop/${line.slug}`}
                    onClick={close}
                    className="block w-20 h-24 flex-shrink-0 bg-[#F2EDE5] overflow-hidden"
                  >
                    <img
                      alt={line.name}
                      width="80"
                      height="96"
                      data-strk-img-id={`cart-${line.imageId}-${line.key}`}
                      data-strk-img={line.imageQ}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src={PLACEHOLDER_SRC}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex justify-between items-start gap-3">
                      <Link
                        to={`/shop/${line.slug}`}
                        onClick={close}
                        className="product-name text-[12px] text-[#13100E] hover:text-[#B8935C] transition leading-snug"
                      >
                        {line.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(line.key)}
                        aria-label={`Remove ${line.name}`}
                        className="text-[#8A7A66] hover:text-[#13100E] transition flex-shrink-0"
                      >
                        <Trash2 size={15} strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="text-xs text-[#8A7A66] mt-1">{line.variant}</p>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-[#E5DCCD]">
                        <button
                          type="button"
                          onClick={() => setQty(line.key, line.qty - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-[#F2EDE5] transition disabled:opacity-30"
                          aria-label="Decrease quantity"
                          disabled={line.qty <= 1}
                        >
                          <Minus size={13} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums">{line.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(line.key, line.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-[#F2EDE5] transition"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-[#13100E] tabular-nums">
                        {formatPrice(line.price * line.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t border-[#E5DCCD] px-6 pt-5 pb-7 bg-[#FAF7F2]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#8A7A66] uppercase tracking-[0.15em]">Subtotal</span>
              <span className="font-serif text-2xl text-[#13100E] tabular-nums">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-[#8A7A66] mb-5">
              Free worldwide shipping. Taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="w-full bg-[#13100E] text-white text-[13px] uppercase tracking-[0.2em] font-medium py-4 hover:bg-[#2A211B] transition"
            >
              Checkout · {formatPrice(subtotal)}
            </button>
            <button
              type="button"
              onClick={close}
              className="w-full mt-3 text-[12px] uppercase tracking-[0.2em] text-[#8A7A66] hover:text-[#13100E] transition py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
