import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/Layout';
import './App.css';

export default function App() {
  console.log('APP RENDERING');
  return (
    <Router>
      <CartProvider>
        <Layout>
          <div style={{color: 'black', fontSize: '30px', padding: '50px', background: '#FBF7F0'}}>
            APP + ROUTER + CART + LAYOUT TEST
          </div>
        </Layout>
      </CartProvider>
    </Router>
  );
}
