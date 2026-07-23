import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ChevronDown, ChevronUp, Star, ChevronLeft } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';

// Mock data (in a real app, this would come from an API/database)
const products = {
  'vivid-aura-jewels': {
    id: 'vivid-aura-jewels',
    title: 'Vivid Aura Jewels',
    price: 42,
    desc: 'Gold ear cuff with crystal accent',
    longDesc: 'Elevate your ear stack instantly with the Vivid Aura ear cuff. Crafted from premium 18k gold vermeil over sterling silver, it features a delicate row of hand-set cubic zirconia crystals. No piercing required, it simply slides on and hugs the cartilage securely for all-day comfort.',
    materials: '18k Gold Vermeil (thick layer of solid gold over sterling silver base). AAA-grade cubic zirconia crystals. Hypoallergenic and nickel-free.',
    imgId: 'vivid-aura-img',
    images: [
      'https://source.unsplash.com/random/800x1000/?gold,ear-cuff,jewelry,1',
      'https://source.unsplash.com/random/800x1000/?woman,ear,jewelry,ear-cuff',
      'https://source.unsplash.com/random/800x1000/?gold,ear-cuff,crystals'
    ]
  },
  // Add fallback for development
  'default': {
    id: 'default',
    title: 'Velmora Signature Piece',
    price: 58,
    desc: 'Elegant demi-fine jewelry',
    longDesc: 'Our signature piece embodies the Velmora philosophy: luxury that lives with you. Designed with everyday elegance in mind, its subtle details catch the light beautifully whether worn alone or layered.',
    materials: '18k Gold Vermeil or Rhodium over sterling silver. Hypoallergenic and nickel-free.',
    imgId: 'default-img',
    images: [
      'https://source.unsplash.com/random/800x1000/?gold,jewelry,1',
      'https://source.unsplash.com/random/800x1000/?woman,jewelry,2',
      'https://source.unsplash.com/random/800x1000/?gold,jewelry,3'
    ]
  }
};

const relatedProducts = [
  {
    id: 'amber-lace-earrings',
    title: 'Amber Lace Earrings',
    price: 54,
    imgId: 'amber-lace-img'
  },
  {
    id: 'golden-sphere-huggies',
    title: 'Golden Sphere Huggies',
    price: 38,
    imgId: 'golden-sphere-img'
  },
  {
    id: 'majestic-flora-nectar',
    title: 'Majestic Flora Nectar',
    price: 68,
    imgId: 'majestic-flora-img'
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = products[id] || products['default'];
  
  const [activeImage, setActiveImage] = useState(0);
  const [variant, setVariant] = useState('18k Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');
  
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    import('../strk-img-config.json')
      .then((config) => {
        ImageHelper.loadImages(config.default || config, containerRef.current);
      })
      .catch(err => {
         // fallback if config not found
         ImageHelper.loadImages({}, containerRef.current);
      });
    // Force activeImage to be inside bounds
    setActiveImage(0);
  }, [id, activeImage]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.images[0]
    }, variant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="bg-brand-light pt-24 pb-16" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumb / Back */}
        <div className="mb-8">
          <Link to="/shop" className="inline-flex items-center text-sm uppercase tracking-widest text-brand-muted hover:text-brand-dark transition-colors">
            <ChevronLeft size={16} className="mr-1" />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar w-full md:w-24 flex-shrink-0">
              {product.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`flex-none w-20 md:w-24 aspect-[3/4] border ${activeImage === idx ? 'border-brand-dark' : 'border-transparent'} overflow-hidden transition-colors`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[3/4] bg-[#EFECE8] relative">
              <img 
                src={product.images[activeImage]} 
                alt={product.title} 
                className="w-full h-full object-cover animate-fade-in"
                key={activeImage} // Force re-render for animation
                data-strk-img-id={`${product.imgId}-main-${activeImage}`}
                data-strk-img={`[product-title] jewelry view ${activeImage+1}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 id="product-title" className="font-serif text-3xl lg:text-4xl text-brand-dark uppercase tracking-widest mb-2">{product.title}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xl text-brand-dark">${product.price}</span>
              <div className="flex items-center text-brand-gold">
                {[1, 2, 3, 4, 5].map(star => (
                   <Star key={star} size={14} fill="currentColor" />
                ))}
                <span className="text-xs text-brand-muted ml-2 pb-0.5">(124 reviews)</span>
              </div>
            </div>

            <p className="text-brand-dark/80 mb-8 leading-relaxed">
              {product.desc}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest text-brand-dark font-medium mb-3">Tone: <span className="font-normal text-brand-muted capitalize">{variant}</span></h3>
              <div className="flex space-x-3">
                {['18k Gold', 'Sterling Silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-3 border text-sm uppercase tracking-widest transition-colors ${
                      variant === v 
                        ? 'border-brand-dark text-brand-dark bg-brand-dark/5' 
                        : 'border-brand-DEFAULT/50 text-brand-muted hover:border-brand-dark'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart logic */}
            <div className="flex space-x-4 mb-12">
              <div className="flex items-center border border-brand-dark">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-brand-dark hover:bg-brand-dark/5 transition-colors"
                >
                  -
                </button>
                <span className="px-2 py-3 text-sm w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-brand-dark hover:bg-brand-dark/5 transition-colors"
                >
                  +
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-brand-dark text-white uppercase tracking-widest text-sm font-medium py-3 hover:bg-brand-gold transition-colors"
              >
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-brand-DEFAULT/30">
              {/* Description */}
              <div className="border-b border-brand-DEFAULT/30">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex justify-between items-center py-4 uppercase tracking-widest text-sm text-brand-dark font-medium"
                >
                  Description
                  {openAccordion === 'description' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'description' ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                  <p className="text-brand-dark/80 text-sm leading-relaxed">{product.longDesc}</p>
                </div>
              </div>

              {/* Materials */}
              <div className="border-b border-brand-DEFAULT/30">
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="w-full flex justify-between items-center py-4 uppercase tracking-widest text-sm text-brand-dark font-medium"
                >
                  Materials & Care
                  {openAccordion === 'materials' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'materials' ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                  <p className="text-brand-dark/80 text-sm leading-relaxed">{product.materials}</p>
                  <p className="text-brand-dark/80 text-sm leading-relaxed mt-2">To maintain the shine, avoid contact with liquids, perfumes, and lotions. Store in the provided Velmora pouch when not in use.</p>
                </div>
              </div>

               {/* Shipping */}
               <div className="border-b border-brand-DEFAULT/30">
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex justify-between items-center py-4 uppercase tracking-widest text-sm text-brand-dark font-medium"
                >
                  Shipping & Returns
                  {openAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'shipping' ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                  <p className="text-brand-dark/80 text-sm leading-relaxed">Free express shipping on all worldwide orders. Returns accepted within 30 days of delivery for a full refund (minus return shipping cost). Custom or engraved items are final sale.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-24 pt-16 border-t border-brand-DEFAULT/20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 id="related-title" className="font-serif text-3xl text-brand-dark text-center mb-12">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
             {relatedProducts.map((rel) => (
              <Link to={`/product/${rel.id}`} key={rel.id} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden bg-[#EFECE8] relative mb-4">
                  <img
                    alt={rel.title}
                    data-strk-img-id={`${rel.imgId}-related`}
                    data-strk-img={`[title-${rel.id}] [related-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src={`https://source.unsplash.com/random/400x533/?gold,jewelry,${rel.title.split(' ')[0]}`}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 id={`title-${rel.id}`} className="font-serif text-lg text-brand-dark mb-1 group-hover:text-brand-gold transition-colors">{rel.title}</h3>
                <p className="text-brand-dark">${rel.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}