import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

export default function CartDrawer() {
  const { isOpen, closeCart, items, itemCount } = useCart();
  
  console.log('CartDrawer render:', { isOpen, itemCount, items });
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="absolute right-0 top-0 h-full w-96 bg-white p-6">
        <button onClick={closeCart}><X size={24} /></button>
        <h2>Cart ({itemCount})</h2>
        {items.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
