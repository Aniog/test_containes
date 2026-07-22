import { Link } from 'react-router-dom';

export default function BrandStorySection() {
  return (
    <section className="section bg-bg-alt">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent rounded -z-10" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center py-8 md:py-0">
            <span className="text-xs font-medium tracking-extra-wide uppercase text-accent mb-4">
              Our Story
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text mb-6 leading-tight">
              Jewelry that tells<br />
              <span className="italic">your story</span>
            </h2>
            
            <div className="space-y-4 text-text-muted leading-relaxed mb-8">
              <p>
                Founded with a passion for accessible luxury, Velmora was born from the belief 
                that every woman deserves to wear beautiful, well-crafted jewelry without the 
                luxury price tag.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed and meticulously crafted 
                using premium materials — 18K gold plating, hypoallergenic metals, and 
                ethically sourced stones.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-text tracking-extra-wide uppercase hover:text-accent transition-colors duration-200 group"
            >
              <span>Discover Our Journey</span>
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
