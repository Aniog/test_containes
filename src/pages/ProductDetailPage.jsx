import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Plus, Minus, ChevronRight, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import products from '../data/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState('Gold');

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Product Not Found
          </h2>
          <button
            onClick={() => navigate('/shop')}
            className="btn-primary"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[rgb(var(--color-muted))] mb-8">
          <Link to="/" className="hover:text-[rgb(var(--color-foreground))]">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-[rgb(var(--color-foreground))]">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-[rgb(var(--color-foreground))]">{product.name}</span>
        </nav>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm mb-8 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div>
            <div className="mb-4 bg-[rgb(var(--color-card))] aspect-square overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 bg-[rgb(var(--color-card))] overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-[rgb(var(--color-accent))]'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1
              className="product-name text-3xl md:text-4xl mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-[rgb(var(--color-accent))]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    className={i < Math.floor(product.rating) ? '' : 'opacity-30'}
                  />
                ))}
              </div>
              <span className="text-sm text-[rgb(var(--color-muted))]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              ${product.price}
            </p>

            <p className="text-[rgb(var(--color-muted))] mb-8 leading-relaxed">
              {product.description}. Beautifully crafted with attention to detail, this piece embodies 
              the quiet luxury that Velmora is known for.
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-sm tracking-wider uppercase mb-3 block">Material</label>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map(material => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`px-6 py-2 border transition-all duration-300 ${
                      selectedMaterial === material
                        ? 'border-[rgb(var(--color-foreground))] bg-[rgb(var(--color-foreground))] text-[rgb(var(--color-background))]'
                        : 'border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-foreground))]'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-sm tracking-wider uppercase mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-foreground))] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-foreground))] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[rgb(var(--color-foreground))] text-[rgb(var(--color-background))] py-4 tracking-wider uppercase text-sm hover:bg-[rgb(var(--color-accent))] transition-colors duration-300 mb-8"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="space-y-4">
              {[
                {
                  title: 'Description',
                  content: `${product.name} is crafted with the finest materials, featuring ${product.description.toLowerCase()}. Each piece undergoes rigorous quality control to ensure it meets our high standards for durability and beauty.`
                },
                {
                  title: 'Materials & Care',
                  content: '18K gold plated over brass. Hypoallergenic and nickel-free. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a cool, dry place when not in use.'
                },
                {
                  title: 'Shipping & Returns',
                  content: 'Free worldwide shipping on all orders. 30-day return policy. If you\'re not completely satisfied with your purchase, return it for a full refund or exchange.'
                }
              ].map((accordion, index) => (
                <details key={index} className="border-b border-[rgb(var(--color-border))] pb-4">
                  <summary className="cursor-pointer text-sm tracking-wider uppercase hover:opacity-70 transition-opacity list-none flex items-center justify-between">
                    {accordion.title}
                    <Plus size={16} className="details-closed:block details-open:hidden" />
                    <Minus size={16} className="details-open:block details-closed:hidden" />
                  </summary>
                  <p className="mt-4 text-sm text-[rgb(var(--color-muted))] leading-relaxed">
                    {accordion.content}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-20">
          <h2
            className="text-3xl md:text-4xl text-center mb-12"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(related => (
              <Link key={related.id} to={`/product/${related.id}`} className="group">
                <div className="mb-4 bg-[rgb(var(--color-card))] aspect-square overflow-hidden">
                  <img
                    src={related.images[0]}
                    alt={related.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3
                  className="product-name text-lg mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {related.name}
                </h3>
                <p className="text-[rgb(var(--color-muted))] text-sm mb-2">{related.description}</p>
                <p className="text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  ${related.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
