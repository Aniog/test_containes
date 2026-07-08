import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-cream pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl">Our Story</h1>
          <div className="hairline max-w-md mx-auto mt-6" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 font-sans text-charcoal/80 leading-relaxed">
            <p className="text-xl">
              Velmora was born from a simple belief: every woman deserves jewelry that makes 
              her feel extraordinary, without the extraordinary price tag.
            </p>
            
            <p>
              Founded in 2020, we set out to create a collection of demi-fine jewelry that 
              bridges the gap between fashion jewelry and fine jewelry. Our pieces are crafted 
              with the same attention to detail and quality materials as high-end fine jewelry, 
              but designed to be worn every day.
            </p>

            <p>
              Each Velmora piece starts with careful design and material selection. We use 
              only the finest 18K gold plating over sterling silver or brass, ensuring both 
              beauty and durability. Our commitment to hypoallergenic materials means you 
              can wear our jewelry with confidence, knowing it's gentle on your skin.
            </p>

            <p>
              We believe in jewelry that tells a story — pieces that become part of your 
              daily ritual, that you reach for on special occasions and ordinary mornings alike. 
              Jewelry that becomes an extension of you.
            </p>

            <div className="py-8">
              <img
                src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1200&h=600&fit=crop"
                alt="Velmora jewelry collection"
                className="w-full"
              />
            </div>

            <h2 className="font-serif text-2xl text-charcoal pt-8">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-velmora-sand/20">
                <h3 className="font-serif text-lg mb-2">Quality First</h3>
                <p className="text-sm">
                  We never compromise on materials. Every piece is made to last with 
                  premium 18K gold plating and hypoallergenic components.
                </p>
              </div>
              <div className="p-6 bg-velmora-sand/20">
                <h3 className="font-serif text-lg mb-2">Accessible Luxury</h3>
                <p className="text-sm">
                  Beautiful jewelry should be within reach. We offer premium quality 
                  at accessible price points.
                </p>
              </div>
              <div className="p-6 bg-velmora-sand/20">
                <h3 className="font-serif text-lg mb-2">Sustainable Practices</h3>
                <p className="text-sm">
                  We're committed to responsible sourcing and sustainable packaging 
                  to minimize our environmental impact.
                </p>
              </div>
              <div className="p-6 bg-velmora-sand/20">
                <h3 className="font-serif text-lg mb-2">Customer Focus</h3>
                <p className="text-sm">
                  Your satisfaction is our priority. We offer free shipping, easy 
                  returns, and dedicated customer support.
                </p>
              </div>
            </div>

            <p className="pt-8">
              Thank you for being part of the Velmora story. We can't wait to see 
              how you wear our pieces.
            </p>

            <div className="pt-8">
              <Link to="/shop" className="btn-primary">
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}