import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import { useCart } from '@/context/CartContext'

const MATERIALS = ['gold', 'silver']

const ACCORDIONS = [
  { title: 'Description', key: 'details' },
  { title: 'Materials & Care', key: 'care' },
  { title: 'Shipping & Returns', key: 'shipping' },
]

function Accordion({ title, children, open, onToggle }) {
  return (
    <div className="border-t border-border">
      <button
        className="w-full flex items-center justify-between py-4 text-sm tracking-wide uppercase font-sans text-foreground hover:text-primary transition-colors"
        onClick={onToggle}
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = PRODUCTS.find((p) => p.id === Number(id)) || PRODUCTS[0]
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedMaterial, setSelectedMaterial] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [added, setAdded] = useState(false)

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedMaterial)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8 font-sans">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-muted mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Info */}
          <div className="flex flex-col">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 font-sans">
              {product.category}
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'fill-muted text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif text-primary font-medium mb-6">
              ${product.price}
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Material selector */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.08em] uppercase text-muted-foreground mb-3 font-sans">
                Finish
              </p>
              <div className="flex gap-3">
                {MATERIALS.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`px-6 py-2.5 text-sm tracking-wide uppercase border transition-all duration-200 ${
                      selectedMaterial === mat
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border text-foreground hover:border-foreground'
                    }`}
                  >
                    {mat === 'gold' ? '18K Gold' : 'Silver Tone'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:text-primary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-medium min-w-[2rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:text-primary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 text-sm tracking-[0.12em] uppercase transition-all duration-300 ${
                  added
                    ? 'bg-foreground text-background'
                    : 'bg-primary text-primary-foreground hover:bg-gold-600'
                }`}
              >
                {added ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-b border-border">
              {ACCORDIONS.map((acc) => (
                <Accordion
                  key={acc.key}
                  title={acc.title}
                  open={openAccordion === acc.key}
                  onToggle={() => setOpenAccordion(openAccordion === acc.key ? null : acc.key)}
                >
                  {product[acc.key]}
                </Accordion>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 md:mt-24 pt-16 border-t border-border">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-muted mb-3">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="product-name text-xs text-foreground group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm font-medium text-foreground mt-0.5 font-sans">
                  ${p.price}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}