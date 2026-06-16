import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-[#1a2744] to-[#2d3748] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-sm tracking-wider uppercase">Factory / Workshop</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4a574]/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#d4a574]/30 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <div className="accent-line lg:mx-0" />
            <h2 className="section-title text-left mb-6">
              Engineering Excellence Since 1998
            </h2>
            <p className="text-[#4a5568] text-lg leading-relaxed mb-8">
              ARTITECT MACHINERY has been at the forefront of metalworking equipment manufacturing for over two decades. 
              Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for businesses 
              across industries worldwide.
            </p>
            <p className="text-[#4a5568] leading-relaxed mb-8">
              Every machine that leaves our facility represents our dedication to precision engineering and robust design. 
              We understand the demands of industrial production, which is why our equipment is built to perform reliably 
              in the most challenging environments.
            </p>

            {/* Values */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d4a574]/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2744] mb-1">Our Mission</h4>
                  <p className="text-[#4a5568] text-sm">
                    To deliver superior metalworking solutions that empower businesses to achieve their production goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d4a574]/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2744] mb-1">Expert Team</h4>
                  <p className="text-[#4a5568] text-sm">
                    Our engineers and technicians bring decades of combined experience to every project.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#d4a574]/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2744] mb-1">Customer First</h4>
                  <p className="text-[#4a5568] text-sm">
                    We provide comprehensive support from consultation to installation and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
