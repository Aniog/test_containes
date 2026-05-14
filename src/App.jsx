import { useState } from 'react'
import PizzaBuilder from './components/PizzaBuilder'
import PizzaMenu from './components/PizzaMenu'
import OrderSummary from './components/OrderSummary'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('menu')
  const [cart, setCart] = useState([])
  const [customPizza, setCustomPizza] = useState({
    size: 'medium',
    crust: 'regular',
    toppings: [],
    price: 12.99
  })

  const addToCart = (item) => {
    setCart([...cart, { ...item, id: Date.now() }])
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-3xl">🍕</div>
              <h1 className="text-2xl font-bold">Tony's Pizza Palace</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentView('cart')}
                className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <span>🛒</span>
                <span>Cart ({cart.length})</span>
                <span>${getTotalPrice()}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setCurrentView('menu')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                currentView === 'menu'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Menu
            </button>
            <button
              onClick={() => setCurrentView('builder')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                currentView === 'builder'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Build Your Own
            </button>
            <button
              onClick={() => setCurrentView('cart')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                currentView === 'cart'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Order Summary
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {currentView === 'menu' && (
          <PizzaMenu onAddToCart={addToCart} />
        )}
        {currentView === 'builder' && (
          <PizzaBuilder
            pizza={customPizza}
            setPizza={setCustomPizza}
            onAddToCart={addToCart}
          />
        )}
        {currentView === 'cart' && (
          <OrderSummary
            cart={cart}
            onRemoveFromCart={removeFromCart}
            totalPrice={getTotalPrice()}
          />
        )}
      </main>
    </div>
  )
}

export default App
