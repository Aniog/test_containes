import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, getProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  useEffect(() => {
    if (product && product.variants && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="border-b border-brand-charcoal pb-1 uppercase tracking-widest text-sm">Return to Shop</Link>
      </div>
    );
  }

  const relatedProducts = getProducts()
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
  };

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? '' : id);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      {/* Breadcrumbs */}
      <div className="text-xs uppercase tracking-widest max-w-full overflow-hidden text-ellipsis whitespace-nowrap opacity-60 mb-8 font-medium">
        <Link to="/" className="hover:text-brand-gold">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-brand-gold">Shop</Link>
        <span className="mx-2">/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-brand-gold">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-brand-charcoal">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-24">
        {/* Gallery */}
        <div className="w-full lg:w-3/5 lg:sticky lg:top-32 lg:self-start flex flex-col md:flex-row-reverse gap-4">
          <div className="w-full aspect-[4/5] bg-brand-taupe/20">
            <img 
              alt={product.name}
              data-strk-img-id={`pdp-main-${product.id}`}
              data-strk-img={`${product.imgSearch} high resolution detail editorial`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex md:flex-col gap-4 overflow-x-auto hide-scrollbar md:overflow-visible w-full md:w-24 flex-shrink-0">
            {[1, 2, 3].map((num) => (
              <div key={num} className="w-20 md:w-full aspect-square bg-brand-taupe/20 cursor-pointer opacity-70 hover:opacity-100 transition-opacity flex-shrink-0">
                <img 
                  alt={`${product.name} view ${num}`}
                  data-strk-img-id={`pdp-thumb-${product.id}-${num}`}
                  data-strk-img={`${product.imgSearch} angle ${num}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-2/5 flex flex-col">
          <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-4">{product.name}</h1>
          <p className="text-xl mb-6">${product.price}</p>
          
          <div className="flex items-center gap-2 mb-8">
            <div className="flex text-brand-gold">
              {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-xs uppercase tracking-widest opacity-60 mt-1">12 Reviews</span>
          </div>

          <p className="font-light text-brand-charcoal/80 mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-8 p-4 bg-brand-taupe/20 border border-brand-charcoal/5 flex flex-col items-center justify-center">
             <span className="text-xs uppercase font-medium tracking-widest mb-1">Estimated Delivery</span>
             <span className="text-sm font-serif">Within 3-5 business days</span>
          </div>

          <div className="w-full h-px bg-brand-charcoal/10 mb-8"></div>

          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-8">
              <span className="block text-xs uppercase tracking-widest font-medium mb-3">
                Material: <span className="opacity-70 font-normal">{selectedVariant}</span>
              </span>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 text-sm tracking-wider uppercase border transition-all ${
                      selectedVariant === variant 
                        ? 'border-brand-charcoal bg-brand-charcoal text-brand-sand' 
                        : 'border-brand-charcoal/20 hover:border-brand-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Group */}
          <div className="flex gap-4 mb-12">
            {/* Quantity Selector */}
            <div className="flex border border-brand-charcoal/20">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 hover:bg-brand-charcoal/5 transition-colors"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-10 flex items-center justify-center text-sm font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 hover:bg-brand-charcoal/5 transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            
            {/* CTA */}
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-brand-charcoal text-brand-sand uppercase tracking-widest text-sm font-medium hover:bg-brand-gold transition-colors py-4"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t border-brand-charcoal/10">
            {[
              { id: 'description', title: 'Description', content: product.description },
              { id: 'materials', title: 'Materials & Care', content: `${product.materials} To maintain shine, avoid contact with water, perfumes, and lotions. Store in the provided pouch.` },
              { id: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders over $75. Returns are accepted within 30 days of delivery in original packaging.' }
            ].map(section => (
              <div key={section.id} className="border-b border-brand-charcoal/10">
                <button 
                  onClick={() => toggleAccordion(section.id)}
                  className="w-full flex justify-between items-center py-5 uppercase tracking-widest text-sm font-medium hover:text-brand-gold transition-colors"
                >
                  {section.title}
                  {openAccordion === section.id ? <ChevronUp className="w-4 h-4 opacity-70" /> : <ChevronDown className="w-4 h-4 opacity-70" />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openAccordion === section.id ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="font-light text-sm text-brand-charcoal/80 leading-relaxed pr-8">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-brand-charcoal/10 pt-24 mt-24">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal">You May Also Like</h2>
            <Link to={`/shop?category=${product.category}`} className="hidden md:flex items-center text-sm uppercase tracking-widest hover:text-brand-gold transition-colors">
              More {product.category} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {relatedProducts.map((relProduct) => (
               <Link to={`/product/${relProduct.id}`} key={relProduct.id} className="group block">
                <div className="relative aspect-[4/5] bg-brand-taupe/20 mb-4 overflow-hidden">
                  <img 
                    alt={relProduct.name}
                    data-strk-img-id={`related-${relProduct.id}`}
                    data-strk-img={relProduct.imgSearch}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif uppercase tracking-wider text-sm mb-1">{relProduct.name}</h3>
                <p className="opacity-70 text-sm">${relProduct.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
