import React, { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, X, Plus, Minus } from 'lucide-react'

export default function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, removeItem, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart()

  const handleCheckout = () => {
    alert('Thank you for your order! We\'ll have your delicious burgers ready in 15-20 minutes.')
    clearCart()
    setIsOpen(false)
  }

  return (
    <>
      {/* Cart Button */}
      <div className="fixed top-20 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-burger-orange hover:bg-orange-600 text-white rounded-full p-3 shadow-lg relative"
        >
          <ShoppingCart className="h-6 w-6" />
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] h-5 flex items-center justify-center">
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </div>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-semibold text-burger-dark">Your Order</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                    <p className="text-sm text-gray-400 mt-2">Add some delicious burgers to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <Card key={item.id} className="overflow-hidden">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-burger-dark">{item.name}</h3>
                              <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                              <div className="flex items-center justify-between mt-2">
                                <span className="font-bold text-burger-orange">${item.price.toFixed(2)}</span>
                                <div className="flex items-center space-x-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="h-8 w-8 p-0"
                                  >
                                    <Minus className="h-4 w-4" />
                                  </Button>
                                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="h-8 w-8 p-0"
                                  >
                                    <Plus className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t p-6 space-y-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-burger-orange">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="space-y-2">
                    <Button
                      onClick={handleCheckout}
                      className="w-full bg-burger-orange hover:bg-orange-600 text-white font-semibold py-3"
                    >
                      Checkout - ${getTotalPrice().toFixed(2)}
                    </Button>
                    <Button
                      onClick={clearCart}
                      variant="outline"
                      className="w-full border-gray-300 text-gray-600 hover:bg-gray-50"
                    >
                      Clear Cart
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}