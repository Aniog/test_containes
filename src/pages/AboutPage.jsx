const AboutPage = () => {
  return (
    <main className="pt-20 min-h-screen bg-velmora-cream">
      {/* Hero */}
      <div className="relative py-24 bg-velmora-dark overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1920&h=600&fit=crop)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white">Our Story</h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-velmora-textLight leading-relaxed text-lg mb-8">
            Founded with a passion for creating jewelry that transcends trends, Velmora represents the 
            intersection of timeless elegance and modern sensibility. We believe that beautiful jewelry 
            should be accessible — not just for special occasions, but for everyday moments that deserve to be celebrated.
          </p>
          
          <p className="text-velmora-textLight leading-relaxed text-lg mb-8">
            Each piece in our collection is thoughtfully designed by our expert artisans, who bring decades 
            of experience in jewelry making. We work with only the finest materials — 18K gold plating, 
            genuine crystals, and hypoallergenic metals — ensuring that your jewelry not only looks luxurious 
            but feels comfortable enough to wear every day.
          </p>

          <p className="text-velmora-textLight leading-relaxed text-lg mb-8">
            Our commitment to quality extends beyond the product itself. We strive to create a seamless 
            experience for every customer, from the moment you discover our collection to the day your 
            jewelry becomes a treasured part of your personal story.
          </p>

          <div className="mt-12 pt-8 border-t border-velmora-border">
            <h2 className="font-serif text-2xl text-velmora-dark mb-4">Our Values</h2>
            <ul className="space-y-4 text-velmora-textLight">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-velmora-gold rounded-full mt-2" />
                <span>Quality without compromise</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-velmora-gold rounded-full mt-2" />
                <span>Sustainable and ethical practices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-velmora-gold rounded-full mt-2" />
                <span>Customer-first approach</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-velmora-gold rounded-full mt-2" />
                <span>Timeless design over fleeting trends</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;