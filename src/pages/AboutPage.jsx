import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Heart, Target, Users, Leaf } from 'lucide-react';

const stats = [
  { value: '50K+', label: 'Happy Swimmers' },
  { value: '200+', label: 'Products' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
];

const team = [
  { imgId: 'team-img-a1b2', nameId: 'team-name-1', roleId: 'team-role-1', name: 'Marcus Chen', role: 'Founder & Head Coach', bio: 'Former Olympic swimmer with 20 years of competitive experience. Marcus founded SwimGear to bring pro-level equipment to every swimmer.' },
  { imgId: 'team-img-c3d4', nameId: 'team-name-2', roleId: 'team-role-2', name: 'Lena Hoffmann', role: 'Product Director', bio: 'Biomechanics engineer and triathlete. Lena leads our product testing and ensures every item meets our performance standards.' },
  { imgId: 'team-img-e5f6', nameId: 'team-name-3', roleId: 'team-role-3', name: 'Diego Reyes', role: 'Customer Experience', bio: 'Competitive open-water swimmer and certified swim instructor. Diego helps customers find the perfect gear for their goals.' },
];

const milestones = [
  { year: '2009', title: 'SwimGear Founded', desc: 'Started in a garage with a passion for better swim gear and a small online store.' },
  { year: '2012', title: 'First Retail Store', desc: 'Opened our flagship store in Miami, FL, serving the local swim community.' },
  { year: '2016', title: 'Launched Own Brand', desc: 'Introduced our in-house line of training equipment, designed with competitive swimmers.' },
  { year: '2020', title: 'Global Shipping', desc: 'Expanded to ship worldwide, reaching swimmers in over 40 countries.' },
  { year: '2024', title: '50,000 Customers', desc: 'Celebrated serving 50,000 happy swimmers across all skill levels.' },
];

const values = [
  { icon: Heart, title: 'Passion for Swimming', desc: 'Every team member is a swimmer. We live and breathe the sport, which means we understand exactly what you need.' },
  { icon: Target, title: 'Performance First', desc: 'We only stock and create gear that genuinely improves your performance. No gimmicks, no compromises.' },
  { icon: Users, title: 'Community Driven', desc: 'We partner with coaches, clubs, and athletes to continuously improve our products and service.' },
  { icon: Leaf, title: 'Sustainability', desc: 'We\'re committed to eco-friendly packaging and partnering with brands that prioritize sustainable manufacturing.' },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-sky-900 via-sky-800 to-cyan-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-cyan-400/20 text-cyan-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-cyan-400/30">
              Our Story
            </span>
            <h1 id="about-page-title" className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Passionate About Swimming Since 2009
            </h1>
            <p id="about-page-sub" className="text-sky-100 text-lg leading-relaxed mb-6">
              SwimGear was founded by competitive swimmers who were frustrated with gear that didn't perform at the highest level. We set out to create and curate the best swimming equipment available.
            </p>
            <Link
              to="/products"
              className="inline-flex bg-white text-sky-700 hover:bg-cyan-50 rounded-full px-8 py-3 font-semibold transition shadow-lg"
            >
              Shop Our Collection
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden h-72 md:h-80 bg-sky-800">
            <img
              alt="SwimGear team"
              className="w-full h-full object-cover"
              data-strk-img-id="about-hero-img-7f8g"
              data-strk-img="[about-page-sub] [about-page-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-sky-700 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{s.value}</div>
                <div className="text-sky-200 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden h-72 bg-sky-100">
            <img
              alt="Swimmer in pool"
              className="w-full h-full object-cover"
              data-strk-img-id="about-mission-img-9h0i"
              data-strk-img="[about-mission-desc] [about-mission-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div>
            <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Our Mission
            </span>
            <h2 id="about-mission-title" className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
              Gear That Performs as Hard as You Do
            </h2>
            <p id="about-mission-desc" className="text-slate-600 leading-relaxed mb-4">
              We believe every swimmer deserves access to equipment that genuinely improves their performance — not just gear that looks good on a shelf. That's why we test every product ourselves before it ever reaches our store.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, we partner with the world's leading swim brands and our own in-house engineers to bring you products that improve your performance and enjoyment in the water, whether you're doing laps at your local pool or competing at the national level.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sky-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-3">Our Core Values</h2>
            <p className="text-slate-600 max-w-xl mx-auto">The principles that guide every decision we make, from product selection to customer service.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-sky-700 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-sky-900 mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-3">Milestones</h2>
            <p className="text-slate-600">From a small garage startup to a global swim community.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sky-100" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-sky-700 flex items-center justify-center shrink-0 shadow-md">
                    <span className="text-white text-xs font-bold">{m.year.slice(2)}</span>
                  </div>
                  <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100 flex-1">
                    <div className="text-cyan-600 text-xs font-semibold mb-1">{m.year}</div>
                    <h3 className="text-sky-900 font-semibold mb-1">{m.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-sky-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              The People Behind SwimGear
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-3">Meet the Team</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Swimmers, coaches, and engineers united by a love of the water.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-sm hover:shadow-md transition">
                <div className="h-56 bg-sky-100 overflow-hidden">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.roleId}] [${member.nameId}] swimmer portrait professional`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3 id={member.nameId} className="text-lg font-bold text-sky-900 mb-0.5">{member.name}</h3>
                  <p id={member.roleId} className="text-cyan-600 text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-sky-900 to-cyan-700 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Join the SwimGear Community
          </h2>
          <p className="text-sky-100 text-lg mb-8">
            Thousands of swimmers trust us for their gear. Find out why — browse our collection or get in touch with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-white text-sky-700 hover:bg-cyan-50 rounded-full px-8 py-3.5 font-semibold transition shadow-lg">
              Shop Now
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-sky-700 rounded-full px-8 py-3.5 font-semibold transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
