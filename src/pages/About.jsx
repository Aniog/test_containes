import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Heart, Eye, BookOpen, Globe, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Eye,
    title: 'Awareness',
    description: 'We believe that understanding wildlife is the first step toward protecting it. Our content is designed to educate and inspire.',
  },
  {
    icon: Heart,
    title: 'Conservation',
    description: 'Many species face extinction. We highlight conservation efforts and the importance of protecting natural habitats.',
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'From schoolchildren to wildlife enthusiasts, we make learning about animals accessible, engaging, and fun.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Animals know no borders. We cover species from every continent and ocean, celebrating the full diversity of life.',
  },
];

const team = [
  { name: 'Dr. Sarah Chen', role: 'Wildlife Biologist', specialty: 'African Mammals' },
  { name: 'James Okafor', role: 'Marine Ecologist', specialty: 'Ocean Life' },
  { name: 'Priya Sharma', role: 'Conservation Scientist', specialty: 'Endangered Species' },
  { name: 'Lucas Müller', role: 'Nature Photographer', specialty: 'Wildlife Photography' },
];

const About = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef} className="bg-[#f8f5f0] min-h-screen">
      {/* Header */}
      <section className="bg-[#1b4332] py-16 px-4 text-center">
        <span className="text-[#e9c46a] text-sm font-semibold uppercase tracking-widest">Our Story</span>
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mt-2 mb-4">About Animal World</h1>
        <p className="text-green-100 max-w-xl mx-auto text-lg">
          Dedicated to celebrating, educating, and protecting the incredible diversity of life on our planet.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Wildlife in nature"
              className="w-full h-80 object-cover"
              data-strk-img-id="about-mission-img-s1t2u3"
              data-strk-img="[about-mission-subtitle] [about-mission-title] wildlife nature conservation"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#2d6a4f] text-sm font-semibold uppercase tracking-widest">Our Mission</span>
            <h2 id="about-mission-title" className="text-3xl md:text-4xl font-bold font-serif text-[#1a1a1a] mt-2 mb-4">
              Connecting People with Wildlife
            </h2>
            <p id="about-mission-subtitle" className="text-gray-600 leading-relaxed mb-4">
              Animal World was founded with a simple but powerful mission: to bring the wonders of the natural world to everyone. We believe that when people truly understand and appreciate wildlife, they become its greatest advocates.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Through stunning photography, in-depth profiles, and compelling stories, we explore the lives of animals across every habitat on Earth — from the sun-baked savannas of Africa to the frozen tundras of Antarctica.
            </p>
            <Link
              to="/animals"
              className="bg-[#2d6a4f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1b4332] transition-colors inline-flex items-center gap-2"
            >
              Explore Animals <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#2d6a4f] text-sm font-semibold uppercase tracking-widest">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1a1a1a] mt-2">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-[#f8f5f0] rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-[#2d6a4f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold font-serif text-[#1a1a1a] text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#2d6a4f] text-sm font-semibold uppercase tracking-widest">The People Behind It</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1a1a1a] mt-2">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={member.name} className="bg-white rounded-2xl shadow-md overflow-hidden text-center">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={member.name}
                className="w-full h-48 object-cover object-top"
                data-strk-img-id={`about-team-${i}-img-v4w5x6`}
                data-strk-img={`[about-team-${i}-role] [about-team-${i}-specialty] professional portrait`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
              />
              <div className="p-5">
                <h3 className="font-bold font-serif text-[#1a1a1a] text-lg">{member.name}</h3>
                <p id={`about-team-${i}-role`} className="text-[#2d6a4f] text-sm font-semibold mt-1">{member.role}</p>
                <p id={`about-team-${i}-specialty`} className="text-gray-400 text-xs mt-1">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2d6a4f] py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
          Start Your Wildlife Journey
        </h2>
        <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
          Discover the animals that share our world and learn how you can help protect them.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/animals"
            className="bg-[#e9c46a] text-[#1a1a1a] px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors inline-flex items-center justify-center gap-2"
          >
            Browse Animals <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/habitats"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1b4332] transition-colors"
          >
            Explore Habitats
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
