import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-cream pt-20 md:pt-24 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="font-serif text-2xl text-obsidian mb-4">Your bag is empty</h1>
          <p className="text-velvet-600 mb-6">Add some items to your bag before checking out.</p>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/shop" 
          className="inline-flex items-center text-sm text-velvet-600 hover:text-obsidian transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Link>

        <h1 className="font-serif text-3xl font-semibold text-obsidian mb-8">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-obsidian mb-6">
              Order Summary
            </h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-velvet-100 rounded overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="product-name text-xs">{item.name}</h3>
                    <p className="text-xs text-velvet-600">{item.variant}</p>
                    <p className="text-sm mt-1">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="hairline my-6" />
            <div className="flex justify-between text-sm">
              <span className="text-velvet-600">Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-velvet-600">Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="hairline my-4" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Form (Placeholder) */}
          <div>
            <h2 className="font-serif text-xl font-semibold text-obsidian mb-6">
              Contact & Shipping
            </h2>
            <p className="text-velvet-600 font-sans text-sm mb-4">
              Checkout functionality would connect to a payment processor here. 
              This is a frontend preview of the checkout experience.
            </p>
            <div className="bg-velvet-50 rounded-lg p-6 text-center">
              <p className="font-serif text-lg text-obsidian mb-2">
                Demo Mode
              </p>
              <p className="text-sm text-velvet-600">
                In production, this would connect to Stripe, Shopify Payments, or similar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
