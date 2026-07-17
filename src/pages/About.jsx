import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16 text-center">
        <div className="text-xs tracking-[0.15em] uppercase text-[#6B665F] mb-3">Est. 2019</div>
        <h1 className="font-serif text-6xl tracking-tight mb-8">Our Story</h1>
        <div className="prose prose-neutral max-w-none text-[#6B665F] leading-relaxed text-[15px]">
          <p className="mb-6">Velmora was founded with a simple belief: that jewelry should feel as beautiful as it looks. We create demi-fine pieces that honor tradition while embracing modern simplicity.</p>
          <p className="mb-6">Every piece begins in our small atelier, where skilled hands shape, polish, and finish each design. We use responsibly sourced 18K gold plating over solid brass, paired with ethically sourced crystals.</p>
          <p>Our collections are designed to be worn daily, layered thoughtfully, and passed down. Quiet luxury, made to last.</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
        <div className="aspect-[16/10] bg-[#F5F2EB]">
          <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce45e?w=1200&q=80" alt="Atelier" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-[16/10] bg-[#F5F2EB]">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80" alt="Craftsmanship" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="text-center py-16 border-t border-[#E5DFD3]">
        <Link to="/shop" className="btn-primary">Explore the Collection</Link>
      </div>
    </div>
  )
}

export default About