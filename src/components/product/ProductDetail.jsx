import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-h2">Product Not Found</h1>
          <Link to="/shop" className="text-gold mt-4 inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const productImages = [product.image, product.hoverImage];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const accordions = [
    { id: 'description', title: 'Description', content: product.description },
    { id: 'materials', title: 'Materials & Care', content: 'Our jewelry is crafted from 18K gold-plated sterling silver, ensuring both beauty and durability. To maintain its luster, avoid direct contact with water, perfumes, and lotions. Store in a cool, dry place and clean gently with a soft cloth.' },
    { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. We offer a 30-day return policy for unworn items in original packaging. Express shipping options available at checkout.' }
  ];

  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm font-sans text-warm-gray">
            <li><Link to="/" className="hover:text-charcoal">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-charcoal">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product Main */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-ivory mb-4">
              <img 
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 bg-ivory ${selectedImage === index ? 'ring-2 ring-gold' : ''}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-h3 lg:text-h2 font-medium tracking-[0.12em] uppercase text-charcoal">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < product.rating ? 'text-gold fill-gold' : 'text-warm-gray/30'}`} 
                  />
                ))}
              </div>
              <span className="text-warm-gray text-sm">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl font-serif text-gold mt-4">${product.price}</p>

            <p className="text-warm-gray font-sans mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="block text-sm font-sans font-medium text-charcoal mb-3">
                Color: <span className="text-warm-gray font-normal capitalize">{selectedVariant}</span>
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border font-sans text-sm tracking-wide transition-all ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-white'
                        : 'border-warm-gray/30 text-charcoal hover:border-gold'
                    }`}
                  >
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="mt-8">
              <label className="block text-sm font-sans font-medium text-charcoal mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-warm-gray/30">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-gold transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-sans">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-gold transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button 
                  onClick={() => addToCart(product, quantity, selectedVariant)}
                  className="flex-1 bg-gold text-white font-sans font-medium text-sm tracking-wide py-4 hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-12 border-t border-warm-gray/15">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-warm-gray/15">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === accordion.id ? '' : accordion.id)}
                    className="w-full py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-sans font-medium text-charcoal">{accordion.title}</span>
                    {openAccordion === accordion.id ? (
                      <ChevronUp className="w-5 h-5 text-warm-gray" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-warm-gray" />
                    )}
                  </button>
                  {openAccordion === accordion.id && (
                    <div className="pb-5 text-warm-gray font-sans text-sm leading-relaxed animate-fade-in">
                      {accordion.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20">
          <h2 className="font-serif text-h3 text-charcoal text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}