import { useState } from 'react'

const OrderSummary = ({ cart, onRemoveFromCart, totalPrice }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    deliveryInstructions: ''
  })
  const [orderType, setOrderType] = useState('delivery')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const deliveryFee = orderType === 'delivery' ? 3.99 : 0
  const tax = (parseFloat(totalPrice) * 0.08).toFixed(2)
  const finalTotal = (parseFloat(totalPrice) + deliveryFee + parseFloat(tax)).toFixed(2)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCustomerInfo(prev => ({ ...prev, [name]: value }))
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    
    if (cart.length === 0) {
      alert('Your cart is empty!')
      return
    }

    if (!customerInfo.name || !customerInfo.phone) {
      alert('Please fill in your name and phone number.')
      return
    }

    if (orderType === 'delivery' && !customerInfo.address) {
      alert('Please provide a delivery address.')
      return
    }

    // Simulate order placement
    setIsOrderPlaced(true)
    
    // In a real app, you would send this data to your backend
    console.log('Order placed:', {
      items: cart,
      customer: customerInfo,
      orderType,
      paymentMethod,
      totals: {
        subtotal: totalPrice,
        deliveryFee,
        tax,
        total: finalTotal
      }
    })
  }

  if (isOrderPlaced) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">Order Placed Successfully!</h2>
          <p className="text-lg text-green-700 mb-6">
            Thank you, {customerInfo.name}! Your delicious pizza is being prepared.
          </p>
          <div className="bg-white rounded-lg p-4 mb-6">
            <p className="text-gray-700">
              <strong>Order Total:</strong> ${finalTotal}
            </p>
            <p className="text-gray-700">
              <strong>Estimated {orderType === 'delivery' ? 'Delivery' : 'Pickup'} Time:</strong> 25-35 minutes
            </p>
            {orderType === 'delivery' && (
              <p className="text-gray-700">
                <strong>Delivery Address:</strong> {customerInfo.address}
              </p>
            )}
          </div>
          <p className="text-sm text-gray-600">
            We'll send you updates via {customerInfo.phone}
            {customerInfo.email && ` and ${customerInfo.email}`}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Summary</h2>
        <p className="text-lg text-gray-600">Review your order and complete checkout</p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🍕</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
          <p className="text-gray-600 mb-6">Add some delicious pizzas to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Order ({cart.length} items)</h3>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      <p className="text-lg font-semibold text-red-600 mt-2">${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => onRemoveFromCart(item.id)}
                      className="ml-4 text-red-600 hover:text-red-800 transition-colors"
                      title="Remove from cart"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Totals */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Totals</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">${totalPrice}</span>
                </div>
                {orderType === 'delivery' && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee:</span>
                    <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (8%):</span>
                  <span className="font-semibold">${tax}</span>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total:</span>
                    <span className="text-lg font-bold text-red-600">${finalTotal}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Checkout Information</h3>
            
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              {/* Order Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Order Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      orderType === 'delivery'
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    🚚 Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      orderType === 'pickup'
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    🏪 Pickup
                  </button>
                </div>
              </div>

              {/* Customer Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="your@email.com"
                />
              </div>

              {orderType === 'delivery' && (
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Street address, apartment/unit, city, state, zip code"
                  />
                </div>
              )}

              <div>
                <label htmlFor="deliveryInstructions" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Instructions
                </label>
                <textarea
                  id="deliveryInstructions"
                  name="deliveryInstructions"
                  value={customerInfo.deliveryInstructions}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Any special requests or delivery instructions..."
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`w-full p-3 rounded-lg border-2 transition-colors text-left ${
                      paymentMethod === 'card'
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    💳 Credit/Debit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cash')}
                    className={`w-full p-3 rounded-lg border-2 transition-colors text-left ${
                      paymentMethod === 'cash'
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    💵 Cash on {orderType === 'delivery' ? 'Delivery' : 'Pickup'}
                  </button>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>🍕</span>
                <span>Place Order - ${finalTotal}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderSummary