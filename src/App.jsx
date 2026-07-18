import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
// import CartDrawer from '@/components/layout/CartDrawer';
import './App.css';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-warmwhite text-espresso flex flex-col">
          <Navbar />
          <main className="flex-1" style={{ padding: 40, fontSize: 24 }}>
            <h1>Hello Velmora</h1>
            <p>Navbar + Footer test</p>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
