import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CreditCard, Truck, Shield } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { toast } from 'sonner'

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    country: 'US',
    cardNumber: '',
    expiry: '',
    cvc: '',
    nameOnCard: '',
  })

  const shipping = cartTotal >= 75 ? 0 : 5.95
  const tax = cartTotal * 0.08
  const orderTotal = cartTotal + shipping + tax

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      toast.success('Order placed successfully! Thank you for shopping with Velmora.')
      clearCart()
      setIsSubmitting(false)
      navigate('/shop')
    }, 2000)
  }

  if (cartItems.length === 0) {
    return (
      <main className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <p className="serif-heading text-2xl text-[var(--velmora-text-secondary)] mb-4">
            Your cart is empty
          </p>
          <Link to="/shop" className="btn-outline inline-flex text-xs sm:text-sm">
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-[var(--velmora-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <Link
            to="/shop"
            className="flex items-center gap-2 text-sm text-[var(--velmora-text-muted)] hover:text-[var(--velmora-text)] transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="serif-heading text-2xl sm:text-3xl text-[var(--velmora-text)] mt-2 sm:mt-4">
            Checkout
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: Forms */}
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              {/* Contact */}
              <section>
                <h2 className="serif-heading text-xl sm:text-2xl text-[var(--velmora-text)] mb-4 sm:mb-6">
                  Contact Information
                </h2>
                <div>
                  <label htmlFor="email" className="block text-xs tracking-wider uppercase text-[var(--velmora-text-secondary)] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--velmora-border)] bg-[var(--velmora-white)] text-[var(--velmora-text)] text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors min-h-[48px]"
                    placeholder="your@email.com"
                  />
                </div>
              </section>

              {/* Shipping */}
              <section>
                <h2 className="serif-heading text-xl sm:text-2xl text-[var(--velmora-text)] mb-4 sm:mb-6">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs tracking-wider uppercase text-[var(--velmora-text-secondary)] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--velmora-border)] bg-[var(--velmora-white)] text-[var(--velmora-text)] text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs tracking-wider uppercase text-[var(--velmora-text-secondary)] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--velmora-border)] bg-[var(--velmora-white)] text-[var(--velmora-text)] text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors min-h-[48px]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-xs tracking-wider uppercase text-[var(--velmora-text-secondary)] mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--velmora-border)] bg-[var(--velmora-white)] text-[var(--velmora-text)] text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors min-h-[48px]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="apartment" className="block text-xs tracking-wider uppercase text-[var(--velmora-text-secondary)] mb-2">
                      Apartment, suite, etc. (optional)
                    </label>
                    <input
                      type="text"
                      id="apartment"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--velmora-border)] bg-[var(--velmora-white)] text-[var(--velmora-text)] text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors min-h-[48px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-xs tracking-wider uppercase text-[var(--velmora-text-secondary)] mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--velmora-border)] bg-[var(--velmora-white)] text-[var(--velmora-text)] text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors min-h-[48px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="state" className="block text-xs tracking-wider uppercase text-[var(--velmora-text-secondary)] mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[var(--velmora-border)] bg-[var(--velmora-white)] text-[var(--velmora-text)] text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors min-h-[48px]"
                      />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-xs tracking-wider uppercase text-[var(--velmora-text-secondary)] mb-2">
                        ZIP
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[var(--velmora-border)] bg-[var(--velmora-white)] text-[var(--velmora-text)] text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors min-h-[48px]"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section>
                <h2 className="serif-heading text-xl sm:text-2xl text-[var(--velmora-text)] mb-4 sm:mb-6">
                  Payment
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-xs tracking-wider uppercase text-[var(--velmora-text-secondary)] mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      maxLength="19"
                      className="w-full px-4 py-3 border border-[var(--velmora-border)] bg-[var(--velmora-white)] text-[var(--velmora-text)] text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors min-h-[48px]"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div>
                    <label htmlFor="nameOnCard" className="block text-xs tracking-wider uppercase text-[var(--velmora-text-secondary)] mb-2">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="nameOnCard"
                      name="nameOnCard"
                      value={formData.nameOnCard}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[var(--velmora-border)] bg-[var(--velmora-white)] text-[var(--velmora-text)] text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors min-h-[48px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-xs tracking-wider uppercase text-[var(--velmora-text-secondary)] mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        required
                        maxLength="5"
                        className="w-full px-4 py-3 border border-[var(--velmora-border)] bg-[var(--velmora-white)] text-[var(--velmora-text)] text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors min-h-[48px]"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvc" className="block text-xs tracking-wider uppercase text-[var(--velmora-text-secondary)] mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        id="cvc"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleChange}
                        required
                        maxLength="4"
                        className="w-full px-4 py-3 border border-[var(--velmora-border)] bg-[var(--velmora-white)] text-[var(--velmora-text)] text-sm focus:outline-none focus:border-[var(--velmora-gold)] transition-colors min-h-[48px]"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Place order button - mobile only */}
              <div className="lg:hidden">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full disabled:opacity-50 min-h-[48px]"
                >
                  {isSubmitting ? 'Processing...' : `Place Order — $${orderTotal.toFixed(2)}`}
                </button>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <div className="bg-[var(--velmora-bg-secondary)] p-4 sm:p-6">
                  <h2 className="serif-heading text-xl text-[var(--velmora-text)] mb-4 sm:mb-6">
                    Order Summary
                  </h2>

                  {/* Items */}
                  <div className="space-y-4 mb-6">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[var(--velmora-white)] overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="product-name text-xs text-[var(--velmora-text)]">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[var(--velmora-text-muted)] mt-0.5 capitalize">
                            {item.variant} tone · Qty {item.quantity}
                          </p>
                          <p className="text-sm text-[var(--velmora-text)] mt-1">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="border-t border-[var(--velmora-border)] pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--velmora-text-secondary)]">Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--velmora-text-secondary)]">Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--velmora-text-secondary)]">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-[var(--velmora-border)] pt-3 flex justify-between">
                      <span className="text-[var(--velmora-text)] font-medium">Total</span>
                      <span className="serif-heading text-xl">${orderTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[var(--velmora-text-muted)]">
                      <Truck className="w-4 h-4" />
                      <span>Free shipping on orders over $75</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--velmora-text-muted)]">
                      <Shield className="w-4 h-4" />
                      <span>Secure checkout with SSL encryption</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--velmora-text-muted)]">
                      <CreditCard className="w-4 h-4" />
                      <span>All major cards accepted</span>
                    </div>
                  </div>

                  {/* Place order button - desktop only */}
                  <div className="hidden lg:block mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full disabled:opacity-50 min-h-[48px]"
                    >
                      {isSubmitting ? 'Processing...' : 'Place Order'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
