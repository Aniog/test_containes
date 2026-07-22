import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-velmora-border">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium">{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-velmora-gray leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function ProductGallery({ images, name }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-20 h-24 md:w-24 md:h-30 overflow-hidden border-2 transition-colors ${
              selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
            }`}
          >
            <img src={image} alt={`${name} view ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      {/* Main Image */}
      <div className="flex-1 aspect-[4/5] bg-velmora-beige">
        <img
          src={images[selectedImage]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function RelatedProducts({ currentProduct }) {
  const relatedProducts = products
    .filter(p => p.id !== currentProduct.id)
    .slice(0, 4);

  return (
    <section className="py-16 bg-velmora-beige">
      <div className="container">
        <h2 className="font-serif text-2xl md:text-3xl mb-8">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="aspect-[4/5] bg-velmora-cream overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-serif text-xs tracking-product uppercase">{product.name}</h3>
                <p className="mt-1 text-sm font-medium">${product.price}</p>
              </div>
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
  
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState('description');

  if (!product) {
    return (
      <div className="container py-32 text-center">
        <h1 className="font-serif text-2xl">Product not found</h1>
        <Link to="/shop" className="text-velmora-gold mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  // Set default variant after product is found
  const defaultVariant = product.variants?.[0] || 'Gold';

  const handleAccordionToggle = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="pt-20">
      <div className="container py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-velmora-gray">
          <Link to="/" className="hover:text-velmora-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Product Info */}
          <div className="lg:pl-8">
            <h1 className="font-serif text-2xl md:text-3xl tracking-product uppercase">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-velmora-gray">
                {product.reviews} reviews
              </span>
            </div>

            <p className="mt-4 text-2xl font-medium">${product.price}</p>

            <p className="mt-6 text-velmora-gray leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mt-8">
              <label className="text-sm font-medium mb-3 block">Color</label>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-3 border transition-colors ${
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-charcoal'
                        : 'border-velmora-border hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <label className="text-sm font-medium mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-velmora-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center hover:text-velmora-gold transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center hover:text-velmora-gold transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, selectedVariant, quantity)}
              className="w-full mt-8 py-4 bg-velmora-gold hover:bg-velmora-gold-hover text-velmora-charcoal font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion
                title="Description"
                isOpen={openAccordion === 'description'}
                onToggle={() => handleAccordionToggle('description')}
              >
                {product.description}
                <br /><br />
                Each piece is crafted with attention to detail and made to last. Our 18K gold plating ensures a beautiful, long-lasting finish that won't easily fade or tarnish with proper care.
              </Accordion>

              <Accordion
                title="Materials & Care"
                isOpen={openAccordion === 'materials'}
                onToggle={() => handleAccordionToggle('materials')}
              >
                Materials: 18K Gold Plated on Sterling Silver Base
                <br /><br />
                Care Instructions: Remove jewelry before showering, swimming, or exercising. Store in a cool, dry place away from direct sunlight. Clean gently with a soft cloth.
              </Accordion>

              <Accordion
                title="Shipping & Returns"
                isOpen={openAccordion === 'shipping'}
                onToggle={() => handleAccordionToggle('shipping')}
              >
                Free worldwide shipping on all orders.
                <br /><br />
                We offer a 30-day return policy for unworn items in original packaging. Simply contact us to initiate a return.
              </Accordion>
            </div>
          </div>
        </div>

        <RelatedProducts currentProduct={product} />
      </div>
    </div>
  );
}