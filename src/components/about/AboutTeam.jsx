import { useEffect, useRef } from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  {
    id: 'team-elena',
    titleId: 'team-elena-name',
    descId: 'team-elena-role',
    imgId: 'team-img-elena-t001',
    name: 'Dr. Elena Vasquez',
    role: 'Founder & Chief Scientist',
    bio: 'PhD in Microbiology from MIT. 15 years researching extremophile organisms in deep-sea environments.',
  },
  {
    id: 'team-james',
    titleId: 'team-james-name',
    descId: 'team-james-role',
    imgId: 'team-img-james-t002',
    name: 'Dr. James Okafor',
    role: 'Head of Research',
    bio: 'Specialist in gut microbiome research. Former researcher at the Wellcome Sanger Institute.',
  },
  {
    id: 'team-aiko',
    titleId: 'team-aiko-name',
    descId: 'team-aiko-role',
    imgId: 'team-img-aiko-t003',
    name: 'Dr. Aiko Tanaka',
    role: 'Synthetic Biology Lead',
    bio: 'Pioneer in CRISPR applications for microbial engineering. Published 40+ peer-reviewed papers.',
  },
  {
    id: 'team-priya',
    titleId: 'team-priya-name',
    descId: 'team-priya-role',
    imgId: 'team-img-priya-t004',
    name: 'Dr. Priya Sharma',
    role: 'Science Communicator',
    bio: 'Dedicated to making microbiology accessible to everyone. Award-winning science writer and educator.',
  },
];

const values = [
  { icon: Target, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20', title: 'Scientific Accuracy', desc: 'Every piece of content is reviewed by experts and grounded in peer-reviewed research.' },
  { icon: Heart, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20', title: 'Passion for Discovery', desc: 'We believe wonder is the foundation of science. We aim to inspire curiosity in everyone.' },
  { icon: Users, color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20', title: 'Open Access', desc: 'Knowledge about the natural world should be freely available to all, regardless of background.' },
  { icon: Award, color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20', title: 'Excellence', desc: 'We hold ourselves to the highest standards in research, writing, and visual presentation.' },
];

const AboutTeam = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Values */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-medium px-4 py-2 rounded-full mb-4">
            Our Values
          </div>
          <h2 className="font-display font-bold text-3xl text-slate-100">What Drives Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.title} className="bg-[#0d1526] border border-cyan-500/15 rounded-2xl p-6 card-hover text-center">
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mx-auto mb-4 ${v.bg}`}>
                <v.icon className={`w-5 h-5 ${v.color}`} />
              </div>
              <h3 className="font-semibold text-slate-100 mb-2">{v.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium px-4 py-2 rounded-full mb-4">
            <Users className="w-3 h-3" />
            The Team
          </div>
          <h2 className="font-display font-bold text-3xl text-slate-100">Meet the Scientists</h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            A team of researchers, writers, and educators united by a love for the microscopic world.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.id} className="bg-[#0d1526] border border-cyan-500/15 rounded-2xl overflow-hidden card-hover text-center">
              <div className="aspect-square overflow-hidden">
                <img
                  alt={member.name}
                  data-strk-img-id={member.imgId}
                  data-strk-img={`[${member.descId}] [${member.titleId}] scientist portrait`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 id={member.titleId} className="font-display font-semibold text-slate-100 mb-1">
                  {member.name}
                </h3>
                <p id={member.descId} className="text-cyan-400 text-xs font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;
