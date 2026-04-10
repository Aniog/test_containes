import { MessageSquare, Eye, Stethoscope, Car, Music, ShieldCheck } from 'lucide-react';

const apps = [
  {
    icon: MessageSquare,
    title: 'Natural Language',
    description: 'Chatbots, translation, summarization, and code generation powered by large language models.',
    tag: 'NLP',
    color: 'text-violet-400',
    tagBg: 'bg-violet-500/15 text-violet-300',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Object detection, facial recognition, and image generation that rivals human perception.',
    tag: 'Vision',
    color: 'text-indigo-400',
    tagBg: 'bg-indigo-500/15 text-indigo-300',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'AI diagnoses diseases from scans, accelerates drug discovery, and personalizes treatment plans.',
    tag: 'MedTech',
    color: 'text-pink-400',
    tagBg: 'bg-pink-500/15 text-pink-300',
  },
  {
    icon: Car,
    title: 'Autonomous Vehicles',
    description: 'Self-driving systems process sensor data in real time to navigate complex environments safely.',
    tag: 'Robotics',
    color: 'text-cyan-400',
    tagBg: 'bg-cyan-500/15 text-cyan-300',
  },
  {
    icon: Music,
    title: 'Creative AI',
    description: 'Generative models compose music, write stories, design art, and produce video content.',
    tag: 'Generative',
    color: 'text-amber-400',
    tagBg: 'bg-amber-500/15 text-amber-300',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'AI detects anomalies, predicts threats, and responds to attacks faster than any human team.',
    tag: 'Security',
    color: 'text-green-400',
    tagBg: 'bg-green-500/15 text-green-300',
  },
];

const Applications = () => (
  <section id="applications" className="bg-[#050510] py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          AI <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Applications</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Artificial intelligence is already transforming every major industry on the planet.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map(({ icon: Icon, title, description, tag, color, tagBg }) => (
          <div
            key={title}
            className="group rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-white/15 p-6 flex flex-col gap-4 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <Icon className={`w-8 h-8 ${color}`} />
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagBg}`}>{tag}</span>
            </div>
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Applications;
