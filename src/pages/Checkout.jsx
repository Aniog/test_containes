import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, CreditCard, CheckCircle, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { createOrder } from '@/api/orders'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', zip: '', country: '', card: '', expiry: '', cvv: '' })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (items.length === 0) return
    setSubmitting(true)
    setError(null)
    try {
      await createOrder({
        customer_name: form.name,
        customer_email: form.email,
        items: items.map(i => ({ product_id: i.id, title: i.title, qty: i.qty, price: i.price })),
        total_amount: cartTotal,
        status: 'pending',
        shipping_address: `${form.address}, ${form.city}, ${form.zip}, ${form.country}`,
      })
      clearCart()
      setSuccess(true)
    } catch (err) {
      setError(err.message || 'Order failed. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Order Placed!</h2>
        <p className="text-gray-400 mb-6">Thank you for your purchase. You'll receive a confirmation email shortly.</p>
        <Link to="/store">
          <Button size="lg">Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <ShoppingBag className="w-12 h-12 text-gray-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-white mb-2">Your cart is empty</h2>
        <Link to="/store"><Button>Browse Store</Button></Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/store" className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Store
      </Link>

      <h1 className="text-2xl md:text-3xl font-bold text-white mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-white font-semibold mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400 text-xs mb-1 block">Full Name</label>
                <Input name="name" value={form.name} onChange={onChange} placeholder="John Doe" required />
              </div>
              <div>
                <label className="text-gray-400 text-xs mb-1 block">Email</label>
                <Input name="email" type="email" value={form.email} onChange={onChange} placeholder="john@example.com" required />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-white font-semibold mb-4">Shipping Address</h2>
            <div className="space-y-3">
              <div>
                <label className="text-gray-400 text-xs mb-1 block">Street Address</label>
                <Input name="address" value={form.address} onChange={onChange} placeholder="123 Main St" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">City</label>
                  <Input name="city" value={form.city} onChange={onChange} placeholder="New York" required />
                </div>
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">ZIP Code</label>
                  <Input name="zip" value={form.zip} onChange={onChange} placeholder="10001" required />
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-xs mb-1 block">Country</label>
                <Input name="country" value={form.country} onChange={onChange} placeholder="United States" required />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-indigo-400" /> Payment Details
            </h2>
            <div className="space-y-3">
              <div>
                <label className="text-gray-400 text-xs mb-1 block">Card Number</label>
                <Input name="card" value={form.card} onChange={onChange} placeholder="4242 4242 4242 4242" required maxLength={19} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">Expiry</label>
                  <Input name="expiry" value={form.expiry} onChange={onChange} placeholder="MM/YY" required maxLength={5} />
                </div>
                <div>
                  <label className="text-gray-400 text-xs mb-1 block">CVV</label>
                  <Input name="cvv" value={form.cvv} onChange={onChange} placeholder="123" required maxLength={4} />
                </div>
              </div>
            </div>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <Button type="submit" size="lg" className="w-full" disabled={submitting}>
            {submitting ? 'Processing...' : `Place Order · $${cartTotal.toFixed(2)}`}
          </Button>
        </form>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 sticky top-24">
            <h2 className="text-white font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=60'}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-medium truncate">{item.title}</p>
                    <p className="text-gray-400 text-xs">Qty: {item.qty}</p>
                  </div>
                  <span className="text-white text-xs font-medium">${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 space-y-2">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="flex justify-between text-white font-bold text-lg pt-2 border-t border-gray-700">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
