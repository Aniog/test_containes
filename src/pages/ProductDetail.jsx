import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Vivid Aura Jewels', price: 42, desc: 'Gold ear cuff with crystal accent', category: 'Earrings', material: 'Gold', rating: 5 },
  { id: 2, name: 'Majestic Flora Nectar', price: 68, desc: 'Multicolor floral crystal necklace', category: 'Necklaces', material: 'Gold', rating: 5 },
  { id: 3, name: 'Golden Sphere Huggies', price: 38, desc: 'Chunky gold dome huggie earrings', category: 'Huggies', material: 'Gold', rating: 5 },
  { id: 4, name: 'Amber Lace Earrings', price: 54, desc: 'Textured gold filigree drop earrings', category: 'Earrings', material: 'Gold', rating: 5 },
  { id: 5, name: 'Royal Heirloom Set', price: 95, desc: 'Gift-boxed earring + necklace set', category: 'Necklaces', material: 'Gold', rating: 5 }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const [selectedMaterial, setSelectedMaterial] = useState(product.material);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const { addToCart } = useCart();

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart({ ...product, material: selectedMaterial }, quantity);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 20px 96px' }}>
      {/* Breadcrumb */}
      <div style={{ marginBottom: '48px', fontSize: '14px', color: '#999' }}>
        <Link to="/" style={{ color: '#999', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 8px' }}>/</span>
        <Link to="/shop" style={{ color: '#999', textDecoration: 'none' }}>Shop</Link>
        <span style={{ margin: '0 8px' }}>/</span>
        <span style={{ color: '#1a1a1a' }}>{product.name}</span>
      </div>

      {/* Product Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '64px', marginBottom: '96px' }}>
        {/* Left: Image Gallery */}
        <div>
          <div style={{ backgroundColor: '#f5f5f5', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
            <span style={{ color: '#999', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '2px' }}>{product.name}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[1, 2, 3, 4].map((thumb) => (
              <div key={thumb} style={{ backgroundColor: '#f5f5f5', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <span style={{ color: '#999', fontSize: '12px' }}>Img {thumb}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 style={{ fontFamily: 'serif', fontSize: '36px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>{product.name}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ color: '#f59e0b', fontSize: '18px' }}>
              {'★'.repeat(product.rating)}
            </div>
            <span style={{ color: '#999', fontSize: '14px' }}>(24 reviews)</span>
          </div>

          <p style={{ fontSize: '28px', fontWeight: '300', marginBottom: '32px' }}>${product.price}</p>

          <p style={{ color: '#4a4a4a', lineHeight: '1.6', marginBottom: '32px' }}>{product.desc}</p>

          {/* Variant Selector */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Material</h3>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['Gold', 'Silver'].map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  style={{
                    padding: '12px 24px',
                    border: selectedMaterial === material ? '2px solid #d4a574' : '2px solid #e5e5e5',
                    backgroundColor: selectedMaterial === material ? '#d4a574' : 'transparent',
                    color: selectedMaterial === material ? 'white' : '#1a1a1a',
                    cursor: 'pointer',
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '12px' }}>Quantity</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ width: '40px', height: '40px', border: '1px solid #e5e5e5', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '18px' }}
              >
                -
              </button>
              <span style={{ fontSize: '16px', minWidth: '40px', textAlign: 'center' }}>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{ width: '40px', height: '40px', border: '1px solid #e5e5e5', backgroundColor: 'transparent', cursor: 'pointer', fontSize: '18px' }}
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            style={{
              width: '100%',
              padding: '18px 32px',
              backgroundColor: '#d4a574',
              color: 'white',
              border: 'none',
              fontSize: '14px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              marginBottom: '48px'
            }}
          >
            Add to Cart - ${product.price * quantity}
          </button>

          {/* Accordions */}
          <div>
            {[
              { title: 'Description', content: product.desc + ' Our demi-fine jewelry is crafted with care and attention to detail, ensuring each piece meets our high standards of quality and beauty.' },
              { title: 'Materials & Care', content: '18K Gold Plated over brass. Hypoallergenic and nickel-free. To maintain the beauty of your jewelry, avoid contact with water, perfume, and chemicals. Store in a cool, dry place.' },
              { title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. 30-day return policy. If you are not completely satisfied with your purchase, you can return it for a full refund or exchange.' }
            ].map((accordion, index) => (
              <div key={index} style={{ borderTop: '1px solid #e5e5e5' }}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 0',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    textAlign: 'left'
                  }}
                >
                  {accordion.title}
                  <span style={{ fontSize: '18px' }}>{activeAccordion === index ? '−' : '+'}</span>
                </button>
                {activeAccordion === index && (
                  <div style={{ padding: '0 0 20px', color: '#4a4a4a', lineHeight: '1.6' }}>
                    {accordion.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 style={{ fontFamily: 'serif', fontSize: '36px', textAlign: 'center', marginBottom: '48px' }}>You May Also Like</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
          {relatedProducts.map((related) => (
            <Link
              key={related.id}
              to={`/product/${related.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ cursor: 'pointer' }}>
                <div style={{ backgroundColor: '#f5f5f5', height: '300px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#999', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>{related.name}</span>
                </div>
                <h3 style={{ fontFamily: 'serif', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{related.name}</h3>
                <p style={{ color: '#1a1a1a', fontWeight: '500' }}>${related.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
