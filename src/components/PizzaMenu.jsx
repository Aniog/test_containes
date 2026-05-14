import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const PizzaMenu = ({ onAddToCart }) => {
  const containerRef = useRef(null)

  const pizzas = [
    {
      id: 1,
      name: 'Margherita Classic',
      description: 'Fresh mozzarella, tomato sauce, and basil on our signature thin crust',
      price: 14.99,
      popular: true,
      ingredients: ['Mozzarella', 'Tomato Sauce', 'Fresh Basil', 'Olive Oil']
    },
    {
      id: 2,
      name: 'Pepperoni Supreme',
      description: 'Premium pepperoni with extra cheese and our special tomato sauce',
      price: 16.99,
      popular: true,
      ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce', 'Italian Herbs']
    },
    {
      id: 3,
      name: 'Meat Lovers Deluxe',
      description: 'Pepperoni, sausage, bacon, and ham with extra cheese',
      price: 19.99,
      popular: false,
      ingredients: ['Pepperoni', 'Italian Sausage', 'Bacon', 'Ham', 'Mozzarella']
    },
    {
      id: 4,
      name: 'Veggie Garden',
      description: 'Fresh vegetables including bell peppers, mushrooms, onions, and olives',
      price: 15.99,
      popular: false,
      ingredients: ['Bell Peppers', 'Mushrooms', 'Red Onions', 'Black Olives', 'Tomatoes']
    },
    {
      id: 5,
      name: 'Hawaiian Paradise',
      description: 'Ham and pineapple with mozzarella cheese',
      price: 16.99,
      popular: false,
      ingredients: ['Ham', 'Pineapple', 'Mozzarella', 'Tomato Sauce']
    },
    {
      id: 6,
      name: 'BBQ Chicken Ranch',
      description: 'Grilled chicken with BBQ sauce, red onions, and ranch drizzle',
      price: 18.99,
      popular: true,
      ingredients: ['Grilled Chicken', 'BBQ Sauce', 'Red Onions', 'Mozzarella', 'Ranch']
    },
    {
      id: 7,
      name: 'Mediterranean Delight',
      description: 'Feta cheese, olives, tomatoes, and spinach with olive oil base',
      price: 17.99,
      popular: false,
      ingredients: ['Feta Cheese', 'Kalamata Olives', 'Sun-dried Tomatoes', 'Spinach']
    },
    {
      id: 8,
      name: 'Spicy Buffalo Chicken',
      description: 'Buffalo chicken with blue cheese, celery, and hot sauce',
      price: 18.99,
      popular: false,
      ingredients: ['Buffalo Chicken', 'Blue Cheese', 'Celery', 'Hot Sauce', 'Mozzarella']
    }
  ]

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const handleAddToCart = (pizza) => {
    onAddToCart({
      name: pizza.name,
      description: pizza.description,
      price: pizza.price,
      type: 'preset'
    })
  }

  return (
    <div ref={containerRef} className="space-y-8">
      <div className="text-center">
        <h2 id="menu-title" className="text-3xl font-bold text-gray-900 mb-2">Our Signature Pizzas</h2>
        <p id="menu-subtitle" className="text-lg text-gray-600">Handcrafted with the finest ingredients and baked to perfection</p>
      </div>

      {/* Popular Pizzas Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
          <span className="mr-2">🔥</span>
          Most Popular
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pizzas.filter(pizza => pizza.popular).map((pizza) => (
            <div key={pizza.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  alt={pizza.name}
                  className="w-full h-48 object-cover"
                  data-strk-img-id={`pizza-${pizza.id}-img-${Math.random().toString(36).substr(2, 6)}`}
                  data-strk-img={`[pizza-${pizza.id}-name] [pizza-${pizza.id}-desc] delicious pizza`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h4 id={`pizza-${pizza.id}-name`} className="text-xl font-semibold text-gray-900 mb-2">{pizza.name}</h4>
                <p id={`pizza-${pizza.id}-desc`} className="text-gray-600 mb-3">{pizza.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Ingredients:</p>
                  <p className="text-sm text-gray-700">{pizza.ingredients.join(', ')}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">${pizza.price}</span>
                  <button
                    onClick={() => handleAddToCart(pizza)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <span>🛒</span>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Pizzas Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">All Pizzas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  alt={pizza.name}
                  className="w-full h-48 object-cover"
                  data-strk-img-id={`pizza-all-${pizza.id}-img-${Math.random().toString(36).substr(2, 6)}`}
                  data-strk-img={`[pizza-all-${pizza.id}-name] [pizza-all-${pizza.id}-desc] gourmet pizza`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                {pizza.popular && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <h4 id={`pizza-all-${pizza.id}-name`} className="text-xl font-semibold text-gray-900 mb-2">{pizza.name}</h4>
                <p id={`pizza-all-${pizza.id}-desc`} className="text-gray-600 mb-3">{pizza.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Ingredients:</p>
                  <p className="text-sm text-gray-700">{pizza.ingredients.join(', ')}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">${pizza.price}</span>
                  <button
                    onClick={() => handleAddToCart(pizza)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <span>🛒</span>
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offers */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-lg p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">🎉 Special Offer!</h3>
        <p className="text-lg mb-4">Buy 2 pizzas and get 20% off your entire order!</p>
        <p className="text-sm opacity-90">*Valid for orders over $30. Cannot be combined with other offers.</p>
      </div>
    </div>
  )
}

export default PizzaMenu