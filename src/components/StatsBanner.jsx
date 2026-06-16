import { Factory, Globe, Users, Award } from 'lucide-react';

const stats = [
  { icon: Factory, value: '35+', label: 'Years Experience' },
  { icon: Globe, value: '60+', label: 'Countries Served' },
  { icon: Users, value: '2,500+', label: 'Happy Clients' },
  { icon: Award, value: '12', label: 'Industry Awards' },
];

export default function StatsBanner() {
  return (
    <section className="bg-[#1a3a5c] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-10 h-10 bg-[#c9a84c]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-[#c9a84c]" />
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
