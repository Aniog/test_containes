import HeroSection from '@/components/french-food/HeroSection';
import IntroSection from '@/components/french-food/IntroSection';
import DishesSection from '@/components/french-food/DishesSection';
import RegionsSection from '@/components/french-food/RegionsSection';
import EssentialsSection from '@/components/french-food/EssentialsSection';
import MealStructureSection from '@/components/french-food/MealStructureSection';
import FooterSection from '@/components/french-food/FooterSection';

const FrenchFoodPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <HeroSection />
      <IntroSection />
      <DishesSection />
      <RegionsSection />
      <EssentialsSection />
      <MealStructureSection />
      <FooterSection />
    </div>
  );
};

export default FrenchFoodPage;
