import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ChevronLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p>Product not found</p>
        <Link to="/shop" className="text-gold">Back to Shop</Link>
      </div>
    );
  }

  const images = [product.image, product.imageSecondary];

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.1em] mb-8 hover:text-gold">
        <ChevronLeft size={16} /> BACK TO SHOP
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square bg-light-gray mb-4 overflow-hidden">
            <img 
              src={images[selectedImage]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 bg-light-gray overflow-hidden border-2 ${selectedImage === index ? 'border-base' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="product-name text-3xl tracking-wider mb-2">{product.name}</h1>
          <p className="text-2xl mb-4">${product.price}</p>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="stars flex">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm text-taupe">({product.reviews} reviews)</span>
          </div>

          <p className="text-taupe mb-8 leading-relaxed">{product.description}</p>

          {/* Variant Selector */}
          <div className="mb-6">
            <p className="text-xs tracking-[0.15em] text-taupe mb-3">TONE</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`variant-pill ${selectedVariant === variant ? 'active' : ''}`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.15em] text-taupe mb-3">QUANTITY</p>
            <div className="flex items-center border border-border w-fit">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-light-gray">-</button>
              <span className="px-6 py-2 border-x border-border">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-light-gray">+</button>
            </div>
          </div>

          <Button variant="primary" className="w-full mb-4" onClick={handleAddToCart}>
            Add to Cart
          </Button>

          {/* Accordions */}
          <div className="mt-10 divide-y divide-border">
            {[
              { key: 'description', label: 'Description', content: product.description },
              { key: 'materials', label: 'Materials & Care', content: product.details },
              { key: 'shipping', label: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Returns accepted within 30 days of purchase. Items must be in original condition with tags attached.' },
            ].map((section) => (
              <div key={section.key}>
                <button 
                  onClick={() => toggleAccordion(section.key)}
                  className="accordion-header w-full"
                >
                  {section.label}
                  <span className="text-xl">{openAccordion === section.key ? '−' : '+'}</span>
                </button>
                {openAccordion === section.key && (
                  <div className="accordion-content">{section.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="mt-20">
        <h3 className="text-2xl font-serif mb-8">You May Also Like</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <Link key={related.id} to={`/product/${related.id}`} className="product-card group">
              <div className="product-card-image">
                <img src={related.image} alt={related.name} />
              </div>
              <div className="p-4">
                <p className="product-name text-sm tracking-wider mb-1">{related.name}</p>
                <p className="text-sm text-taupe">${related.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;