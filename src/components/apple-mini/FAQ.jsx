import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 'faq-1',
    question: 'What makes the APPLE mini different from other mini PCs?',
    answer:
      'The APPLE mini is powered by the M4 chip — Apple\'s most advanced silicon — which delivers desktop-class CPU and GPU performance in a 12.7cm square footprint. Unlike x86-based mini PCs, the M4\'s unified memory architecture means the CPU, GPU, and Neural Engine all share the same high-bandwidth memory pool, eliminating bottlenecks.',
  },
  {
    id: 'faq-2',
    question: 'How many external displays can the APPLE mini support?',
    answer:
      'The base APPLE mini supports up to 2 external displays simultaneously — one via HDMI 2.1 (up to 8K/60Hz or 4K/240Hz) and one via Thunderbolt 4. The APPLE mini Pro and Max models support up to 3 external displays, making them ideal for multi-monitor workstation setups.',
  },
  {
    id: 'faq-3',
    question: 'Can I upgrade the RAM or storage after purchase?',
    answer:
      'The unified memory and SSD storage are integrated into the M4 chip package and cannot be upgraded after purchase. We recommend choosing the configuration that best fits your long-term needs. The 24GB or 64GB memory options are ideal for power users, video editors, and developers running large workloads.',
  },
  {
    id: 'faq-4',
    question: 'Is the APPLE mini compatible with Windows or Linux?',
    answer:
      'The APPLE mini ships with macOS Sequoia. While it is possible to run Linux natively on Apple Silicon hardware through community projects like Asahi Linux, official Windows support via Boot Camp is not available on M-series chips. Windows can be run in a virtual machine using tools like Parallels Desktop.',
  },
  {
    id: 'faq-5',
    question: 'What ports are included on the APPLE mini?',
    answer:
      'The APPLE mini includes: 3× Thunderbolt 4 (USB-C, up to 40Gb/s), 2× USB-A (USB 3.2 Gen 2, 10Gb/s), 1× HDMI 2.1, 1× Gigabit Ethernet (upgradeable to 10Gb), 1× 3.5mm headphone jack with high-impedance headphone support, and 1× front-facing USB-C port for easy peripheral access.',
  },
  {
    id: 'faq-6',
    question: 'Does the APPLE mini come with a keyboard and mouse?',
    answer:
      'No, the APPLE mini does not include a keyboard, mouse, or display. It is designed to work with your existing peripherals. Apple\'s Magic Keyboard, Magic Mouse, and Magic Trackpad are sold separately and connect wirelessly via Bluetooth or via USB-C.',
  },
  {
    id: 'faq-7',
    question: 'What is the warranty and return policy?',
    answer:
      'Every APPLE mini comes with a 1-year limited warranty covering manufacturing defects. AppleCare+ can be added for up to 3 years of coverage including accidental damage protection. We offer a 14-day return window for unopened or defective units, with free return shipping.',
  },
  {
    id: 'faq-8',
    question: 'How loud is the APPLE mini under load?',
    answer:
      'The APPLE mini is remarkably quiet. Under typical workloads, the fan is virtually inaudible. Even under sustained heavy loads like video rendering or compiling large codebases, the fan noise stays well below 25dB — quieter than most office environments. The fanless thermal design option is completely silent.',
  },
];

const FaqItem = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
          {faq.question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
            open ? 'border-blue-500 text-blue-500 rotate-180' : 'border-gray-200 text-gray-400'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-24 md:py-32 bg-gray-50 px-6">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">FAQ</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
          Questions answered
        </h2>
        <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
          Everything you need to know before you buy.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8">
        {faqs.map((faq) => (
          <FaqItem key={faq.id} faq={faq} />
        ))}
      </div>

      <p className="text-center text-gray-400 text-sm mt-8">
        Still have questions?{' '}
        <a href="#" className="text-blue-600 hover:underline font-medium">
          Contact our support team →
        </a>
      </p>
    </div>
  </section>
);

export default FAQ;
