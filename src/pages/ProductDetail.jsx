import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="container-main py-24 text-center">
        <h1 className="font-serif text-2xl">Product not found</h1>
        <Link to="/shop" className="btn-primary inline-block mt-4">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const accordionItems = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: '18K gold plated on sterling silver. To maintain the beauty of your jewelry, avoid contact with water, perfumes, and lotions. Store in a cool, dry place.' },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on orders over $100. 30-day returns for unworn items in original packaging. Express shipping available at checkout.' }
  ];

  return (
    <main className="pb-16">
      <div className="container-main">
        {/* Breadcrumb */}
        <nav className="py-6 text-sm text-velmora-warm-gray">
          <Link to="/" className="hover:text-velmora-charcoal">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-charcoal">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-velmora-sand mb-4">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-velmora-sand ${selectedImage === index ? 'ring-2 ring-velmora-gold' : ''}`}
                >
                  <img 
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="font-serif text-2xl md:text-3xl">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-warm-gray">
                {product.reviews} reviews
              </span>
            </div>

            {/* Price */}
            <p className="mt-4 text-2xl font-medium">${product.price}</p>

            {/* Description */}
            <p className="mt-4 text-velmora-warm-gray">{product.description}</p>

            {/* Variant Selector */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-3">Metal Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border text-sm uppercase tracking-wider transition-all ${
                      selectedVariant === variant
                        ? 'border-velmora-charcoal bg-velmora-charcoal text-velmora-cream'
                        : 'border-velmora-border text-velmora-warm-gray hover:border-velmora-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-sm font-medium mb-3">Quantity</p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <span className="px-6">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button 
              onClick={handleAddToCart}
              className="btn-primary w-full mt-8"
            >
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-t border-velmora-border">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium">{item.title}</span>
                    {openAccordion === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {openAccordion === item.id && (
                    <div className="pb-4 text-velmora-warm-gray text-sm leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
