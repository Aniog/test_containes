import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import ButterSection from '@/components/home/ButterSection';
import CheeseSection from '@/components/home/CheeseSection';
import RecipesSection from '@/components/home/RecipesSection';
import Footer from '@/components/home/Footer';

const storyPoints = [
  { emoji: '🐄', title: 'Pasture-Raised', body: 'Our cows roam freely on lush green pastures year-round, producing richer, more flavourful milk.' },
  { emoji: '🧈', title: 'Small-Batch Churned', body: 'Every batch of butter is churned slowly in small quantities to preserve its natural character.' },
  { emoji: '🧀', title: 'Cave-Aged Cheese', body: 'Our cheeses are aged in temperature-controlled cellars, developing complex flavours over months.' },
];

const Home = () => (
  <div className="bg-cream min-h-screen">
    <Navbar />
    <HeroSection />

    {/* Our Story */}
    <section id="story" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="uppercase tracking-widest text-sm font-semibold text-sage mb-3 block">
            Since 1987
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brown-dark mb-4">
            Our Story
          </h2>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Three generations of dairy farmers, one unwavering commitment: to make the
            finest butter and cheese using only traditional methods and the best milk
            nature can provide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {storyPoints.map(({ emoji, title, body }) => (
            <div key={title} className="bg-parchment rounded-2xl p-8 text-center shadow-sm">
              <div className="text-5xl mb-4">{emoji}</div>
              <h3 className="font-playfair text-xl font-bold text-brown-dark mb-2">{title}</h3>
              <p className="text-warm-gray text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ButterSection />
    <CheeseSection />
    <RecipesSection />
    <Footer />
  </div>
);

export default Home;
