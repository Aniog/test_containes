import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const PizzaBuilder = ({ pizza, setPizza, onAddToCart }) => {
  const containerRef = useRef(null)

  const sizes = [
    { name: 'small', label: 'Small (10")', basePrice: 9.99 },
    { name: 'medium', label: 'Medium (12")', basePrice: 12.99 },
    { name: 'large', label: 'Large (14")', basePrice: 15.99 },
    { name: 'xlarge', label: 'X-Large (16")', basePrice: 18.99 }
  ]

  const crusts = [
    { name: 'thin', label: 'Thin Crust', price: 0 },
    { name: 'regular', label: 'Regular Crust', price: 0 },
    { name: 'thick', label: 'Thick Crust', price: 1.50 },
    { name: 'stuffed', label: 'Stuffed Crust', price: 2.99 }
  ]

  const toppings = [
    { name: 'pepperoni', label: 'Pepperoni', price: 1.50 },
    { name: 'sausage', label: 'Italian Sausage', price: 1.50 },
    { name: 'mushrooms', label: 'Mushrooms', price: 1.00 },
    { name: 'peppers', label: 'Bell Peppers', price: 1.00 },
    { name: 'onions', label: 'Red Onions', price: 1.00 },
    { name: 'olives', label: 'Black Olives', price: 1.25 },
    { name: 'tomatoes', label: 'Fresh Tomatoes', price: 1.25 },
    { name: 'spinach', label: 'Fresh Spinach', price: 1.25 },
    { name: 'cheese', label: 'Extra Cheese', price: 2.00 },
    { name: 'chicken', label: 'Grilled Chicken', price: 2.50 },
    { name: 'bacon', label: 'Crispy Bacon', price: 2.00 },
    { name: 'pineapple', label: 'Pineapple', price: 1.50 }
  ]

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const calculatePrice = () => {
    const sizePrice = sizes.find(s => s.name === pizza.size)?.basePrice || 12.99
    const crustPrice = crusts.find(c => c.name === pizza.crust)?.price || 0
    const toppingsPrice = pizza.toppings.reduce((total, toppingName) => {
      const topping = toppings.find(t => t.name === toppingName)
      return total + (topping?.price || 0)
    }, 0)
    
    return (sizePrice + crustPrice + toppingsPrice).toFixed(2)
  }

  useEffect(() => {
    setPizza(prev => ({ ...prev, price: parseFloat(calculatePrice()) }))
  }, [pizza.size, pizza.crust, pizza.toppings])

  const handleSizeChange = (size) => {
    setPizza(prev => ({ ...prev, size }))
  }

  const handleCrustChange = (crust) => {
    setPizza(prev => ({ ...prev, crust }))
  }

  const handleToppingToggle = (toppingName) => {
    setPizza(prev => ({
      ...prev,
      toppings: prev.toppings.includes(toppingName)
        ? prev.toppings.filter(t => t !== toppingName)
        : [...prev.toppings, toppingName]
    }))
  }

  const handleAddToCart = () => {
    const pizzaName = `Custom ${sizes.find(s => s.name === pizza.size)?.label} Pizza`
    const toppingsList = pizza.toppings.map(t => toppings.find(topping => topping.name === t)?.label).join(', ')
    
    onAddToCart({
      name: pizzaName,
      description: `${crusts.find(c => c.name === pizza.crust)?.label}${toppingsList ? ` with ${toppingsList}` : ''}`,
      price: parseFloat(calculatePrice()),
      type: 'custom'
    })
  }

  return (
    <div ref={containerRef} className="space-y-8">
      <div className="text-center">
        <h2 id="builder-title" className="text-3xl font-bold text-gray-900 mb-2">Build Your Perfect Pizza</h2>
        <p id="builder-subtitle" className="text-lg text-gray-600">Customize every detail to create your ideal pizza</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pizza Preview */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Pizza</h3>
          <div className="relative">
            <div
              className="w-full h-64 rounded-full bg-gradient-to-br from-yellow-200 to-orange-300 flex items-center justify-center"
              data-strk-bg-id="pizza-preview-bg-8f2a9c"
              data-strk-bg="[builder-subtitle] [builder-title] custom pizza with toppings"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="400"
            >
              <div className="text-6xl">🍕</div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-gray-900">
                {sizes.find(s => s.name === pizza.size)?.label} Pizza
              </p>
              <p className="text-sm text-gray-600">
                {crusts.find(c => c.name === pizza.crust)?.label}
              </p>
              {pizza.toppings.length > 0 && (
                <p className="text-sm text-gray-600 mt-1">
                  {pizza.toppings.map(t => toppings.find(topping => topping.name === t)?.label).join(', ')}
                </p>
              )}
              <p className="text-2xl font-bold text-red-600 mt-2">${calculatePrice()}</p>
            </div>
          </div>
        </div>

        {/* Customization Options */}
        <div className="space-y-6">
          {/* Size Selection */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Size</h3>
            <div className="grid grid-cols-2 gap-3">
              {sizes.map((size) => (
                <button
                  key={size.name}
                  onClick={() => handleSizeChange(size.name)}
                  className={`p-3 rounded-lg border-2 transition-colors text-left ${
                    pizza.size === size.name
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{size.label}</div>
                  <div className="text-sm text-gray-600">${size.basePrice}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Crust Selection */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Crust</h3>
            <div className="space-y-2">
              {crusts.map((crust) => (
                <button
                  key={crust.name}
                  onClick={() => handleCrustChange(crust.name)}
                  className={`w-full p-3 rounded-lg border-2 transition-colors text-left ${
                    pizza.crust === crust.name
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{crust.label}</span>
                    <span className="text-sm text-gray-600">
                      {crust.price > 0 ? `+$${crust.price}` : 'Free'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Toppings Selection */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Toppings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {toppings.map((topping) => (
                <button
                  key={topping.name}
                  onClick={() => handleToppingToggle(topping.name)}
                  className={`p-3 rounded-lg border-2 transition-colors text-left ${
                    pizza.toppings.includes(topping.name)
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{topping.label}</span>
                    <span className="text-sm text-gray-600">+${topping.price}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <span>🛒</span>
            <span>Add to Cart - ${calculatePrice()}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PizzaBuilder