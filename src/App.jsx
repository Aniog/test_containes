import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/Layout';

function HomeTest() { return <h1 style={{color: 'black', padding: '40px'}}>Home Test OK</h1>; }
function ShopTest() { return <h1 style={{color: 'black', padding: '40px'}}>Shop Test OK</h1>; }
function PDPTest() { return <h1 style={{color: 'black', padding: '40px'}}>PDP Test OK</h1>; }

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomeTest />} />
            <Route path="/shop" element={<ShopTest />} />
            <Route path="/product/:id" element={<PDPTest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
