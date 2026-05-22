import './App.css'
import HomePage from './components/HomePage'
import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  )
}

export default App
