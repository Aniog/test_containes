import { Factory, Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <img
                data-strk-img-id="about-factory-8f2a9c"
                data-strk-img="[about-subtitle] [about-title] modern manufacturing facility factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY manufacturing facility"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-slate-900 p-6 text-white shadow-xl">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sm text-slate-300">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="section-title">About ARTITECT MACHINERY</h2>
            <p id="about-subtitle" className="section-subtitle">
              Building the future of sheet metal fabrication with precision,
              innovation, and unwavering commitment to quality.
            </p>

            <div className="mt-8 space-y-6">
              <p className="text-base leading-relaxed text-slate-600">
                Founded in 1998, ARTITECT MACHINERY has grown from a small
                engineering workshop to a global leader in sheet metal folding
                technology. Our machines are trusted by manufacturers across
                automotive, aerospace, HVAC, and general fabrication industries.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                Every ARTITECT machine is a testament to our philosophy: combine
                robust engineering with intuitive design. We don't just build
                machines—we build partnerships that last decades.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <Target className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Our Mission</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    To empower manufacturers with folding solutions that redefine
                    precision and efficiency.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <Heart className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Our Values</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Integrity, innovation, and customer success drive everything
                    we do.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <Users className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Our Team</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    200+ skilled engineers and technicians dedicated to your success.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <Factory className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Our Facility</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    State-of-the-art 50,000 sq ft manufacturing campus.
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
