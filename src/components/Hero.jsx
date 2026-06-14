import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollToProducts = (e) => {
    e.preventDefault()
    const element = document.querySelector('#products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">
          Precision Engineering for
          <span className="hero-title-accent"> Metal Fabrication</span>
        </h1>
        <p id="hero-subtitle" className="hero-subtitle">
          Premium double folding machines and sheet metal processing equipment. 
          Built for precision, designed for performance, crafted for professionals.
        </p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={scrollToProducts}>
            Explore Products
            <ArrowRight size={20} />
          </button>
          <button className="btn btn-secondary" onClick={(e) => {
            e.preventDefault()
            const element = document.querySelector('#contact')
            if (element) element.scrollIntoView({ behavior: 'smooth' })
          }}>
            Get a Quote
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">25+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Machines Delivered</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">Customer Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
