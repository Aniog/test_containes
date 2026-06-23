import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const products = [
  { 
    id: 1, 
    name: 'VIVID AURA JEWELS', 
    price: 42, 
    description: 'Gold ear cuff with crystal accent. Perfect for adding a subtle sparkle to your everyday look. Hypoallergenic and 18K gold plated.', 
    category: 'Earrings', 
    material: 'Gold', 
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'], 
    rating: 4.8, 
    reviews: 124, 
    inStock: true 
  },
  { 
    id: 2, 
    name: 'MAJESTIC FLORA NECTAR', 
    price: 68, 
    description: 'Multicolor floral crystal necklace. A statement piece that transitions beautifully from day to evening.', 
    category: 'Necklaces', 
    material: 'Gold', 
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'], 
    rating: 4.9, 
    reviews: 89, 
    inStock: true 
  },
  { 
    id: 3, 
    name: 'GOLDEN SPHERE HUGGIES', 
    price: 38, 
    description: 'Chunky gold dome huggie earrings. Comfortable for everyday wear with a bold, modern aesthetic.', 
    category: 'Huggies', 
    material: 'Gold', 
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'], 
    rating: 4.7, 
    reviews: 156, 
    inStock: true 
  },
  { 
    id: 4, 
    name: 'AMBER LACE EARRINGS', 
    price: 54, 
    description: 'Textured gold filigree drop earrings. Intricate detailing that catches the light beautifully.', 
    category: 'Earrings', 
    material: 'Gold', 
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'], 
    rating: 4.6, 
    reviews: 97, 
    inStock: true 
  },
  { 
    id: 5, 
    name: 'ROYAL HEIRLOOM SET', 
    price: 95, 
    description: 'Gift-boxed earring + necklace set. The perfect gift for someone special, including premium packaging.', 
    category: 'Sets', 
    material: 'Gold', 
    images: ['/api/placeholder/600/600', '/api/placeholder/600/600'], 
    rating: 5.0, 
    reviews: 62, 
    inStock: true 
  },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const addToCart = () => {
    alert(`Added ${quantity} x ${product.name} (${selectedVariant}) to cart!`);
  };

  return (
    <div className="min-h-screen bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <nav className="mb-8 text-sm">
          <Link to="/" className="text-velmora-gray hover:text-velmora-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="text-velmora-gray hover:text-velmora-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="mb-4 bg-velmora-beige rounded-lg h-96 flex items-center justify-center">
              <span className="text-velmora-gray">Main Product Image</span>
            </div>
            <div className="flex gap-4">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 bg-velmora-beige rounded-md flex items-center justify-center border-2 ${
                    selectedImage === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <span className="text-xs text-velmora-gray">{i + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-serif uppercase tracking-widest mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-velmora-gold text-xl">★</span>
              ))}
              <span className="text-sm text-velmora-gray ml-2">({product.reviews} reviews)</span>
            </div>

            <p className="text-3xl text-velmora-gold font-semibold mb-6">${product.price}</p>

            <p className="text-lg mb-8 leading-relaxed text-velmora-charcoal">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="block text-sm uppercase tracking-wide mb-3">Material</label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2 border ${
                      selectedVariant === variant
                        ? 'bg-velmora-charcoal text-white border-velmora-charcoal'
                        : 'bg-white text-velmora-charcoal border-gray-300 hover:border-velmora-gold'
                    } transition-colors`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm uppercase tracking-wide mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-velmora-gold transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={addToCart}
              className="w-full bg-velmora-charcoal text-white py-4 uppercase tracking-wider hover:bg-velmora-gold transition-colors duration-300 mb-8"
            >
              Add to Cart - ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {[
                { title: 'Description', content: product.description },
                { title: 'Materials & Care', content: '18K Gold Plated over brass. Hypoallergenic. Avoid contact with water, perfumes, and lotions. Store in provided pouch.' },
                { title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $50. 30-day return policy. See our returns page for details.' },
              ].map((acc, i) => (
                <div key={i} className="border-b border-gray-200">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                    className="w-full py-4 flex justify-between items-center uppercase tracking-wide text-sm"
                  >
                    {acc.title}
                    <span className="text-velmora-gold">{activeAccordion === i ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === i && (
                    <div className="pb-4 text-velmora-gray leading-relaxed">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-serif uppercase tracking-widest text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.filter(p => p.id !== product.id).slice(0, 5).map(related => (
              <Link key={related.id} to={`/product/${related.id}`} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-velmora-beige rounded-md mb-4 flex items-center justify-center">
                  <span className="text-velmora-gray text-sm">Related Product</span>
                </div>
                <h3 className="font-serif text-sm uppercase tracking-wide mb-2">{related.name}</h3>
                <p className="text-velmora-gold font-semibold">${related.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetail;
