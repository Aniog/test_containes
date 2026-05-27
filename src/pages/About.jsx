import { useEffect, useRef, useState } from 'react';
import { Microscope, Target, Users, Mail, Send, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  {
    id: 'team-1',
    name: 'Dr. Elena Vasquez',
    role: 'Founder & Chief Scientist',
    bio: 'PhD in Microbiology from MIT. 15 years researching extremophile bacteria in hydrothermal vents.',
  },
  {
    id: 'team-2',
    name: 'Dr. James Okafor',
    role: 'Head of Virology',
    bio: 'Former WHO researcher specializing in emerging viral pathogens and pandemic preparedness.',
  },
  {
    id: 'team-3',
    name: 'Dr. Mei Lin',
    role: 'Ecology & Microbiome Lead',
    bio: 'Pioneering research on soil microbiomes and their role in carbon sequestration and climate change.',
  },
  {
    id: 'team-4',
    name: 'Arjun Sharma',
    role: 'Science Communicator',
    bio: 'Award-winning science writer making complex microbiology accessible to curious minds worldwide.',
  },
];

const values = [
  { icon: Microscope, title: 'Scientific Rigor', description: 'Every fact we publish is peer-reviewed and verified by our team of expert scientists.' },
  { icon: Target, title: 'Accessible Science', description: 'We believe everyone deserves to understand the microscopic world that shapes their lives.' },
  { icon: Users, title: 'Community First', description: 'We build a global community of curious minds united by wonder for the invisible world.' },
];

const TeamCard = ({ member }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-[#0d1f35] rounded-2xl border border-[rgba(0,212,255,0.15)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          alt={member.name}
          className="w-full h-full object-cover"
          data-strk-img-id={`team-img-${member.id}`}
          data-strk-img={`[team-bio-${member.id}] [team-role-${member.id}] [team-name-${member.id}] scientist portrait`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f35] via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 id={`team-name-${member.id}`} className="text-[#e8f4f8] font-bold text-lg mb-1">{member.name}</h3>
        <p id={`team-role-${member.id}`} className="text-[#00d4ff] text-sm mb-3">{member.role}</p>
        <p id={`team-bio-${member.id}`} className="text-[#8ab4c8] text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="w-12 h-12 text-[#00d4ff] mb-4" />
        <h3 className="text-[#e8f4f8] text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-[#8ab4c8]">Thank you for reaching out. We'll get back to you within 48 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#8ab4c8] text-sm mb-2">Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="w-full bg-[#112540] border border-[rgba(0,212,255,0.15)] rounded-xl px-4 py-3 text-[#e8f4f8] placeholder-[#4a7a94] text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
          />
        </div>
        <div>
          <label className="block text-[#8ab4c8] text-sm mb-2">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
            className="w-full bg-[#112540] border border-[rgba(0,212,255,0.15)] rounded-xl px-4 py-3 text-[#e8f4f8] placeholder-[#4a7a94] text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-[#8ab4c8] text-sm mb-2">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us what's on your mind..."
          className="w-full bg-[#112540] border border-[rgba(0,212,255,0.15)] rounded-xl px-4 py-3 text-[#e8f4f8] placeholder-[#4a7a94] text-sm focus:outline-none focus:border-[#00d4ff] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#050d1a] font-bold rounded-full px-8 py-3 hover:bg-[#00ffcc] transition-colors"
      >
        Send Message <Send className="w-4 h-4" />
      </button>
    </form>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-[#050d1a] pt-20">
      {/* Header */}
      <div className="bg-[#0d1f35] border-b border-[rgba(0,212,255,0.1)] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">Our Story</span>
          <h1 className="text-4xl md:text-5xl font-black text-[#e8f4f8] mt-3 mb-4">
            About MicroCosmos
          </h1>
          <p className="text-[#8ab4c8] max-w-xl mx-auto leading-relaxed">
            We are scientists, writers, and explorers united by a single mission: to make the invisible world visible.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#e8f4f8] mt-3 mb-6">
              Science for Everyone,<br />
              <span className="text-[#00d4ff]">Curiosity Without Limits</span>
            </h2>
            <p className="text-[#8ab4c8] leading-relaxed mb-5">
              MicroCosmos was founded in 2021 by a group of microbiologists who believed that the most important stories in science were being told only in academic journals — inaccessible to the curious public.
            </p>
            <p className="text-[#8ab4c8] leading-relaxed mb-5">
              We set out to change that. Our platform combines rigorous science with stunning visuals and clear writing to bring the microbial world to life for everyone — from students to seasoned researchers.
            </p>
            <p className="text-[#8ab4c8] leading-relaxed">
              Today, MicroCosmos reaches over 2 million readers monthly across 140 countries, and we're just getting started.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="flex items-start gap-5 bg-[#0d1f35] rounded-2xl border border-[rgba(0,212,255,0.15)] p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div>
                    <h3 className="text-[#e8f4f8] font-semibold mb-1">{val.title}</h3>
                    <p className="text-[#8ab4c8] text-sm leading-relaxed">{val.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#0d1f35] border-y border-[rgba(0,212,255,0.1)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">The Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#e8f4f8] mt-3 mb-4">
              Meet the Scientists
            </h2>
            <p className="text-[#8ab4c8] max-w-lg mx-auto">
              World-class researchers and communicators dedicated to sharing the wonders of microbiology.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#e8f4f8] mt-3 mb-6">
              Contact Us
            </h2>
            <p className="text-[#8ab4c8] leading-relaxed mb-8">
              Have a question, a research collaboration idea, or just want to say hello? We'd love to hear from you.
            </p>
            <div className="flex items-center gap-3 text-[#8ab4c8]">
              <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#00d4ff]" />
              </div>
              <span>hello@microcosmos.science</span>
            </div>
          </div>
          <div className="bg-[#0d1f35] rounded-2xl border border-[rgba(0,212,255,0.15)] p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
