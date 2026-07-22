import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

console.log('ProductDetail: Component loading...');

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  
  console.log('ProductDetail: product =', product);

  if (!product) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <Link to="/shop">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: selectedVariant,
      quantity: quantity,
    });
    alert('Added to cart!');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>Back</button>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <img src={product.images[selectedImage]} alt={product.name} style={{ width: '100%' }} />
        </div>
        
        <div>
          <h1>{product.name}</h1>
          <p>${product.price}</p>
          <p>{product.description}</p>
          
          <button onClick={handleAddToCart} style={{ padding: '10px 20px', marginTop: '20px' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
