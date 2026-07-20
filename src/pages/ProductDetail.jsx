import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={onToggle}
        className="w-full py-4 flex justify-between items-center text-left"
      >
        <span className="text-sm uppercase tracking-widest">{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <div className={cn('pb-4 text-sm text-velmora-warm-gray', isOpen ? 'block' : 'hidden')}>
        {children}
      </div>
    </div>
  );
}

function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [product.image, product.hoverImage];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-[4/5] bg-velmora-sand">
        <img
          src={images[selectedImage]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Thumbnails */}
      <div className="flex gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              'w-20 h-24 bg-velmora-sand',
              selectedImage === index ? 'ring-2 ring-velmora-gold' : ''
            )}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function RelatedProducts({ currentProduct }) {
  const related = products.filter(p => p.id !== currentProduct.id).slice(0, 4);

  return (
    <section className="py-16 bg-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl mb-8">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="aspect-[4/5] bg-velmora-white mb-3 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="product-name text-xs mb-1 group-hover:text-velmora-gold transition-colors">
                {product.name}
              </h3>
              <p className="text-sm">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('gold');
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  const variants = [
    { id: 'gold', name: 'Gold', color: 'bg-velmora-gold' },
    { id: 'silver', name: 'Silver', color: 'bg-gray-300' },
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-velmora-warm-gray">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-2xl md:text-3xl mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-warm-gray">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl font-serif mb-6">${product.price}</p>

            <p className="text-velmora-warm-gray mb-6 leading-relaxed">
              {product.description}. Crafted with 18K gold plating and premium materials for lasting beauty.
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-sm uppercase tracking-widest mb-3">Finish</p>
              <div className="flex gap-3">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setVariant(v.id)}
                    className={cn(
                      'px-4 py-2 border text-sm transition-colors',
                      variant === v.id
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-velmora-cream'
                        : 'border-velmora-border hover:border-velmora-charcoal'
                    )}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-sm uppercase tracking-widest mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-velmora-gold"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-velmora-gold"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, quantity, variant)}
              className="w-full bg-velmora-gold text-velmora-charcoal py-4 text-sm uppercase tracking-widest hover:bg-velmora-charcoal hover:text-velmora-cream transition-colors duration-300 mb-4"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
              >
                <p className="leading-relaxed">
                  This exquisite piece is crafted with attention to detail and made from premium materials. 
                  Perfect for everyday elegance or special occasions, it adds a touch of sophistication to any outfit.
                </p>
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => setOpenAccordion(openAccordion === 'materials' ? '' : 'materials')}
              >
                <p className="leading-relaxed">
                  18K gold plated on sterling silver base. To maintain the beauty of your jewelry, 
                  avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.
                </p>
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
              >
                <p className="leading-relaxed">
                  Free worldwide shipping on orders over $100. We offer a 30-day return policy 
                  for unworn items in original packaging. Express shipping options available at checkout.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts currentProduct={product} />
      </div>
    </div>
  );
}