import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ChevronDown, ChevronUp, ArrowLeft, Heart, Share2, ShieldCheck, Ship, Box } from 'lucide-react';

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = useMemo(() => products.find(p => p.id === id), [id]);
  const relatedProducts = useMemo(() => products.filter(p => p.id !== id).slice(0, 4), [id]);
  
  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState('gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen bg-velmora-light">
        <h1 className="text-3xl font-serif mb-4">Product not found</h1>
        <Link to="/shop" className="text-sm font-semibold tracking-wider uppercase border-b border-velmora-dark pb-1 text-velmora-dark">Return to Shop</Link>
      </div>
    );
  }

  const images = [product.image, product.image_hover];

  const handleAddToCart = () => {
    addToCart(product, quantity, variant);
  };

  return (
    <div className="pt-20 bg-velmora-light min-h-screen">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex items-center text-xs tracking-widest font-semibold uppercase text-velmora-gray">
        <button onClick={() => navigate(-1)} className="flex items-center hover:text-velmora-dark mr-4">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </button>
        <Link to="/" className="hover:text-velmora-dark">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/shop?category=${product.category}`} className="hover:text-velmora-dark">{product.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-velmora-dark">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto w-full md:w-24 flex-shrink-0 snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {images.map((img, idx) => (
                <button 
                  key={idx} 
                  className={`relative aspect-[4/5] w-20 md:w-full flex-shrink-0 snap-center rounded-sm overflow-hidden border-2 ${activeImage === idx ? 'border-velmora-gold' : 'border-transparent'}`}
                  onClick={() => setActiveImage(idx)}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover mix-blend-multiply" />
                </button>
              ))}
            </div>
            <div className="relative aspect-[4/5] flex-1 bg-velmora-muted overflow-hidden">
              <img src={images[activeImage]} alt={product.name} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="flex justify-between items-start">
              <h1 className="font-serif text-3xl md:text-4xl text-velmora-dark mb-2 uppercase">{product.name}</h1>
              <div className="flex gap-2">
                <button className="p-2 text-velmora-gray hover:text-velmora-dark"><Heart className="w-5 h-5" /></button>
                <button className="p-2 text-velmora-gray hover:text-velmora-dark"><Share2 className="w-5 h-5" /></button>
              </div>
            </div>
            
            <p className="text-xl font-medium text-velmora-dark mb-4">${product.price}</p>
            
            <div className="flex text-velmora-gold mb-6 items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-transparent'}`} />
              ))}
              <span className="text-sm text-velmora-gray ml-2 font-medium">{product.rating} (128 reviews)</span>
            </div>
            
            <p className="text-velmora-gray text-base leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-velmora-dark mb-4">Metal Finish</h3>
              <div className="flex gap-3">
                <button 
                  onClick={() => setVariant('gold')}
                  className={`px-6 py-3 border text-sm font-medium tracking-wide transition-colors ${variant === 'gold' ? 'border-velmora-dark text-velmora-dark bg-velmora-muted' : 'border-velmora-border text-velmora-gray hover:border-velmora-dark'}`}
                >
                  <span className="inline-block w-3 h-3 rounded-full bg-[#E5B551] mr-2" />
                  Gold Vermeil
                </button>
                <button 
                  onClick={() => setVariant('silver')}
                  className={`px-6 py-3 border text-sm font-medium tracking-wide transition-colors ${variant === 'silver' ? 'border-velmora-dark text-velmora-dark bg-velmora-muted' : 'border-velmora-border text-velmora-gray hover:border-velmora-dark'}`}
                >
                  <span className="inline-block w-3 h-3 rounded-full bg-[#E2E8F0] mr-2" />
                  Sterling Silver
                </button>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex border border-velmora-border h-14 w-full sm:w-32 items-center justify-between px-4 text-velmora-dark font-medium">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-velmora-gray hover:text-velmora-dark p-2">-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-velmora-gray hover:text-velmora-dark p-2">+</button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 h-14 bg-velmora-gold text-white font-semibold tracking-widest uppercase text-sm hover:bg-velmora-gold-hover transition-colors"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Assurances */}
            <div className="grid grid-cols-3 gap-4 border-t border-velmora-border pt-8 mb-12">
              <div className="flex flex-col border-r border-velmora-border items-center text-center px-2">
                <ShieldCheck className="w-6 h-6 text-velmora-gold mb-2" />
                <span className="text-[10px] uppercase tracking-widest font-semibold text-velmora-gray">Hypoallergenic</span>
              </div>
              <div className="flex flex-col border-r border-velmora-border items-center text-center px-2">
                <Ship className="w-6 h-6 text-velmora-gold mb-2" />
                <span className="text-[10px] uppercase tracking-widest font-semibold text-velmora-gray">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center px-2">
                <Box className="w-6 h-6 text-velmora-gold mb-2" />
                <span className="text-[10px] uppercase tracking-widest font-semibold text-velmora-gray">Gift Boxed</span>
              </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-velmora-border">
              {[
                { id: 'description', title: 'Description', content: 'Detailed crafted description of this beautiful piece. Each item is made with care and precision, designed to be uniquely yours.' },
                { id: 'materials', title: 'Materials & Care', content: "Plated in 18k thick gold over a brass base. Hypoallergenic and nickel free. To protect the plating, remove before swimming, exercising, or applying lotions and perfumes. Store in your Velmora pouch when not in use." },
                { id: 'shipping', title: 'Shipping & Returns', content: 'Free standard worldwide shipping on all orders. We accept returns within 30 days in original condition. See our Returns page for more details.' }
              ].map((acc) => (
                <div key={acc.id} className="border-b border-velmora-border">
                  <button 
                    className="w-full py-4 flex justify-between items-center text-velmora-dark font-semibold tracking-wide"
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? '' : acc.id)}
                  >
                    <span>{acc.title}</span>
                    {openAccordion === acc.id ? <ChevronUp className="w-4 h-4 text-velmora-gray" /> : <ChevronDown className="w-4 h-4 text-velmora-gray" />}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === acc.id ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                    <p className="text-sm text-velmora-gray leading-relaxed pr-8">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="bg-velmora-muted/30 py-24 border-t border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-serif text-velmora-dark">You May Also Like</h2>
            <Link to="/shop" className="text-sm font-semibold tracking-wider uppercase border-b border-velmora-dark pb-1 text-velmora-dark hidden md:inline-block">Shop All</Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group relative flex flex-col">
                <Link to={`/product/${p.id}`} className="block relative aspect-[4/5] bg-velmora-muted mb-4 overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                  />
                  <img 
                    src={p.image_hover} 
                    alt={`${p.name} alternate view`} 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(p);
                    }}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-velmora-dark font-semibold text-xs tracking-widest uppercase py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-velmora-dark hover:text-white"
                  >
                    Quick Add
                  </button>
                </Link>
                <Link to={`/product/${p.id}`} className="mt-auto">
                  <h3 className="uppercase tracking-widest text-[11px] font-bold mb-1 text-velmora-dark">{p.name}</h3>
                  <p className="text-velmora-gray font-medium text-sm">${p.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}