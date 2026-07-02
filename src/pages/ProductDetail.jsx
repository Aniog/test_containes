import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState('18k Gold Vermeil')
  const [openAccordion, setOpenAccordion] = useState('description')
  
  const { addToCart } = useCart()

  useEffect(() => {
    // Find product or handle 404
    const foundProduct = products.find(p => p.slug === slug)
    if (foundProduct) {
      setProduct(foundProduct)
      setQuantity(1)
      setActiveImage(0)
      window.scrollTo(0, 0)
    }
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center container mx-auto px-4 pt-24">
        <div className="text-center">
          <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
          <Link to="/collections/all" className="text-sm tracking-widest uppercase border-b border-foreground pb-1">
            Return to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, variant)
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)
    
  if (relatedProducts.length < 4) {
    // Fill up to 4 with other categories if needed
    const fillProducts = products.filter(p => p.id !== product.id && p.category !== product.category).slice(0, 4 - relatedProducts.length)
    relatedProducts.push(...fillProducts)
  }

  const toggleAccordion = (name) => {
    setOpenAccordion(openAccordion === name ? null : name)
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs tracking-widest uppercase text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/collections/all?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-24">
          
          {/* Images Section */}
          <div className="md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
             {/* Thumbnails */}
             <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:w-20 md:flex-shrink-0 hide-scrollbar pb-2 md:pb-0">
               {product.images.map((img, idx) => (
                 <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-24 aspect-[4/5] overflow-hidden flex-shrink-0 border-2 transition-colors ${activeImage === idx ? 'border-foreground' : 'border-transparent opacity-60 hover:opacity-100'}`}
                 >
                   <img src={img} alt={`Thumbnail ${idx+1}`} className="w-full h-full object-cover" />
                 </button>
               ))}
             </div>
             
             {/* Main Image */}
             <div className="flex-1 aspect-[4/5] bg-muted overflow-hidden relative">
               <img 
                 src={product.images[activeImage]} 
                 alt={product.name} 
                 className="w-full h-full object-cover animate-in fade-in duration-500"
                 key={activeImage} // force re-render for animation
               />
             </div>
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl tracking-wider mb-2">{product.name}</h1>
            
            {/* Reviews summary approx */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-accent text-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="text-sm text-muted-foreground">(24 reviews)</span>
            </div>

            <p className="text-2xl font-light mb-8">${product.price}</p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <span className="block text-sm uppercase tracking-widest mb-4">Material: <span className="text-muted-foreground ml-2">{variant}</span></span>
              <div className="flex gap-4">
                <button 
                  onClick={() => setVariant('18k Gold Vermeil')}
                  className={`py-3 px-6 text-sm tracking-wider border rounded-none transition-colors ${variant === '18k Gold Vermeil' ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground'}`}
                >
                  Gold
                </button>
                <button 
                  onClick={() => setVariant('Sterling Silver')}
                  className={`py-3 px-6 text-sm tracking-wider border rounded-none transition-colors ${variant === 'Sterling Silver' ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-foreground'}`}
                >
                  Silver
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <div className="flex items-center border border-border rounded-none h-14">
                <button 
                  className="px-4 h-full hover:bg-muted transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 w-12 text-center text-sm">{quantity}</span>
                <button 
                  className="px-4 h-full hover:bg-muted transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground h-14 text-sm tracking-widest uppercase transition-colors"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-border pt-2 space-y-2 flex-1">
              {/* Description */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="w-full py-4 flex justify-between items-center text-sm tracking-widest uppercase font-medium"
                >
                  Description
                  {openAccordion === 'description' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'description' && (
                  <div className="pb-6 text-muted-foreground text-sm leading-relaxed animate-in slide-in-from-top-2">
                    {product.description}
                  </div>
                )}
              </div>

              {/* Material & Care */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('materials')}
                  className="w-full py-4 flex justify-between items-center text-sm tracking-widest uppercase font-medium"
                >
                  Materials & Care
                  {openAccordion === 'materials' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'materials' && (
                  <div className="pb-6 text-muted-foreground text-sm leading-relaxed animate-in slide-in-from-top-2">
                    <p className="mb-2"><strong className="text-foreground">Material:</strong> {product.material}</p>
                    <p>To preserve the finish of your Velmora jewelry, we recommend removing pieces before showering, swimming, or exercising. Avoid contact with perfumes, lotions, and hair products. Clean gently with a soft cloth.</p>
                  </div>
                )}
              </div>

              {/* Shipping */}
              <div className="border-b border-border">
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full py-4 flex justify-between items-center text-sm tracking-widest uppercase font-medium"
                >
                  Shipping & Returns
                  {openAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'shipping' && (
                  <div className="pb-6 text-muted-foreground text-sm leading-relaxed animate-in slide-in-from-top-2">
                    <p className="mb-2">We offer free worldwide shipping on orders over $100.</p>
                    <ul className="list-disc pl-4 space-y-1 mb-4">
                      <li>Standard US Shipping (3-5 business days): $5.95</li>
                      <li>Express US Shipping (1-2 business days): $15.00</li>
                      <li>International Standard (7-14 business days): $12.00</li>
                    </ul>
                    <p>Returns are accepted within 30 days of delivery in unworn, original condition.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Related Products */}
        <section className="border-t border-border pt-24 pb-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl">You May Also Like</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-8">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/products/${p.slug}`} className="group group/card block">
                <div className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                  <img 
                    src={p.images[0]} 
                    alt={p.name}
                    className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover/card:opacity-0"
                  />
                  <img 
                    src={p.images[1] || p.images[0]} 
                    alt={`${p.name} detail`}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-lg tracking-wider mb-1">{p.name}</h3>
                  <p className="text-muted-foreground">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}