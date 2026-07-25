import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ChevronDown, Plus, Minus, Star, ChevronLeft } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

const products = [
  {
    id: 'prod-1',
    title: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: 'Gold Vermeil',
    desc: 'gold ear cuff with crystal accent',
    longDesc: 'Elevate your ear stack instantly with the Vivid Aura ear cuff. Crafted in 18k gold vermeil, it features a subtle but striking pavé crystal accent that catches the light beautifully. No piercing required—simply slide it on for an elevated editorial look.',
    imgId: 'product-vivid-aura-1',
    galleryImgIds: ['product-vivid-aura-2', 'product-vivid-aura-3'],
    rating: 4.8,
    reviews: 14,
  },
  {
    id: 'prod-2',
    title: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: 'Gold Plated',
    desc: 'multicolor floral crystal necklace',
    longDesc: 'A statement piece that remains delicate enough for everyday wear. The Majestic Flora Nectar necklace features a clustered arrangement of multicolor crystals inspired by blooming flora, set on a bright 18k gold-plated fine chain.',
    imgId: 'product-majestic-flora-1',
    galleryImgIds: ['product-majestic-flora-2', 'product-majestic-flora-3'],
    rating: 4.9,
    reviews: 32,
  },
  {
    id: 'prod-3',
    title: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    material: 'Gold Vermeil',
    desc: 'chunky gold dome huggie earrings',
    longDesc: 'The perfect chunky huggie does exist. The Golden Sphere Huggies master the balance between bold volume and comfortable weight. Their highly polished dome surface reflects light brilliantly, making them the ultimate everyday signature.',
    imgId: 'product-golden-sphere-1',
    galleryImgIds: ['product-golden-sphere-2', 'product-golden-sphere-3'],
    rating: 5.0,
    reviews: 89,
  },
  {
    id: 'prod-4',
    title: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: 'Gold Vermeil',
    desc: 'textured gold filigree drop earrings',
    longDesc: 'Vintage inspiration meets modern execution. These breathtaking drop earrings feature intricate gold vermeil filigree work surrounding a warm amber-hued center. Surprisingly lightweight, they provide maximum impact for evening styling.',
    imgId: 'product-amber-lace-1',
    galleryImgIds: ['product-amber-lace-2', 'product-amber-lace-3'],
    rating: 4.7,
    reviews: 21,
  },
  {
    id: 'prod-5',
    title: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    material: 'Solid Gold',
    desc: 'gift-boxed earring + necklace set',
    longDesc: 'Take the guesswork out of gifting (or treating yourself). The Royal Heirloom set pairs our bestselling solitary pendant necklace with matching stud earrings. Arrives beautifully presented in our signature velvet-lined box.',
    imgId: 'product-royal-heirloom-1',
    galleryImgIds: ['product-royal-heirloom-2', 'product-royal-heirloom-3'],
    rating: 4.9,
    reviews: 45,
  }
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeVariant, setActiveVariant] = useState('Gold');
  const [openAccordion, setOpenAccordion] = useState('description');
  
  const { addItem, openCart } = useCartStore();

  const product = products.find(p => p.id === id) || products[0];
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  // All images for gallery
  const galleryImages = [product.imgId, ...(product.galleryImgIds || [])];

  useEffect(() => {
    // Reset state when product changes
    setActiveImage(0);
    setQuantity(1);
    window.scrollTo(0, 0);
    
    // Load images
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [id, product.id]);

  const handleAddToCart = () => {
    addItem(product, activeVariant, quantity);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? '' : section);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background" ref={containerRef}>
      <Navbar />

      <main className="flex-grow pt-24 pb-20">
        
        {/* Breadcrumb / Back */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-sm font-sans tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Image Gallery */}
            <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4 lg:sticky lg:top-32 lg:h-[calc(100vh-160px)]">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto md:w-24 shrink-0 no-scrollbar">
                {galleryImages.map((imgId, idx) => (
                  <button 
                    key={imgId}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-20 md:w-full aspect-[4/5] overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-primary opacity-100' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      alt={`${product.title} view ${idx + 1}`}
                      className="absolute inset-0 object-cover w-full h-full"
                      data-strk-img-id={`thumb-${imgId}`}
                      data-strk-img={`[product-detail-title] jewelry view ${idx + 1}`}
                      data-strk-img-ratio="4x5"
                    />
                  </button>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="relative flex-1 aspect-[4/5] bg-muted overflow-hidden">
                <img 
                  src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                  alt={product.title}
                  className="absolute inset-0 object-cover w-full h-full"
                  data-strk-img-id={`main-${galleryImages[activeImage]}`}
                  data-strk-img={`[product-detail-title] elegant jewelry high resolution`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1200"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2 flex flex-col py-4 lg:py-10">
              
              <div className="mb-8">
                <h1 id="product-detail-title" className="text-3xl lg:text-4xl font-serif uppercase tracking-widest mb-4">
                  {product.title}
                </h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-sans">${product.price}</span>
                  <div className="flex items-center text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} 
                      />
                    ))}
                    <span className="text-sm font-sans text-muted-foreground ml-2">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {product.desc}
                </p>
              </div>

              {/* Variants */}
              <div className="mb-8">
                <span className="block text-sm font-sans tracking-widest uppercase mb-3">Metal: {activeVariant}</span>
                <div className="flex gap-3">
                  {['Gold', 'Silver'].map(variant => (
                    <button
                      key={variant}
                      onClick={() => setActiveVariant(variant)}
                      className={`px-6 py-2 border text-sm font-sans transition-all duration-300 ${
                        activeVariant === variant 
                          ? 'border-primary bg-primary/5 text-primary' 
                          : 'border-border text-foreground hover:border-primary/50'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <div className="flex items-center border border-border sm:w-32 h-14">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex-1 flex justify-center text-foreground hover:text-primary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-sans">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex-1 flex justify-center text-foreground hover:text-primary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary h-14 text-sm"
                >
                  Add to Cart
                </button>
              </div>

              {/* Accordions */}
              <div className="border-t border-border divide-y divide-border">
                {/* Description */}
                <div className="py-2">
                  <button 
                    className="w-full py-4 flex justify-between items-center text-left"
                    onClick={() => toggleAccordion('description')}
                  >
                    <span className="font-serif tracking-widest uppercase text-sm">Description</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === 'description' ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'description' ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                      {product.longDesc}
                    </p>
                  </div>
                </div>

                {/* Materials & Care */}
                <div className="py-2">
                  <button 
                    className="w-full py-4 flex justify-between items-center text-left"
                    onClick={() => toggleAccordion('materials')}
                  >
                    <span className="font-serif tracking-widest uppercase text-sm">Materials & Care</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === 'materials' ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'materials' ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-3">
                      <strong>Material:</strong> {product.material}. Our vermeil is a thick layer of 18k solid gold on sterling silver meaning it will last longer.
                    </p>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                      <strong>Care:</strong> To keep your piece looking its best, gently wipe with a soft cloth after wear. Avoid contact with perfumes, lotions, and harsh chemicals. Store in your Velmora pouch when not in use.
                    </p>
                  </div>
                </div>

                {/* Shipping & Returns */}
                <div className="py-2">
                  <button 
                    className="w-full py-4 flex justify-between items-center text-left"
                    onClick={() => toggleAccordion('shipping')}
                  >
                    <span className="font-serif tracking-widest uppercase text-sm">Shipping & Returns</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === 'shipping' ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'shipping' ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                      Free standard shipping on all orders. Express options available at checkout. 
                      We accept returns in unworn condition within 30 days of delivery. Pierced earrings are returnable provided the hygiene seal remains perfectly intact.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <div className="text-center mb-12">
            <h2 id="related-heading" className="text-3xl font-serif">You May Also Like</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProd) => (
              <Link to={`/product/${relatedProd.id}`} key={relatedProd.id} className="group relative flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={relatedProd.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`related-${relatedProd.id}`}
                    data-strk-img={`[related-title-${relatedProd.id}] ${relatedProd.desc} elegant jewelry`}
                    data-strk-img-ratio="4x5"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="w-full bg-background/95 backdrop-blur-sm text-foreground text-center py-2 font-serif text-xs tracking-widest uppercase transition-colors duration-300">
                      View
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 id={`related-title-${relatedProd.id}`} className="font-serif text-sm tracking-wider uppercase mb-1 line-clamp-1">
                    {relatedProd.title}
                  </h3>
                  <p className="font-sans text-muted-foreground text-sm">${relatedProd.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;