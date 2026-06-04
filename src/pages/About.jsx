import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Leaf, Heart, Award, Users } from 'lucide-react';
import { themes } from '@/lib/themes';

const t = themes.pop;

const values = [
  { icon: <Leaf className="w-6 h-6" style={{ color: t.black }} />, title: 'Local & Organic', desc: 'We source our flour, eggs, and dairy from farms within 50 miles of our bakery.' },
  { icon: <Heart className="w-6 h-6" style={{ color: t.red }} />, title: 'Made with Care', desc: 'Every item is shaped by hand. No shortcuts, no preservatives — just honest baking.' },
  { icon: <Award className="w-6 h-6" style={{ color: t.red }} />, title: 'Award-Winning', desc: 'Recognized by the City Artisan Guild as Best Bakery three years running.' },
  { icon: <Users className="w-6 h-6" style={{ color: t.black }} />, title: 'Community First', desc: 'We donate unsold bread each evening to local shelters and food banks.' },
];

const team = [
  { id: 'marie', titleId: 'team-marie-title', descId: 'team-marie-desc', imgId: 'team-img-marie-a1b2c3', name: 'Marie Dupont', role: 'Founder & Head Pastry Chef', bio: 'Trained in Lyon and Paris, Marie brings 40 years of artisan baking expertise to every recipe.' },
  { id: 'thomas', titleId: 'team-thomas-title', descId: 'team-thomas-desc', imgId: 'team-img-thomas-d4e5f6', name: 'Thomas Renard', role: 'Head Baker', bio: 'Thomas specializes in sourdough and naturally leavened breads, arriving at 4am every single day.' },
  { id: 'sofia', titleId: 'team-sofia-title', descId: 'team-sofia-desc', imgId: 'team-img-sofia-g7h8i9', name: 'Sofia Marchetti', role: 'Pastry Chef', bio: 'Sofia trained in Florence and brings an Italian sensibility to our tarts, cakes, and seasonal specials.' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page hero */}
      <div style={{ backgroundColor: t.black }} className="py-20 px-6 text-center">
        <p className="font-playfair italic text-lg mb-2" style={{ color: t.red }}>Our Story</p>
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-white">
          About La Maison
        </h1>
        <p className="max-w-xl mx-auto text-sm md:text-base text-white/70">
          A family bakery rooted in tradition, community, and the belief that great
          bread is one of life's simple pleasures.
        </p>
      </div>

      {/* Story section */}
      <div style={{ backgroundColor: t.bg }} className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="about-pg-title" className="text-3xl md:text-4xl font-playfair font-bold mb-6 leading-tight" style={{ color: t.black }}>
              A Family Bakery Since 1987
            </h2>
            <p id="about-pg-desc" className="leading-relaxed mb-5" style={{ color: t.gray }}>
              La Maison Bakery was born in a small kitchen in Lyon, France, where our
              founder Marie Dupont learned to bake alongside her grandmother. When she
              moved to the city in 1987, she brought those recipes — and that spirit —
              with her.
            </p>
            <p className="leading-relaxed mb-5" style={{ color: t.gray }}>
              Today, our team of passionate bakers arrives before dawn every morning to
              prepare fresh bread, pastries, and seasonal treats. We believe that great
              baking is an act of love — and we pour that love into everything we make.
            </p>
            <p className="leading-relaxed" style={{ color: t.gray }}>
              Over the decades, we have grown from a single counter to a full bakery
              and café, but our values have never changed: honest ingredients, traditional
              techniques, and a genuine connection with the people we serve.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]" style={{ border: `4px solid ${t.black}` }}>
              <img
                alt="Inside La Maison Bakery"
                data-strk-img-id="about-pg-img-bakery-j1k2l3"
                data-strk-img="[about-pg-desc] [about-pg-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl p-5 shadow-lg text-white" style={{ backgroundColor: t.red }}>
              <p className="text-3xl font-playfair font-bold">37+</p>
              <p className="text-sm font-medium opacity-90">Years of Baking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={{ backgroundColor: t.card }} className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12" style={{ color: t.black }}>What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl p-6 text-center shadow-sm border border-gray-200" style={{ backgroundColor: t.bg }}>
                <div className="inline-flex items-center justify-center bg-white rounded-xl p-4 shadow-sm mb-4 border border-gray-100">
                  {v.icon}
                </div>
                <h4 className="font-playfair font-semibold mb-2" style={{ color: t.black }}>{v.title}</h4>
                <p className="text-sm" style={{ color: t.muted }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div style={{ backgroundColor: t.bg }} className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12" style={{ color: t.black }}>Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="rounded-2xl overflow-hidden shadow-md text-center border border-gray-200" style={{ backgroundColor: t.card }}>
                <div className="h-56 overflow-hidden">
                  <img
                    alt={member.name}
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={member.titleId} className="text-xl font-playfair font-semibold mb-1" style={{ color: t.black }}>{member.name}</h3>
                  <p className="text-sm font-medium mb-3" style={{ color: t.red }}>{member.role}</p>
                  <p id={member.descId} className="text-sm leading-relaxed" style={{ color: t.muted }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
