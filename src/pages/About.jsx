import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Lightbulb, Globe, Heart, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const teamMembers = [
  { id: 'dr-chen', name: 'Dr. Mei Chen', role: 'Microbiologist & Founder', bio: 'PhD in Microbiology from MIT. 15 years studying extremophile bacteria in deep-sea hydrothermal vents.', titleId: 'team-chen-title', descId: 'team-chen-desc', imgId: 'team-chen-img-o4p5q6' },
  { id: 'dr-okafor', name: 'Dr. Emeka Okafor', role: 'Virologist', bio: 'Specialist in bacteriophage biology and phage therapy. Former researcher at the Pasteur Institute.', titleId: 'team-okafor-title', descId: 'team-okafor-desc', imgId: 'team-okafor-img-r7s8t9' },
  { id: 'dr-santos', name: 'Dr. Lucia Santos', role: 'Mycologist', bio: 'Expert in fungal ecology and the mycorrhizal networks that connect forest ecosystems worldwide.', titleId: 'team-santos-title', descId: 'team-santos-desc', imgId: 'team-santos-img-u1v2w3' },
];

const values = [
  { icon: BookOpen, title: 'Science Education', desc: 'Making complex microbiology accessible to everyone, from students to curious adults.', color: '#3DBFA8', bg: '#E8F7F4' },
  { icon: Lightbulb, title: 'Curiosity-Driven', desc: 'We believe wonder is the foundation of discovery. Every microbe has a story worth telling.', color: '#FFD166', bg: '#FFF9E6' },
  { icon: Globe, title: 'Global Perspective', desc: 'Microorganisms connect all life on Earth. Understanding them is understanding ourselves.', color: '#5BA4CF', bg: '#EAF4FB' },
  { icon: Heart, title: 'Open Access', desc: 'All our content is freely available. Science belongs to everyone.', color: '#FF8B64', bg: '#FFF0EB' },
];

const milestones = [
  { year: '2019', text: 'MicroCosmos founded by Dr. Mei Chen after a decade of field research.' },
  { year: '2020', text: 'Launched our first interactive microscopy database with 500+ species.' },
  { year: '2022', text: 'Partnered with 12 universities to expand our image library.' },
  { year: '2024', text: 'Reached 2 million monthly readers across 80 countries.' },
  { year: '2026', text: 'Launched the MicroCosmos Gallery with AI-enhanced microscopy images.' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F5FAF8] pt-16">

      {/* Hero */}
      <div className="bg-white border-b border-[#D9EDE8] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#3DBFA8] mb-3 block">Our Mission</span>
              <h1 className="text-4xl md:text-5xl font-black text-[#2C3E50] leading-tight mb-4">
                Illuminating the<br />
                <span className="text-[#3DBFA8]">Invisible World</span>
              </h1>
              <p className="text-[#7F8C8D] leading-relaxed mb-4">
                MicroCosmos was born from a simple belief: the microscopic world is the most fascinating place in the universe, and everyone deserves to see it.
              </p>
              <p className="text-[#7F8C8D] leading-relaxed mb-8">
                We combine rigorous science with stunning visual storytelling to bring the hidden universe of microorganisms to life — for students, educators, and the simply curious.
              </p>
              <div className="flex gap-8 pt-6 border-t border-[#D9EDE8]">
                {[{ v: '2M+', l: 'Monthly Readers' }, { v: '80+', l: 'Countries' }, { v: '500+', l: 'Species Documented' }].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-black text-[#3DBFA8]">{s.v}</div>
                    <div className="text-xs text-[#7F8C8D] mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#D9EDE8]">
              <img
                id="about-hero-img-label"
                alt="About MicroCosmos"
                data-strk-img-id="about-hero-img-x4y5z6"
                data-strk-img="[about-hero-img-label]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-[#F5FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3DBFA8] mb-2 block">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white border border-[#D9EDE8] rounded-xl p-6 hover:border-[#3DBFA8] transition-colors">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: v.bg }}>
                    <Icon className="w-5 h-5" style={{ color: v.color }} />
                  </div>
                  <h3 className="text-sm font-bold text-[#2C3E50] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#7F8C8D] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-white border-y border-[#D9EDE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3DBFA8] mb-2 block">The Scientists</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50]">Meet Our Team</h2>
            <p className="text-[#7F8C8D] mt-3 max-w-md mx-auto">World-class researchers dedicated to making microbiology accessible and inspiring.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-[#F5FAF8] border border-[#D9EDE8] rounded-xl overflow-hidden hover:border-[#3DBFA8] transition-colors">
                <img
                  alt={member.name}
                  data-strk-img-id={member.imgId}
                  data-strk-img={`[${member.descId}] [${member.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-52 object-cover object-top"
                />
                <div className="p-5">
                  <h3 id={member.titleId} className="text-base font-bold text-[#2C3E50]">{member.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#3DBFA8] mt-0.5 mb-2">{member.role}</p>
                  <p id={member.descId} className="text-sm text-[#7F8C8D] leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-[#F5FAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3DBFA8] mb-2 block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50]">Milestones</h2>
          </div>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center font-black text-sm"
                  style={{ background: i % 2 === 0 ? '#E8F7F4' : '#EAF4FB', color: i % 2 === 0 ? '#3DBFA8' : '#5BA4CF' }}>
                  {m.year.slice(2)}
                </div>
                <div className="bg-white border border-[#D9EDE8] rounded-xl p-4 flex-1">
                  <div className="text-xs font-bold text-[#3DBFA8] mb-1">{m.year}</div>
                  <p className="text-sm text-[#7F8C8D]">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-[#3DBFA8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Ready to Explore?</h2>
          <p className="text-white/80 mb-7">Dive into our database of microorganisms or browse the gallery of microscopy images.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/explore" className="inline-flex items-center gap-2 bg-white text-[#2C3E50] font-semibold px-6 py-3 rounded-lg hover:bg-[#F5FAF8] transition-colors">
              Start Exploring <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors">
              View Gallery →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

