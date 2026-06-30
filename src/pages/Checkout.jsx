import { Link } from "react-router-dom";
import { useCart, formatPrice } from "@/context/CartContext.jsx";

/**
 * Lightweight placeholder checkout. The real version would be wired to a
 * payment provider. For now we show a friendly summary and a contact step so
 * the navigation contract still works.
 */
export default function Checkout() {
  const { lines, subtotal, clearCart } = useCart();

  if (lines.length === 0) {
    return (
      <div className="container-wide py-32 text-center flex flex-col items-center gap-4">
        <p className="font-serif text-3xl font-light text-ink">Your bag is empty</p>
        <p className="font-sans text-sm text-ink-muted">
          Add a piece to begin your order.
        </p>
        <Link to="/shop" className="btn-primary mt-2">Shop the collection</Link>
      </div>
    );
  }

  return (
    <div className="container-wide py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <span className="eyebrow">Checkout</span>
        <h1 className="font-serif text-4xl md:text-5xl text-ink font-light leading-[1.05] mt-3">
          Almost there.
        </h1>
        <p className="font-sans text-[15px] text-ink-muted leading-relaxed mt-4 max-w-md">
          This is a placeholder checkout. In production, this is where a real
          payment provider would be connected. For now, review the summary
          below.
        </p>

        <div className="mt-10 border-t border-line">
          {lines.map((line) => (
            <div
              key={line.lineId}
              className="flex items-center justify-between py-5 border-b border-line"
            >
              <div>
                <p className="font-serif text-lg text-ink font-light">
                  {line.product.name}
                </p>
                <p className="font-sans text-xs text-ink-muted mt-1">
                  {line.variant.label} · qty {line.quantity}
                </p>
              </div>
              <p className="font-sans text-sm text-ink">
                {formatPrice(line.lineTotal)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="font-sans text-sm text-ink-muted uppercase tracking-[0.18em]">
            Subtotal
          </span>
          <span className="font-sans text-base text-ink font-medium">
            {formatPrice(subtotal)}
          </span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => {
              clearCart();
            }}
            className="btn-primary btn-block sm:flex-1"
          >
            Place order
          </button>
          <Link to="/shop" className="btn-ghost">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
