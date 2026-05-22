import EquipmentSection from '../components/mountain/EquipmentSection';
import PageHero from '../components/mountain/PageHero';

const Equipment = () => (
  <>
    <PageHero
      badge="Equipment"
      title="Gear That Saves Lives"
      subtitle="Every piece of equipment is chosen for weight, reliability, and performance in the most hostile environments on Earth."
      bgImgId="page-hero-equip-bg-d4e5f6"
      bgQuery="[page-hero-equip-subtitle] [page-hero-equip-title]"
      titleId="page-hero-equip-title"
      subtitleId="page-hero-equip-subtitle"
    />
    <EquipmentSection hideHeader />
  </>
);

export default Equipment;
